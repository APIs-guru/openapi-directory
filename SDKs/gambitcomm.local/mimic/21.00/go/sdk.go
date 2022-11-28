package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var ServerList = []string{
	"http://gambitcomm.local",
	"http://127.0.0.1",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://www.gambitcomm.com/site/about.php - Find out more about Gambit
type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// AccessAdd - Adds/Overwrites the user entry in the access control database.
// Adds/Overwrites the user entry in the access control database.
func (s *SDK) AccessAdd(ctx context.Context, request operations.AccessAddRequest) (*operations.AccessAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/access/add/{user}/{agents}/{mask}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AccessAdd200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessDel - Clears a users entry from access control database.
// Using '*' for user clears all the users.
func (s *SDK) AccessDel(ctx context.Context, request operations.AccessDelRequest) (*operations.AccessDelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/access/del/{user}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessDelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AccessDel200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessGetAcldb - Returns the current access control database in use.
// If nothing is specified then this returns "".
func (s *SDK) AccessGetAcldb(ctx context.Context) (*operations.AccessGetAcldbResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/access/get/acldb"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessGetAcldbResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AccessGetAcldb200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessGetAdmindir - Returns the current admin directory.
// If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
func (s *SDK) AccessGetAdmindir(ctx context.Context) (*operations.AccessGetAdmindirResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/access/get/admindir"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessGetAdmindirResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AccessGetAdmindir200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessGetAdminuser - Returns the current administrator.
// If nothing is specified in admin/settings.cfg then returns "".
func (s *SDK) AccessGetAdminuser(ctx context.Context) (*operations.AccessGetAdminuserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/access/get/adminuser"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessGetAdminuserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AccessGetAdminuser200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessGetEnabled - Returns the state of access control checking.
// 0 indicates that it is disabled, 1 indicates it is enabled.
func (s *SDK) AccessGetEnabled(ctx context.Context) (*operations.AccessGetEnabledResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/access/get/enabled"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessGetEnabledResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AccessGetEnabled200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessList - Returns an array of entries.
// Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
func (s *SDK) AccessList(ctx context.Context) (*operations.AccessListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/access/list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AccessEntry
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccessEntries = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessLoad - Loads the specified file for access control data.
// If filename is not specified then the currently set 'acldb' parameter is used.
func (s *SDK) AccessLoad(ctx context.Context, request operations.AccessLoadRequest) (*operations.AccessLoadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/access/load/{filename}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessLoadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccessLoad200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessSave - Saves current access control data in specified file.
// If filename is not specified then the currently set 'acldb' parameter is used.
func (s *SDK) AccessSave(ctx context.Context, request operations.AccessSaveRequest) (*operations.AccessSaveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/access/save/{filename}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessSaveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccessSave200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessSetAcldb - Allows setting the name of the current access control database.
// This will be used for subsequent load and save operations.
func (s *SDK) AccessSetAcldb(ctx context.Context, request operations.AccessSetAcldbRequest) (*operations.AccessSetAcldbResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/access/set/acldb/{databaseName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessSetAcldbResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AccessSetAcldb200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccessSetEnabled - Allows the user to enable/disable the access control check.
// 0 indicates disabled, 1 indicates enabled.
func (s *SDK) AccessSetEnabled(ctx context.Context, request operations.AccessSetEnabledRequest) (*operations.AccessSetEnabledResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/access/set/enabled/{enabledOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccessSetEnabledResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AccessSetEnabled200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// Add - Add an entry to a table.
// The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
func (s *SDK) Add(ctx context.Context, request operations.AddRequest) (*operations.AddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/add/{object}/{instance}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.Add200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AddDaemonTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
// Add a new timer script to be executed at specified interval (in msec) with the specified argument.
func (s *SDK) AddDaemonTimerScript(ctx context.Context, request operations.AddDaemonTimerScriptRequest) (*operations.AddDaemonTimerScriptResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/timer/script/add/{script}/{interval}/{arg}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddDaemonTimerScriptResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AddDaemonTimerScript200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AddIpalias - Adds a new ipalias for the agent.
// port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
func (s *SDK) AddIpalias(ctx context.Context, request operations.AddIpaliasRequest) (*operations.AddIpaliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddIpaliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AddIpalias200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AddTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
// Add a new timer script to be executed at specified interval (in msec) with the specified argument.
func (s *SDK) AddTimerScript(ctx context.Context, request operations.AddTimerScriptRequest) (*operations.AddTimerScriptResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddTimerScriptResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AddTimerScript200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AgentRemove - Remove the current agent.
// For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
func (s *SDK) AgentRemove(ctx context.Context, request operations.AgentRemoveRequest) (*operations.AgentRemoveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/remove", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AgentRemoveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AgentRemove200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AgentStoreCopy - This command copies the variable store from the other agent to this agent.
// This command copies the variable store from the other agent to this agent.
func (s *SDK) AgentStoreCopy(ctx context.Context, request operations.AgentStoreCopyRequest) (*operations.AgentStoreCopyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/store/copy/{otherAgent}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AgentStoreCopyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AgentStoreCopy200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AgentStoreExists - This command can be used as a predicate to ascertain the existence of a given variable.
// It returns "1" if the variable exists, else "0".
func (s *SDK) AgentStoreExists(ctx context.Context, request operations.AgentStoreExistsRequest) (*operations.AgentStoreExistsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/store/exists/{var}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AgentStoreExistsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AgentStoreExists200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AgentStoreGet - Fetches the value associated with a variable.
// The value will be returned as a string (like all Tcl values).
func (s *SDK) AgentStoreGet(ctx context.Context, request operations.AgentStoreGetRequest) (*operations.AgentStoreGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/store/get/{var}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AgentStoreGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AgentStoreGet200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AgentStoreList - This command will return the list of variables in the said scope.
// The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
func (s *SDK) AgentStoreList(ctx context.Context, request operations.AgentStoreListRequest) (*operations.AgentStoreListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/store/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AgentStoreListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AgentStoreList200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AgentStoreLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
// These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
func (s *SDK) AgentStoreLreplace(ctx context.Context, request operations.AgentStoreLreplaceRequest) (*operations.AgentStoreLreplaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/store/lreplace/{var}/{index}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AgentStoreLreplaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AgentStoreLreplace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AgentStorePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
// It returns "1" if the variable is persistent, else "0".
func (s *SDK) AgentStorePersists(ctx context.Context, request operations.AgentStorePersistsRequest) (*operations.AgentStorePersistsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/store/persists/{var}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AgentStorePersistsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AgentStorePersists200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AgentStoreSet - These commands allow the creation of a new variable, or changing an existing value.
// The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
func (s *SDK) AgentStoreSet(ctx context.Context, request operations.AgentStoreSetRequest) (*operations.AgentStoreSetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/store/set/{var}/{persist}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AgentStoreSetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AgentStoreSet200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AgentStoreUnset - Deletes a variable which is currently defined.
// This will cleanup persistent variables if needed
func (s *SDK) AgentStoreUnset(ctx context.Context, request operations.AgentStoreUnsetRequest) (*operations.AgentStoreUnsetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/store/unset/{var}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AgentStoreUnsetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.AgentStoreUnset200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// CfgLoad - Load the lab configuration file file.
// Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
func (s *SDK) CfgLoad(ctx context.Context, request operations.CfgLoadRequest) (*operations.CfgLoadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CfgLoadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CfgLoad200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CfgNew - Clear the lab configuration.
// Clear the lab configuration.
func (s *SDK) CfgNew(ctx context.Context, request operations.CfgNewRequest) (*operations.CfgNewResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/clear/{firstAgentNum}/{lastAgentNum}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CfgNewResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CfgNew200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CfgSave - Save the lab configuration.
// Save the lab configuration.
func (s *SDK) CfgSave(ctx context.Context) (*operations.CfgSaveResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/save"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CfgSaveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CfgSave200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CfgSaveas - Save the lab configuration in file.
// Save the lab configuration in file.
func (s *SDK) CfgSaveas(ctx context.Context, request operations.CfgSaveasRequest) (*operations.CfgSaveasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CfgSaveasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CfgSaveas200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DelDaemonTimerScript - Remove a timer script from the execution list.
// The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
func (s *SDK) DelDaemonTimerScript(ctx context.Context, request operations.DelDaemonTimerScriptRequest) (*operations.DelDaemonTimerScriptResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/timer/script/delete/{script}/{interval}/{arg}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DelDaemonTimerScriptResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.DelDaemonTimerScript200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// DelIpalias - Deletes an existing ipalias from the agent.
// port defaults to 161 if not specified.
func (s *SDK) DelIpalias(ctx context.Context, request operations.DelIpaliasRequest) (*operations.DelIpaliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DelIpaliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.DelIpalias200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// DelTimerScript - Remove a timer script from the execution list.
// The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
func (s *SDK) DelTimerScript(ctx context.Context, request operations.DelTimerScriptRequest) (*operations.DelTimerScriptResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DelTimerScriptResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.DelTimerScript200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// EvalValue - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
// Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
func (s *SDK) EvalValue(ctx context.Context, request operations.EvalValueRequest) (*operations.EvalValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/eval/{object}/{instance}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EvalValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.EvalValue200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// FromAdd - Add a source address that the agent will accept messages from.
// An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
func (s *SDK) FromAdd(ctx context.Context, request operations.FromAddRequest) (*operations.FromAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/from/add/{IP}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FromAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.FromAdd200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// FromDel - delete a source address that the agent will accept messages from.
// An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
func (s *SDK) FromDel(ctx context.Context, request operations.FromDelRequest) (*operations.FromDelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/from/delete/{IP}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FromDelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.FromDel200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// FromList - List the source addresses that the agent will accept messages from.
// This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
func (s *SDK) FromList(ctx context.Context, request operations.FromListRequest) (*operations.FromListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/from/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FromListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.IPSource
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IPSources = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetActiveDataList - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
// This list is guaranteed to be sorted into increasing order.
func (s *SDK) GetActiveDataList(ctx context.Context) (*operations.GetActiveDataListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/active_data_list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetActiveDataListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetActiveDataList200ApplicationJSONInt32Integers = out
		}
	}

	return res, nil
}

// GetActiveList - The list of {agentnum} that are currently active (running or paused).
// This list is guaranteed to be sorted into increasing order.
func (s *SDK) GetActiveList(ctx context.Context) (*operations.GetActiveListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/active_list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetActiveListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetActiveList200ApplicationJSONInt32Integers = out
		}
	}

	return res, nil
}

// GetAgentState - current running state of the agent
// 0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
func (s *SDK) GetAgentState(ctx context.Context, request operations.GetAgentStateRequest) (*operations.GetAgentStateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/state", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAgentStateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetAgentState200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetCfgFileChanged - This predicate indicates if the currently loaded agent configuration file has changed.
// Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
func (s *SDK) GetCfgFileChanged(ctx context.Context) (*operations.GetCfgFileChangedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/cfgfile_changed"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCfgFileChangedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCfgFileChanged200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetCfgfile - The currently loaded lab configuration file for the particular user.
// In the case of multi-user access this command returns a different configuration file loaded for each user.
func (s *SDK) GetCfgfile(ctx context.Context) (*operations.GetCfgfileResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/cfgfile"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCfgfileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCfgfile200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetChanged - has the agent value space changed?
// has the agent value space changed?
func (s *SDK) GetChanged(ctx context.Context, request operations.GetChangedRequest) (*operations.GetChangedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/changed", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetChangedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetChanged200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetChangedConfigList - The list of {agentnum} for which a configurable parameter changed.
// This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
func (s *SDK) GetChangedConfigList(ctx context.Context) (*operations.GetChangedConfigListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/changed_config_list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetChangedConfigListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetChangedConfigList200ApplicationJSONInt32Integers = out
		}
	}

	return res, nil
}

// GetChangedStateList - The list of {agentnum state} for which the state changed.
// This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
func (s *SDK) GetChangedStateList(ctx context.Context) (*operations.GetChangedStateListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/changed_state_list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetChangedStateListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AgentState
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AgentStates = out
		}
	}

	return res, nil
}

// GetClients - The number of clients currently connected to the daemon.
// The number of clients currently connected to the daemon.
func (s *SDK) GetClients(ctx context.Context) (*operations.GetClientsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/clients"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetClientsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetClients200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetConfigChanged - has the lab configuration changed?
// has the lab configuration changed?
func (s *SDK) GetConfigChanged(ctx context.Context, request operations.GetConfigChangedRequest) (*operations.GetConfigChangedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/config_changed", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConfigChangedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetConfigChanged200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetConfiguredList - The list of {agentnum} that are currently configured.
// This list is guaranteed to be sorted into increasing order.
func (s *SDK) GetConfiguredList(ctx context.Context) (*operations.GetConfiguredListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/configured_list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConfiguredListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetConfiguredList200ApplicationJSONInt32Integers = out
		}
	}

	return res, nil
}

// GetDaemonProtocols - The set of protocols supported by the Simulator.
// The set of protocols supported by the Simulator.
func (s *SDK) GetDaemonProtocols(ctx context.Context) (*operations.GetDaemonProtocolsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/protocols"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDaemonProtocolsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDaemonProtocols200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDelay - one-way transit delay in msec.
// The minimum granularity is 10 msec.
func (s *SDK) GetDelay(ctx context.Context, request operations.GetDelayRequest) (*operations.GetDelayResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/delay", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDelayResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDelay200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetDrops - drop rate (every N-th PDU). 0 means no drops.
// drop rate (every N-th PDU). 0 means no drops.
func (s *SDK) GetDrops(ctx context.Context, request operations.GetDropsRequest) (*operations.GetDropsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/drops", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDropsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDrops200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetHost - host address of the agent.
// Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
func (s *SDK) GetHost(ctx context.Context, request operations.GetHostRequest) (*operations.GetHostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/host", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetHostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetHost200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetInfo - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
// Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
func (s *SDK) GetInfo(ctx context.Context, request operations.GetInfoRequest) (*operations.GetInfoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/info/{object}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetInfo200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetInformTimeout - timeout in seconds for retransmitting INFORM PDUs.
// The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
func (s *SDK) GetInformTimeout(ctx context.Context, request operations.GetInformTimeoutRequest) (*operations.GetInformTimeoutResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/inform_timeout", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetInformTimeoutResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetInformTimeout200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetInstances - Display the MIB object instances for the specified object.
// This enables MIB browsing of the MIB on the current agent.
func (s *SDK) GetInstances(ctx context.Context, request operations.GetInstancesRequest) (*operations.GetInstancesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/instances/{object}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetInstancesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetInstances200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetInterface - network interface card for the agent.
// network interface card for the agent.
func (s *SDK) GetInterface(ctx context.Context, request operations.GetInterfaceRequest) (*operations.GetInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/interface", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetInterfaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetInterface200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetInterfaces - The set of network interfaces that can be used for simulations.
// The set of network interfaces that can be used for simulations.
func (s *SDK) GetInterfaces(ctx context.Context) (*operations.GetInterfacesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/interfaces"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetInterfacesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetInterfaces200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetLast - The last configured agent instance.
// The last configured agent instance.
func (s *SDK) GetLast(ctx context.Context) (*operations.GetLastResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/last"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetLastResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetLast200ApplicationJSONInt32Integer = out
		}
	}

	return res, nil
}

// GetLog - The current log file for the Simulator.
// The current log file for the Simulator.
func (s *SDK) GetLog(ctx context.Context) (*operations.GetLogResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/log"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetLogResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetLog200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetMask - subnet mask of the agent.
// subnet mask of the agent.
func (s *SDK) GetMask(ctx context.Context, request operations.GetMaskRequest) (*operations.GetMaskResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/mask", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMaskResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetMask200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetMax - The maximum number of agent instances.
// The maximum number of agent instances.
func (s *SDK) GetMax(ctx context.Context) (*operations.GetMaxResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/max"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMaxResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetMax200ApplicationJSONInt32Integer = out
		}
	}

	return res, nil
}

// GetMib - Return the MIB that defines the specified object.
// This will only return a MIB name if the object is unmistakeably defined in a MIB.
func (s *SDK) GetMib(ctx context.Context, request operations.GetMibRequest) (*operations.GetMibResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/mib/{object}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMibResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetMib200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetMibs - set of MIBs, simulations and scenarios
// set of MIBs, simulations and scenarios
func (s *SDK) GetMibs(ctx context.Context, request operations.GetMibsRequest) (*operations.GetMibsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/mibs", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMibsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Triplet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Triplets = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetName - Return the symbolic name of the specified object identifier.
// Return the symbolic name of the specified object identifier.
func (s *SDK) GetName(ctx context.Context, request operations.GetNameRequest) (*operations.GetNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/name/{OID}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetName200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetNetaddr - The network address of the host where the MIMIC simulator is running.
// The network address of the host where the MIMIC simulator is running.
func (s *SDK) GetNetaddr(ctx context.Context) (*operations.GetNetaddrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/netaddr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetaddrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetNetaddr200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetdev - The default network device to be used for agent addresses.
// The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
func (s *SDK) GetNetdev(ctx context.Context) (*operations.GetNetdevResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/netdev"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetdevResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetNetdev200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNumberStarts - number of starts for the agent.
// This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
func (s *SDK) GetNumberStarts(ctx context.Context, request operations.GetNumberStartsRequest) (*operations.GetNumberStartsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/num_starts", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNumberStartsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetNumberStarts200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetObjects - Display the MIB objects below the current position
// This command is similar to the ls or dir operating system commands to list filesystem directories.
func (s *SDK) GetObjects(ctx context.Context, request operations.GetObjectsRequest) (*operations.GetObjectsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/list/{OID}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetObjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetObjects200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetOid - Return the numeric OID of the specified object.
// Return the numeric OID of the specified object.
func (s *SDK) GetOid(ctx context.Context, request operations.GetOidRequest) (*operations.GetOidResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/oid/{object}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOidResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetOid200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetOiddir - MIB directory of the agent.
// MIB directory of the agent.
func (s *SDK) GetOiddir(ctx context.Context, request operations.GetOiddirRequest) (*operations.GetOiddirResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/oiddir", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOiddirResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetOiddir200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetOwner - owner of the agent.
// owner of the agent.
func (s *SDK) GetOwner(ctx context.Context, request operations.GetOwnerRequest) (*operations.GetOwnerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/owner", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOwnerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetOwner200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetPdusize - maximum PDU size.
// The limit for this configurable is 65536.
func (s *SDK) GetPdusize(ctx context.Context, request operations.GetPdusizeRequest) (*operations.GetPdusizeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/pdusize", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPdusizeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetPdusize200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetPort - port number
// port number
func (s *SDK) GetPort(ctx context.Context, request operations.GetPortRequest) (*operations.GetPortResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/port", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPortResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetPort200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetPrivdir - private directory of the agent.
// private directory of the agent.
func (s *SDK) GetPrivdir(ctx context.Context, request operations.GetPrivdirRequest) (*operations.GetPrivdirResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/privdir", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPrivdirResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetPrivdir200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetProduct - The product number that is licensed.
// The product number that is licensed.
func (s *SDK) GetProduct(ctx context.Context) (*operations.GetProductResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/product"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetProductResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetProduct200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetProtocols - protocols supported by agent
// protocols supported by agent as an array of strings
func (s *SDK) GetProtocols(ctx context.Context, request operations.GetProtocolsRequest) (*operations.GetProtocolsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/protocol", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetProtocolsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetProtocols200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetReadCommunity - read community string
// read community string
func (s *SDK) GetReadCommunity(ctx context.Context, request operations.GetReadCommunityRequest) (*operations.GetReadCommunityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/read", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetReadCommunityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetReadCommunity200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetReturn - The return mode.
// The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
func (s *SDK) GetReturn(ctx context.Context) (*operations.GetReturnResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/return"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetReturnResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetReturn200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetScen - first scenario name
// first scenario name
func (s *SDK) GetScen(ctx context.Context, request operations.GetScenRequest) (*operations.GetScenResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/scen", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetScenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetScen200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetSim - first simulation name
// first simulation name
func (s *SDK) GetSim(ctx context.Context, request operations.GetSimRequest) (*operations.GetSimResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/sim", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSimResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetSim200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetStarttime - relative start time
// relative start time
func (s *SDK) GetStarttime(ctx context.Context, request operations.GetStarttimeRequest) (*operations.GetStarttimeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/start", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStarttimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetStarttime200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetState - Get the state of a MIB object object.
// To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
func (s *SDK) GetState(ctx context.Context, request operations.GetStateRequest) (*operations.GetStateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/state/get/{object}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetState200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetStateChanged - has the agent state changed?
// has the agent state changed?
func (s *SDK) GetStateChanged(ctx context.Context, request operations.GetStateChangedRequest) (*operations.GetStateChangedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/state_changed", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStateChangedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetStateChanged200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetStatistics - current statistics of the agent instance
// The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
func (s *SDK) GetStatistics(ctx context.Context, request operations.GetStatisticsRequest) (*operations.GetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetTrace - SNMP PDU tracing
// SNMP PDU tracing
func (s *SDK) GetTrace(ctx context.Context, request operations.GetTraceRequest) (*operations.GetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTrace200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetValidate - SNMP SET validation policy.
// Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
func (s *SDK) GetValidate(ctx context.Context, request operations.GetValidateRequest) (*operations.GetValidateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/validate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetValidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetValidate200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetValue - Get a variable in the Value Space.
// Get a variable in the Value Space.
func (s *SDK) GetValue(ctx context.Context, request operations.GetValueRequest) (*operations.GetValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetValue200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetVariables - Display the variables for the specified instance instance for the specified MIB object object
// This enables variable browsing of the MIB on the current agent.
func (s *SDK) GetVariables(ctx context.Context, request operations.GetVariablesRequest) (*operations.GetVariablesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/variables/{object}/{instance}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVariablesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetVariables200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetVersion - The version of the MIMIC command interface.
// The version of the MIMIC command interface.
func (s *SDK) GetVersion(ctx context.Context) (*operations.GetVersionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/get/version"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetVersion200ApplicationJSONString = &out
		}
	}

	return res, nil
}

// GetWriteCommunity - write community string
// write community string
func (s *SDK) GetWriteCommunity(ctx context.Context, request operations.GetWriteCommunityRequest) (*operations.GetWriteCommunityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/get/write", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWriteCommunityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetWriteCommunity200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// Halt - Halt the current agent.
// Halt the current agent.
func (s *SDK) Halt(ctx context.Context, request operations.HaltRequest) (*operations.HaltResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/halt", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HaltResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.Halt200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ListDaemonTimerScripts - List the timer scripts currently running along with the their intervals.
// The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
func (s *SDK) ListDaemonTimerScripts(ctx context.Context) (*operations.ListDaemonTimerScriptsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/timer/script/list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListDaemonTimerScriptsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TimerScript
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TimerScripts = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ListIpaliases - Lists all the additional ipaliases configured for the agent.
// The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
func (s *SDK) ListIpaliases(ctx context.Context, request operations.ListIpaliasesRequest) (*operations.ListIpaliasesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/ipalias/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListIpaliasesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.IPAlias
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IPAliases = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ListTimerScripts - List the timer scripts currently running along with the their intervals.
// The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
func (s *SDK) ListTimerScripts(ctx context.Context, request operations.ListTimerScriptsRequest) (*operations.ListTimerScriptsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/timer/script/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListTimerScriptsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TimerScript
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TimerScripts = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// MgetInfo - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
// Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
func (s *SDK) MgetInfo(ctx context.Context, request operations.MgetInfoRequest) (*operations.MgetInfoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/mget/{infoArray}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MgetInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MgetInfo200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// MsetValue - Set multiple variables in the Value Space.
// This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
func (s *SDK) MsetValue(ctx context.Context, request operations.MsetValueRequest) (*operations.MsetValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/mset", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MsetValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.MsetValue200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// MunsetValue - Unset multiple variables in the Value Space
// This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
func (s *SDK) MunsetValue(ctx context.Context, request operations.MunsetValueRequest) (*operations.MunsetValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/munset", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MunsetValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.MunsetValue200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// New - Add an agent.
// Add an agent.
func (s *SDK) New(ctx context.Context, request operations.NewRequest) (*operations.NewResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/add/{IP}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.NewResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.New200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// PauseNow - Pause the current agent.
// Pause the current agent.
func (s *SDK) PauseNow(ctx context.Context, request operations.PauseNowRequest) (*operations.PauseNowResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/pause", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PauseNowResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.PauseNow200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolCoapGetArgs - Show the agent's COAP argument structure
// Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolCoapGetArgs(ctx context.Context, request operations.ProtocolCoapGetArgsRequest) (*operations.ProtocolCoapGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolCoapGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolCoapGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolCoapGetConfig - Show the agent's COAP configuration
// Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolCoapGetConfig(ctx context.Context, request operations.ProtocolCoapGetConfigRequest) (*operations.ProtocolCoapGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolCoapGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigCoap
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigCoap = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolCoapGetStatistics - Show the agent's COAP statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolCoapGetStatistics(ctx context.Context, request operations.ProtocolCoapGetStatisticsRequest) (*operations.ProtocolCoapGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolCoapGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolCoapGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolCoapGetStatsHdr - Show the COAP statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolCoapGetStatsHdr(ctx context.Context) (*operations.ProtocolCoapGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/coap/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolCoapGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolCoapGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolCoapGetTrace - Show the agent's COAP traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolCoapGetTrace(ctx context.Context, request operations.ProtocolCoapGetTraceRequest) (*operations.ProtocolCoapGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolCoapGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigCoap
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigCoap = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolCoapSetConfig - Set the agent's COAP configuration
// Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolCoapSetConfig(ctx context.Context, request operations.ProtocolCoapSetConfigRequest) (*operations.ProtocolCoapSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolCoapSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolCoapSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolCoapSetTrace - Set the agent's COAP traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolCoapSetTrace(ctx context.Context, request operations.ProtocolCoapSetTraceRequest) (*operations.ProtocolCoapSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolCoapSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolCoapSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolDhcpGetArgs - Show the agent's DHCP argument structure
// Agent's DHCP configuration particulars
func (s *SDK) ProtocolDhcpGetArgs(ctx context.Context, request operations.ProtocolDhcpGetArgsRequest) (*operations.ProtocolDhcpGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolDhcpGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolDhcpGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolDhcpGetConfig - Show the agent's DHCP configuration
// Agent's DHCP configuration hwaddr,classid,add_options,script
func (s *SDK) ProtocolDhcpGetConfig(ctx context.Context, request operations.ProtocolDhcpGetConfigRequest) (*operations.ProtocolDhcpGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolDhcpGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigDhcp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigDhcp = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolDhcpGetStatistics - Show the agent's DHCP statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolDhcpGetStatistics(ctx context.Context, request operations.ProtocolDhcpGetStatisticsRequest) (*operations.ProtocolDhcpGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolDhcpGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolDhcpGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolDhcpGetStatsHdr - Show the DHCP statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolDhcpGetStatsHdr(ctx context.Context) (*operations.ProtocolDhcpGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/dhcp/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolDhcpGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolDhcpGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolDhcpGetTrace - Show the agent's DHCP traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolDhcpGetTrace(ctx context.Context, request operations.ProtocolDhcpGetTraceRequest) (*operations.ProtocolDhcpGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolDhcpGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigDhcp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigDhcp = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolDhcpParams - Show the parameters configured by the server in its DHCP-OFFER message
// DHCP-OFFER message parameters
func (s *SDK) ProtocolDhcpParams(ctx context.Context, request operations.ProtocolDhcpParamsRequest) (*operations.ProtocolDhcpParamsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/params", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolDhcpParamsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolDhcpParams200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolDhcpSetConfig - Set the agent's DHCP configuration
// Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolDhcpSetConfig(ctx context.Context, request operations.ProtocolDhcpSetConfigRequest) (*operations.ProtocolDhcpSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolDhcpSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolDhcpSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolDhcpSetTrace - Set the agent's DHCP traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolDhcpSetTrace(ctx context.Context, request operations.ProtocolDhcpSetTraceRequest) (*operations.ProtocolDhcpSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolDhcpSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolDhcpSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolGetConfig - Returns the protocol's configuration.
// Returns the protocol's configuration.
func (s *SDK) ProtocolGetConfig(ctx context.Context, request operations.ProtocolGetConfigRequest) (*operations.ProtocolGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/{prot}/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolGetConfig200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolIpmiGetArgs - Show the agent's IPMI argument structure
// Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolIpmiGetArgs(ctx context.Context, request operations.ProtocolIpmiGetArgsRequest) (*operations.ProtocolIpmiGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolIpmiGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolIpmiGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolIpmiGetAttr - Show the outgoing message's attributes
// Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
func (s *SDK) ProtocolIpmiGetAttr(ctx context.Context, request operations.ProtocolIpmiGetAttrRequest) (*operations.ProtocolIpmiGetAttrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolIpmiGetAttrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolIpmiGetAttr200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolIpmiGetConfig - Show the agent's IPMI configuration
// Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolIpmiGetConfig(ctx context.Context, request operations.ProtocolIpmiGetConfigRequest) (*operations.ProtocolIpmiGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolIpmiGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigIpmi
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigIpmi = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolIpmiGetStatistics - Show the agent's IPMI statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolIpmiGetStatistics(ctx context.Context, request operations.ProtocolIpmiGetStatisticsRequest) (*operations.ProtocolIpmiGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolIpmiGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolIpmiGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolIpmiGetStatsHdr - Show the IPMI statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolIpmiGetStatsHdr(ctx context.Context) (*operations.ProtocolIpmiGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/ipmi/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolIpmiGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolIpmiGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolIpmiGetTrace - Show the agent's IPMI traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolIpmiGetTrace(ctx context.Context, request operations.ProtocolIpmiGetTraceRequest) (*operations.ProtocolIpmiGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolIpmiGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigIpmi
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigIpmi = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolIpmiSetAttr - Set the outgoing message's attributes
// Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
func (s *SDK) ProtocolIpmiSetAttr(ctx context.Context, request operations.ProtocolIpmiSetAttrRequest) (*operations.ProtocolIpmiSetAttrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolIpmiSetAttrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolIpmiSetAttr200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolIpmiSetConfig - Set the agent's IPMI configuration
// Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolIpmiSetConfig(ctx context.Context, request operations.ProtocolIpmiSetConfigRequest) (*operations.ProtocolIpmiSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolIpmiSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolIpmiSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolIpmiSetTrace - Set the agent's IPMI traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolIpmiSetTrace(ctx context.Context, request operations.ProtocolIpmiSetTraceRequest) (*operations.ProtocolIpmiSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolIpmiSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolIpmiSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientGetProtstate - Show the agent's MQTT TCP connection state
// 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
func (s *SDK) ProtocolMqttClientGetProtstate(ctx context.Context, request operations.ProtocolMqttClientGetProtstateRequest) (*operations.ProtocolMqttClientGetProtstateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientGetProtstateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientGetProtstate200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientGetState - Show the agent's MQTT state
// 0 means stopped, 1 means running
func (s *SDK) ProtocolMqttClientGetState(ctx context.Context, request operations.ProtocolMqttClientGetStateRequest) (*operations.ProtocolMqttClientGetStateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientGetStateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientGetState200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientMessageCard - Show the agent's current messages' cardinality
// 0 or more
func (s *SDK) ProtocolMqttClientMessageCard(ctx context.Context, request operations.ProtocolMqttClientMessageCardRequest) (*operations.ProtocolMqttClientMessageCardResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientMessageCardResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientMessageCard200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientMessageGet - Show the agent's message attributes
// Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
func (s *SDK) ProtocolMqttClientMessageGet(ctx context.Context, request operations.ProtocolMqttClientMessageGetRequest) (*operations.ProtocolMqttClientMessageGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientMessageGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientMessageGet200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientMessageSet - Set the agent's message attributes
// Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
func (s *SDK) ProtocolMqttClientMessageSet(ctx context.Context, request operations.ProtocolMqttClientMessageSetRequest) (*operations.ProtocolMqttClientMessageSetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientMessageSetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientMessageSet200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientResubscribe - Restart receiving messages from a subcription of the agent
// Restarts a subscription
func (s *SDK) ProtocolMqttClientResubscribe(ctx context.Context, request operations.ProtocolMqttClientResubscribeRequest) (*operations.ProtocolMqttClientResubscribeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientResubscribeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolMqttClientResubscribe200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientRuntimeAbort - Abort agent's MQTT TCP session without sending DISCONNECT command
// Abort a connection
func (s *SDK) ProtocolMqttClientRuntimeAbort(ctx context.Context, request operations.ProtocolMqttClientRuntimeAbortRequest) (*operations.ProtocolMqttClientRuntimeAbortResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientRuntimeAbortResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientRuntimeAbort200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientRuntimeConnect - Start agent's MQTT TCP session
// Start a connection
func (s *SDK) ProtocolMqttClientRuntimeConnect(ctx context.Context, request operations.ProtocolMqttClientRuntimeConnectRequest) (*operations.ProtocolMqttClientRuntimeConnectResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientRuntimeConnectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientRuntimeConnect200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientRuntimeDisconnect - Disconnect agent's MQTT TCP session by sending DISCONNECT command
// Graceful disconnect
func (s *SDK) ProtocolMqttClientRuntimeDisconnect(ctx context.Context, request operations.ProtocolMqttClientRuntimeDisconnectRequest) (*operations.ProtocolMqttClientRuntimeDisconnectResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientRuntimeDisconnectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientRuntimeDisconnect200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetBroker - Set the agent's MQTT TCP connection target broker
// Broker IP address
func (s *SDK) ProtocolMqttClientSetBroker(ctx context.Context, request operations.ProtocolMqttClientSetBrokerRequest) (*operations.ProtocolMqttClientSetBrokerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetBrokerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetBroker200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetCleansession - Set the agent's MQTT session
// 1 for clean session , 0 not
func (s *SDK) ProtocolMqttClientSetCleansession(ctx context.Context, request operations.ProtocolMqttClientSetCleansessionRequest) (*operations.ProtocolMqttClientSetCleansessionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetCleansessionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetCleansession200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetClientid - Set the agent's MQTT client ID
// MQTT client ID
func (s *SDK) ProtocolMqttClientSetClientid(ctx context.Context, request operations.ProtocolMqttClientSetClientidRequest) (*operations.ProtocolMqttClientSetClientidResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetClientidResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetClientid200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetKeepalive - Set the agent's MQTT TCP keepalive
// Keep alive the TCP connection
func (s *SDK) ProtocolMqttClientSetKeepalive(ctx context.Context, request operations.ProtocolMqttClientSetKeepaliveRequest) (*operations.ProtocolMqttClientSetKeepaliveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetKeepaliveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetKeepalive200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetOnDisconnect - Set the agent's MQTT disconnection action
// Action to take when MQTT session is disconnected
func (s *SDK) ProtocolMqttClientSetOnDisconnect(ctx context.Context, request operations.ProtocolMqttClientSetOnDisconnectRequest) (*operations.ProtocolMqttClientSetOnDisconnectResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetOnDisconnectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetPassword - Set the agent's MQTT client password
// Client password
func (s *SDK) ProtocolMqttClientSetPassword(ctx context.Context, request operations.ProtocolMqttClientSetPasswordRequest) (*operations.ProtocolMqttClientSetPasswordResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetPasswordResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetPassword200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetPort - Set the agent's MQTT TCP connection target port
// target TCP port
func (s *SDK) ProtocolMqttClientSetPort(ctx context.Context, request operations.ProtocolMqttClientSetPortRequest) (*operations.ProtocolMqttClientSetPortResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetPortResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetPort200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetUsername - Set the agent's MQTT client username
// Client username
func (s *SDK) ProtocolMqttClientSetUsername(ctx context.Context, request operations.ProtocolMqttClientSetUsernameRequest) (*operations.ProtocolMqttClientSetUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetUsername200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetWillmsg - Set the agent's MQTT client's will
// Will message
func (s *SDK) ProtocolMqttClientSetWillmsg(ctx context.Context, request operations.ProtocolMqttClientSetWillmsgRequest) (*operations.ProtocolMqttClientSetWillmsgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetWillmsgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetWillmsg200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetWillqos - Set the agent's MQTT will message's QOS field
// QOS field
func (s *SDK) ProtocolMqttClientSetWillqos(ctx context.Context, request operations.ProtocolMqttClientSetWillqosRequest) (*operations.ProtocolMqttClientSetWillqosResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetWillqosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetWillqos200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetWillretain - Set the agent's MQTT retained will
// Retaining will
func (s *SDK) ProtocolMqttClientSetWillretain(ctx context.Context, request operations.ProtocolMqttClientSetWillretainRequest) (*operations.ProtocolMqttClientSetWillretainResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetWillretainResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetWillretain200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSetWilltopic - Set the agent's MQTT client will's topic
// Will topic for the will message
func (s *SDK) ProtocolMqttClientSetWilltopic(ctx context.Context, request operations.ProtocolMqttClientSetWilltopicRequest) (*operations.ProtocolMqttClientSetWilltopicResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSetWilltopicResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSetWilltopic200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSubscribeCard - Show the agent's current subscriptions' cardinality
// 0 or more
func (s *SDK) ProtocolMqttClientSubscribeCard(ctx context.Context, request operations.ProtocolMqttClientSubscribeCardRequest) (*operations.ProtocolMqttClientSubscribeCardResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSubscribeCardResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSubscribeCard200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSubscribeGet - Show the agent's subscription attributes
// Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
func (s *SDK) ProtocolMqttClientSubscribeGet(ctx context.Context, request operations.ProtocolMqttClientSubscribeGetRequest) (*operations.ProtocolMqttClientSubscribeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSubscribeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSubscribeGet200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientSubscribeSet - Set the agent's subscribe attributes
// Attribute can not be properties .
func (s *SDK) ProtocolMqttClientSubscribeSet(ctx context.Context, request operations.ProtocolMqttClientSubscribeSetRequest) (*operations.ProtocolMqttClientSubscribeSetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientSubscribeSetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttClientSubscribeSet200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttClientUnsubscribe - Stops receiving messages from a subcription of the agent
// Stops a subscription
func (s *SDK) ProtocolMqttClientUnsubscribe(ctx context.Context, request operations.ProtocolMqttClientUnsubscribeRequest) (*operations.ProtocolMqttClientUnsubscribeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttClientUnsubscribeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolMqttClientUnsubscribe200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttGetArgs - Show the agent's MQTT argument structure
// Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolMqttGetArgs(ctx context.Context, request operations.ProtocolMqttGetArgsRequest) (*operations.ProtocolMqttGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttGetConfig - Show the agent's MQTT configuration
// Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolMqttGetConfig(ctx context.Context, request operations.ProtocolMqttGetConfigRequest) (*operations.ProtocolMqttGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigMqtt
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigMqtt = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttGetStatistics - Show the agent's MQTT statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolMqttGetStatistics(ctx context.Context, request operations.ProtocolMqttGetStatisticsRequest) (*operations.ProtocolMqttGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttGetStatsHdr - Show the MQTT statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolMqttGetStatsHdr(ctx context.Context) (*operations.ProtocolMqttGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/mqtt/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMqttGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttGetTrace - Show the agent's MQTT traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolMqttGetTrace(ctx context.Context, request operations.ProtocolMqttGetTraceRequest) (*operations.ProtocolMqttGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigMqtt
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigMqtt = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttSetConfig - Set the agent's MQTT configuration
// Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolMqttSetConfig(ctx context.Context, request operations.ProtocolMqttSetConfigRequest) (*operations.ProtocolMqttSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolMqttSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolMqttSetTrace - Set the agent's MQTT traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolMqttSetTrace(ctx context.Context, request operations.ProtocolMqttSetTraceRequest) (*operations.ProtocolMqttSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolMqttSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolMqttSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowChangeAttr - Change NETFLOW export attributes
// Change attributes
func (s *SDK) ProtocolNetflowChangeAttr(ctx context.Context, request operations.ProtocolNetflowChangeAttrRequest) (*operations.ProtocolNetflowChangeAttrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowChangeAttrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowChangeAttr200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowChangeDfs - Change NETFLOW data export interval
// Interval in msec .
func (s *SDK) ProtocolNetflowChangeDfs(ctx context.Context, request operations.ProtocolNetflowChangeDfsRequest) (*operations.ProtocolNetflowChangeDfsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowChangeDfsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowChangeDfs200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowChangeTfs - Change NETFLOW template export interval
// Interval in msec .
func (s *SDK) ProtocolNetflowChangeTfs(ctx context.Context, request operations.ProtocolNetflowChangeTfsRequest) (*operations.ProtocolNetflowChangeTfsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowChangeTfsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowChangeTfs200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowGetArgs - Show the agent's NETFLOW argument structure
// Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolNetflowGetArgs(ctx context.Context, request operations.ProtocolNetflowGetArgsRequest) (*operations.ProtocolNetflowGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolNetflowGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowGetConfig - Show the agent's NETFLOW configuration
// Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolNetflowGetConfig(ctx context.Context, request operations.ProtocolNetflowGetConfigRequest) (*operations.ProtocolNetflowGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigNetflow
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigNetflow = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowGetStatistics - Show the agent's NETFLOW statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolNetflowGetStatistics(ctx context.Context, request operations.ProtocolNetflowGetStatisticsRequest) (*operations.ProtocolNetflowGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolNetflowGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowGetStatsHdr - Show the NETFLOW statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolNetflowGetStatsHdr(ctx context.Context) (*operations.ProtocolNetflowGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/netflow/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolNetflowGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowGetTrace - Show the agent's NETFLOW traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolNetflowGetTrace(ctx context.Context, request operations.ProtocolNetflowGetTraceRequest) (*operations.ProtocolNetflowGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigNetflow
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigNetflow = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowHalt - Halt NETFLOW traffic
// Halt NETFLOW traffic
func (s *SDK) ProtocolNetflowHalt(ctx context.Context, request operations.ProtocolNetflowHaltRequest) (*operations.ProtocolNetflowHaltResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/halt", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowHaltResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowHalt200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowList - Show list of NETFLOW exports
// Show list of NETFLOW exports
func (s *SDK) ProtocolNetflowList(ctx context.Context, request operations.ProtocolNetflowListRequest) (*operations.ProtocolNetflowListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolNetflowList200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowReload - Reload NETFLOW configuration before resuming traffic
// Reload NETFLOW configuration before resuming traffic
func (s *SDK) ProtocolNetflowReload(ctx context.Context, request operations.ProtocolNetflowReloadRequest) (*operations.ProtocolNetflowReloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/reload", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowReloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowReload200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowResume - Resuming traffic
// Resuming traffic
func (s *SDK) ProtocolNetflowResume(ctx context.Context, request operations.ProtocolNetflowResumeRequest) (*operations.ProtocolNetflowResumeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/resume", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowResumeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowResume200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowSetCollector - Swap NETFLOW collector
// Allow changing collector without stopping agent
func (s *SDK) ProtocolNetflowSetCollector(ctx context.Context, request operations.ProtocolNetflowSetCollectorRequest) (*operations.ProtocolNetflowSetCollectorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowSetCollectorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowSetCollector200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowSetConfig - Set the agent's NETFLOW configuration
// Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolNetflowSetConfig(ctx context.Context, request operations.ProtocolNetflowSetConfigRequest) (*operations.ProtocolNetflowSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowSetFileName - Swap NETFLOW configuration file
// Allow reloading the configuration file for an agent without stopping agent
func (s *SDK) ProtocolNetflowSetFileName(ctx context.Context, request operations.ProtocolNetflowSetFileNameRequest) (*operations.ProtocolNetflowSetFileNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowSetFileNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowSetFileName200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolNetflowSetTrace - Set the agent's NETFLOW traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolNetflowSetTrace(ctx context.Context, request operations.ProtocolNetflowSetTraceRequest) (*operations.ProtocolNetflowSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolNetflowSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolNetflowSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyGetArgs - Show the agent's PROXY argument structure
// Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolProxyGetArgs(ctx context.Context, request operations.ProtocolProxyGetArgsRequest) (*operations.ProtocolProxyGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolProxyGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyGetConfig - Show the agent's PROXY configuration
// Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolProxyGetConfig(ctx context.Context, request operations.ProtocolProxyGetConfigRequest) (*operations.ProtocolProxyGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigProxy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigProxy = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyGetStatistics - Show the agent's PROXY statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolProxyGetStatistics(ctx context.Context, request operations.ProtocolProxyGetStatisticsRequest) (*operations.ProtocolProxyGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolProxyGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyGetStatsHdr - Show the PROXY statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolProxyGetStatsHdr(ctx context.Context) (*operations.ProtocolProxyGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/proxy/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolProxyGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyGetTrace - Show the agent's PROXY traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolProxyGetTrace(ctx context.Context, request operations.ProtocolProxyGetTraceRequest) (*operations.ProtocolProxyGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigProxy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigProxy = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyPortAdd - Add individual proxy target on the agent and the simulator host
// Additional proxy target
func (s *SDK) ProtocolProxyPortAdd(ctx context.Context, request operations.ProtocolProxyPortAddRequest) (*operations.ProtocolProxyPortAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyPortAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolProxyPortAdd200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyPortIsstarted - Check individual target
// Check individual target
func (s *SDK) ProtocolProxyPortIsstarted(ctx context.Context, request operations.ProtocolProxyPortIsstartedRequest) (*operations.ProtocolProxyPortIsstartedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyPortIsstartedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolProxyPortIsstarted200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyPortList - List all proxy targets
func (s *SDK) ProtocolProxyPortList(ctx context.Context, request operations.ProtocolProxyPortListRequest) (*operations.ProtocolProxyPortListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyPortListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolProxyPortList200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyPortRemove - Remove individual proxy target on the agent and the simulator host
// Remove proxy target
func (s *SDK) ProtocolProxyPortRemove(ctx context.Context, request operations.ProtocolProxyPortRemoveRequest) (*operations.ProtocolProxyPortRemoveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyPortRemoveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolProxyPortRemove200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyPortStart - Start additional target
// Start additional target
func (s *SDK) ProtocolProxyPortStart(ctx context.Context, request operations.ProtocolProxyPortStartRequest) (*operations.ProtocolProxyPortStartResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyPortStartResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolProxyPortStart200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxyPortStop - Stop additional target
// Stop additional target
func (s *SDK) ProtocolProxyPortStop(ctx context.Context, request operations.ProtocolProxyPortStopRequest) (*operations.ProtocolProxyPortStopResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxyPortStopResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolProxyPortStop200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxySetConfig - Set the agent's PROXY configuration
// Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolProxySetConfig(ctx context.Context, request operations.ProtocolProxySetConfigRequest) (*operations.ProtocolProxySetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxySetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolProxySetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolProxySetTrace - Set the agent's PROXY traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolProxySetTrace(ctx context.Context, request operations.ProtocolProxySetTraceRequest) (*operations.ProtocolProxySetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolProxySetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolProxySetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowGetArgs - Show the agent's SFLOW argument structure
// Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSflowGetArgs(ctx context.Context, request operations.ProtocolSflowGetArgsRequest) (*operations.ProtocolSflowGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSflowGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowGetConfig - Show the agent's SFLOW configuration
// Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSflowGetConfig(ctx context.Context, request operations.ProtocolSflowGetConfigRequest) (*operations.ProtocolSflowGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSflow
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSflow = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowGetStatistics - Show the agent's SFLOW statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolSflowGetStatistics(ctx context.Context, request operations.ProtocolSflowGetStatisticsRequest) (*operations.ProtocolSflowGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSflowGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowGetStatsHdr - Show the SFLOW statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolSflowGetStatsHdr(ctx context.Context) (*operations.ProtocolSflowGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/sflow/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSflowGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowGetTrace - Show the agent's SFLOW traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolSflowGetTrace(ctx context.Context, request operations.ProtocolSflowGetTraceRequest) (*operations.ProtocolSflowGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSflow
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSflow = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowHalt - Halt SFLOW traffic
// Halt SFLOW traffic
func (s *SDK) ProtocolSflowHalt(ctx context.Context, request operations.ProtocolSflowHaltRequest) (*operations.ProtocolSflowHaltResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/halt", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowHaltResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSflowHalt200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowReload - Reload SFLOW configuration before resuming traffic
// Reload SFLOW configuration before resuming traffic
func (s *SDK) ProtocolSflowReload(ctx context.Context, request operations.ProtocolSflowReloadRequest) (*operations.ProtocolSflowReloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/reload", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowReloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSflowReload200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowResume - Resuming traffic
// Resuming traffic
func (s *SDK) ProtocolSflowResume(ctx context.Context, request operations.ProtocolSflowResumeRequest) (*operations.ProtocolSflowResumeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/resume", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowResumeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSflowResume200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowSetConfig - Set the agent's SFLOW configuration
// Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSflowSetConfig(ctx context.Context, request operations.ProtocolSflowSetConfigRequest) (*operations.ProtocolSflowSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSflowSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSflowSetTrace - Set the agent's SFLOW traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolSflowSetTrace(ctx context.Context, request operations.ProtocolSflowSetTraceRequest) (*operations.ProtocolSflowSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSflowSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSflowSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpGetArgs - Show the agent's SNMPTCP argument structure
// Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSnmptcpGetArgs(ctx context.Context, request operations.ProtocolSnmptcpGetArgsRequest) (*operations.ProtocolSnmptcpGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmptcpGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpGetConfig - Show the agent's SNMPTCP configuration
// Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSnmptcpGetConfig(ctx context.Context, request operations.ProtocolSnmptcpGetConfigRequest) (*operations.ProtocolSnmptcpGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSnmptcp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSnmptcp = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpGetStatistics - Show the agent's SNMPTCP statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolSnmptcpGetStatistics(ctx context.Context, request operations.ProtocolSnmptcpGetStatisticsRequest) (*operations.ProtocolSnmptcpGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmptcpGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpGetStatsHdr - Show the SNMPTCP statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolSnmptcpGetStatsHdr(ctx context.Context) (*operations.ProtocolSnmptcpGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/snmptcp/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmptcpGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpGetTrace - Show the agent's SNMPTCP traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolSnmptcpGetTrace(ctx context.Context, request operations.ProtocolSnmptcpGetTraceRequest) (*operations.ProtocolSnmptcpGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSnmptcp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSnmptcp = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
// By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolSnmptcpIpaliasDisable(ctx context.Context, request operations.ProtocolSnmptcpIpaliasDisableRequest) (*operations.ProtocolSnmptcpIpaliasDisableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpIpaliasDisableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmptcpIpaliasDisable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
// By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolSnmptcpIpaliasEnable(ctx context.Context, request operations.ProtocolSnmptcpIpaliasEnableRequest) (*operations.ProtocolSnmptcpIpaliasEnableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpIpaliasEnableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmptcpIpaliasEnable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
// By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolSnmptcpIpaliasIsenabled(ctx context.Context, request operations.ProtocolSnmptcpIpaliasIsenabledRequest) (*operations.ProtocolSnmptcpIpaliasIsenabledResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpIpaliasIsenabledResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmptcpIpaliasIsenabled200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpIpaliasList - List all IP aliases on the agent and the simulator host
// By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolSnmptcpIpaliasList(ctx context.Context, request operations.ProtocolSnmptcpIpaliasListRequest) (*operations.ProtocolSnmptcpIpaliasListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpIpaliasListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.IPAlias
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IPAliases = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpSetConfig - Set the agent's SNMPTCP configuration
// Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSnmptcpSetConfig(ctx context.Context, request operations.ProtocolSnmptcpSetConfigRequest) (*operations.ProtocolSnmptcpSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmptcpSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpSetTrace - Set the agent's SNMPTCP traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolSnmptcpSetTrace(ctx context.Context, request operations.ProtocolSnmptcpSetTraceRequest) (*operations.ProtocolSnmptcpSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmptcpSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmptcpSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3AccessAdd - Adds a new access entry with the specified parameters.
// Adds a new access entry with the specified parameters.
func (s *SDK) ProtocolSnmpv3AccessAdd(ctx context.Context, request operations.ProtocolSnmpv3AccessAddRequest) (*operations.ProtocolSnmpv3AccessAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3AccessAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3AccessAdd200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3AccessClear - Clears all access entries.
// Clears all access entries.
func (s *SDK) ProtocolSnmpv3AccessClear(ctx context.Context, request operations.ProtocolSnmpv3AccessClearRequest) (*operations.ProtocolSnmpv3AccessClearResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3AccessClearResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3AccessClear200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3AccessDel - Deletes the specified access entry.
// Deletes the specified access entry.
func (s *SDK) ProtocolSnmpv3AccessDel(ctx context.Context, request operations.ProtocolSnmpv3AccessDelRequest) (*operations.ProtocolSnmpv3AccessDelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3AccessDelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3AccessDel200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3AccessList - Returns the current acccess entries as an array of strings.
// Returns the current acccess entries as an array of strings.
func (s *SDK) ProtocolSnmpv3AccessList(ctx context.Context, request operations.ProtocolSnmpv3AccessListRequest) (*operations.ProtocolSnmpv3AccessListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3AccessListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3AccessList200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3GetConfig - Returns the SNMPv3 configuration.
// Returns the SNMPv3 configuration.
func (s *SDK) ProtocolSnmpv3GetConfig(ctx context.Context, request operations.ProtocolSnmpv3GetConfigRequest) (*operations.ProtocolSnmpv3GetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3GetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSnmPv3
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSnmPv3 = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3GetContextEngineid - Retrieves the contextEngineID for the agent instance.
// Retrieves the contextEngineID for the agent instance.
func (s *SDK) ProtocolSnmpv3GetContextEngineid(ctx context.Context, request operations.ProtocolSnmpv3GetContextEngineidRequest) (*operations.ProtocolSnmpv3GetContextEngineidResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3GetContextEngineidResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3GetContextEngineid200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3GetEngineboots - Retrieves the number of times the agent has been restarted.
// Retrieves the number of times the agent has been restarted.
func (s *SDK) ProtocolSnmpv3GetEngineboots(ctx context.Context, request operations.ProtocolSnmpv3GetEnginebootsRequest) (*operations.ProtocolSnmpv3GetEnginebootsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3GetEnginebootsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3GetEngineboots200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3GetEngineid - For started agents, retrieves the current engineID in use by the snmpv3 module.
// For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
func (s *SDK) ProtocolSnmpv3GetEngineid(ctx context.Context, request operations.ProtocolSnmpv3GetEngineidRequest) (*operations.ProtocolSnmpv3GetEngineidResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3GetEngineidResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3GetEngineid200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3GetEnginetime - Retrieves the time in seconds for which the agent has been running.
// Retrieves the time in seconds for which the agent has been running.
func (s *SDK) ProtocolSnmpv3GetEnginetime(ctx context.Context, request operations.ProtocolSnmpv3GetEnginetimeRequest) (*operations.ProtocolSnmpv3GetEnginetimeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3GetEnginetimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3GetEnginetime200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3GroupAdd - Adds a new group entry with the specified parameters.
// Adds a new group entry with the specified parameters.
func (s *SDK) ProtocolSnmpv3GroupAdd(ctx context.Context, request operations.ProtocolSnmpv3GroupAddRequest) (*operations.ProtocolSnmpv3GroupAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3GroupAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3GroupAdd200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3GroupClear - Clears all group entries.
// Clears all group entries.
func (s *SDK) ProtocolSnmpv3GroupClear(ctx context.Context, request operations.ProtocolSnmpv3GroupClearRequest) (*operations.ProtocolSnmpv3GroupClearResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3GroupClearResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3GroupClear200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3GroupDel - Deletes the specified group entry.
// Deletes the specified group entry.
func (s *SDK) ProtocolSnmpv3GroupDel(ctx context.Context, request operations.ProtocolSnmpv3GroupDelRequest) (*operations.ProtocolSnmpv3GroupDelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3GroupDelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3GroupDel200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3GroupList - Returns the current group entries as an array of strings.
// Returns the current group entries as an array of strings.
func (s *SDK) ProtocolSnmpv3GroupList(ctx context.Context, request operations.ProtocolSnmpv3GroupListRequest) (*operations.ProtocolSnmpv3GroupListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3GroupListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3GroupList200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3SetConfig - Changes the SNMPv3 configuration.
// Changes the SNMPv3 configuration.
func (s *SDK) ProtocolSnmpv3SetConfig(ctx context.Context, request operations.ProtocolSnmpv3SetConfigRequest) (*operations.ProtocolSnmpv3SetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3SetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3SetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3UserAdd - Adds a new user entry with the specified parameters.
// Adds a new user entry with the specified parameters.
func (s *SDK) ProtocolSnmpv3UserAdd(ctx context.Context, request operations.ProtocolSnmpv3UserAddRequest) (*operations.ProtocolSnmpv3UserAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3UserAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3UserAdd200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3UserClear - Clears all user entries.
// Clears all user entries.
func (s *SDK) ProtocolSnmpv3UserClear(ctx context.Context, request operations.ProtocolSnmpv3UserClearRequest) (*operations.ProtocolSnmpv3UserClearResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3UserClearResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3UserClear200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3UserDel - Deletes the specified user entry.
// Deletes the specified user entry.
func (s *SDK) ProtocolSnmpv3UserDel(ctx context.Context, request operations.ProtocolSnmpv3UserDelRequest) (*operations.ProtocolSnmpv3UserDelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3UserDelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3UserDel200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3UserList - Returns the current user entries as a Tcl list.
// Returns the current user entries as a Tcl list.
func (s *SDK) ProtocolSnmpv3UserList(ctx context.Context, request operations.ProtocolSnmpv3UserListRequest) (*operations.ProtocolSnmpv3UserListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3UserListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3UserList200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3UsmSave - Saves current user settings in the currently loaded USM config file.
// Saves current user settings in the currently loaded USM config file.
func (s *SDK) ProtocolSnmpv3UsmSave(ctx context.Context, request operations.ProtocolSnmpv3UsmSaveRequest) (*operations.ProtocolSnmpv3UsmSaveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3UsmSaveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3UsmSave200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3UsmSaveas - Saves current user settings in the specified USM config file.
// Saves current user settings in the specified USM config file.
func (s *SDK) ProtocolSnmpv3UsmSaveas(ctx context.Context, request operations.ProtocolSnmpv3UsmSaveasRequest) (*operations.ProtocolSnmpv3UsmSaveasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3UsmSaveasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3UsmSaveas200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3VacmSave - Saves current group, access, view settings in the currently loaded VACM config file.
// Saves current group, access, view settings in the currently loaded VACM config file.
func (s *SDK) ProtocolSnmpv3VacmSave(ctx context.Context, request operations.ProtocolSnmpv3VacmSaveRequest) (*operations.ProtocolSnmpv3VacmSaveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3VacmSaveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3VacmSave200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3VacmSaveas - Saves current group, access, view settings in the specified VACM config file.
// Saves current group, access, view settings in the specified VACM config file.
func (s *SDK) ProtocolSnmpv3VacmSaveas(ctx context.Context, request operations.ProtocolSnmpv3VacmSaveasRequest) (*operations.ProtocolSnmpv3VacmSaveasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3VacmSaveasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3VacmSaveas200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3ViewAdd - Adds a new view entry with the specified parameters.
// Adds a new view entry with the specified parameters.
func (s *SDK) ProtocolSnmpv3ViewAdd(ctx context.Context, request operations.ProtocolSnmpv3ViewAddRequest) (*operations.ProtocolSnmpv3ViewAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3ViewAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3ViewAdd200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3ViewClear - Clears all view entries.
// Clears all view entries.
func (s *SDK) ProtocolSnmpv3ViewClear(ctx context.Context, request operations.ProtocolSnmpv3ViewClearRequest) (*operations.ProtocolSnmpv3ViewClearResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3ViewClearResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3ViewClear200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3ViewDel - Deletes the specified view entry.
// Deletes the specified view entry.
func (s *SDK) ProtocolSnmpv3ViewDel(ctx context.Context, request operations.ProtocolSnmpv3ViewDelRequest) (*operations.ProtocolSnmpv3ViewDelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3ViewDelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSnmpv3ViewDel200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmpv3ViewList - Returns the current view entries as an array of strings.
// Returns the current view entries as an array of strings.
func (s *SDK) ProtocolSnmpv3ViewList(ctx context.Context, request operations.ProtocolSnmpv3ViewListRequest) (*operations.ProtocolSnmpv3ViewListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSnmpv3ViewListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSnmpv3ViewList200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHGetArgs - Show the agent's SSH argument structure
// Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSSHGetArgs(ctx context.Context, request operations.ProtocolSSHGetArgsRequest) (*operations.ProtocolSSHGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSSHGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHGetConfig - Show the agent's SSH configuration
// Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSSHGetConfig(ctx context.Context, request operations.ProtocolSSHGetConfigRequest) (*operations.ProtocolSSHGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSSH
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSSH = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHGetStatistics - Show the agent's SSH statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolSSHGetStatistics(ctx context.Context, request operations.ProtocolSSHGetStatisticsRequest) (*operations.ProtocolSSHGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSSHGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHGetStatsHdr - Show the SSH statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolSSHGetStatsHdr(ctx context.Context) (*operations.ProtocolSSHGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/ssh/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSSHGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHGetTrace - Show the agent's SSH traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolSSHGetTrace(ctx context.Context, request operations.ProtocolSSHGetTraceRequest) (*operations.ProtocolSSHGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSSH
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSSH = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
// By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolSSHIpaliasDisable(ctx context.Context, request operations.ProtocolSSHIpaliasDisableRequest) (*operations.ProtocolSSHIpaliasDisableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHIpaliasDisableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSSHIpaliasDisable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
// By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolSSHIpaliasEnable(ctx context.Context, request operations.ProtocolSSHIpaliasEnableRequest) (*operations.ProtocolSSHIpaliasEnableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHIpaliasEnableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSSHIpaliasEnable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
// By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolSSHIpaliasIsenabled(ctx context.Context, request operations.ProtocolSSHIpaliasIsenabledRequest) (*operations.ProtocolSSHIpaliasIsenabledResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHIpaliasIsenabledResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSSHIpaliasIsenabled200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHIpaliasList - List all IP aliases on the agent and the simulator host
// By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolSSHIpaliasList(ctx context.Context, request operations.ProtocolSSHIpaliasListRequest) (*operations.ProtocolSSHIpaliasListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHIpaliasListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.IPAlias
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IPAliases = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHSetConfig - Set the agent's SSH configuration
// Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSSHSetConfig(ctx context.Context, request operations.ProtocolSSHSetConfigRequest) (*operations.ProtocolSSHSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSSHSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSSHSetTrace - Set the agent's SSH traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolSSHSetTrace(ctx context.Context, request operations.ProtocolSSHSetTraceRequest) (*operations.ProtocolSSHSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSSHSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSSHSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogGetArgs - Show the agent's SYSLOG argument structure
// Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSyslogGetArgs(ctx context.Context, request operations.ProtocolSyslogGetArgsRequest) (*operations.ProtocolSyslogGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSyslogGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogGetAttr - Show the outgoing message's attributes
// Attribute can be server , sequence , separator , hostname , timestamp
func (s *SDK) ProtocolSyslogGetAttr(ctx context.Context, request operations.ProtocolSyslogGetAttrRequest) (*operations.ProtocolSyslogGetAttrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogGetAttrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSyslogGetAttr200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogGetConfig - Show the agent's SYSLOG configuration
// Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSyslogGetConfig(ctx context.Context, request operations.ProtocolSyslogGetConfigRequest) (*operations.ProtocolSyslogGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSyslog
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSyslog = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogGetStatistics - Show the agent's SYSLOG statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolSyslogGetStatistics(ctx context.Context, request operations.ProtocolSyslogGetStatisticsRequest) (*operations.ProtocolSyslogGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSyslogGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogGetStatsHdr - Show the SYSLOG statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolSyslogGetStatsHdr(ctx context.Context) (*operations.ProtocolSyslogGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/syslog/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolSyslogGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogGetTrace - Show the agent's SYSLOG traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolSyslogGetTrace(ctx context.Context, request operations.ProtocolSyslogGetTraceRequest) (*operations.ProtocolSyslogGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSyslog
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSyslog = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogSend - Set the agent's SYSLOG traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolSyslogSend(ctx context.Context, request operations.ProtocolSyslogSendRequest) (*operations.ProtocolSyslogSendResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogSendResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSyslogSend200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogSetAttr - Set the outgoing message's attributes
// Attribute can be server , sequence , separator , hostname , timestamp
func (s *SDK) ProtocolSyslogSetAttr(ctx context.Context, request operations.ProtocolSyslogSetAttrRequest) (*operations.ProtocolSyslogSetAttrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogSetAttrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSyslogSetAttr200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogSetConfig - Set the agent's SYSLOG configuration
// Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolSyslogSetConfig(ctx context.Context, request operations.ProtocolSyslogSetConfigRequest) (*operations.ProtocolSyslogSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSyslogSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSyslogSetTrace - Set the agent's SYSLOG traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolSyslogSetTrace(ctx context.Context, request operations.ProtocolSyslogSetTraceRequest) (*operations.ProtocolSyslogSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolSyslogSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolSyslogSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetConnectionLogon - Changes the connection's current logon.
// Logon change allows (hidden) commands for a different access mode to run.
func (s *SDK) ProtocolTelnetConnectionLogon(ctx context.Context, request operations.ProtocolTelnetConnectionLogonRequest) (*operations.ProtocolTelnetConnectionLogonResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetConnectionLogonResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetConnectionLogon200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetConnectionRequest - Executes the command asynchronously .
// Equivalent of the command typed in by the user.
func (s *SDK) ProtocolTelnetConnectionRequest(ctx context.Context, request operations.ProtocolTelnetConnectionRequestRequest) (*operations.ProtocolTelnetConnectionRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetConnectionRequestResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetConnectionRequest200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetConnectionSignal - Triggers the asynchronous signal event with the specified signal name
// Signal name is either connect or idle
func (s *SDK) ProtocolTelnetConnectionSignal(ctx context.Context, request operations.ProtocolTelnetConnectionSignalRequest) (*operations.ProtocolTelnetConnectionSignalResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetConnectionSignalResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetConnectionSignal200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetArgs - Show the agent's TELNET argument structure
// Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolTelnetGetArgs(ctx context.Context, request operations.ProtocolTelnetGetArgsRequest) (*operations.ProtocolTelnetGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetConfig - Show the agent's TELNET configuration
// Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolTelnetGetConfig(ctx context.Context, request operations.ProtocolTelnetGetConfigRequest) (*operations.ProtocolTelnetGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTelnet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTelnet = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetStatistics - Show the agent's TELNET statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolTelnetGetStatistics(ctx context.Context, request operations.ProtocolTelnetGetStatisticsRequest) (*operations.ProtocolTelnetGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetStatsHdr - Show the TELNET statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolTelnetGetStatsHdr(ctx context.Context) (*operations.ProtocolTelnetGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/telnet/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetTrace - Show the agent's TELNET traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolTelnetGetTrace(ctx context.Context, request operations.ProtocolTelnetGetTraceRequest) (*operations.ProtocolTelnetGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTelnet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTelnet = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
// By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolTelnetIpaliasDisable(ctx context.Context, request operations.ProtocolTelnetIpaliasDisableRequest) (*operations.ProtocolTelnetIpaliasDisableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetIpaliasDisableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTelnetIpaliasDisable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
// By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolTelnetIpaliasEnable(ctx context.Context, request operations.ProtocolTelnetIpaliasEnableRequest) (*operations.ProtocolTelnetIpaliasEnableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetIpaliasEnableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTelnetIpaliasEnable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
// By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolTelnetIpaliasIsenabled(ctx context.Context, request operations.ProtocolTelnetIpaliasIsenabledRequest) (*operations.ProtocolTelnetIpaliasIsenabledResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetIpaliasIsenabledResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTelnetIpaliasIsenabled200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetIpaliasList - List all IP aliases on the agent and the simulator host
// By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
func (s *SDK) ProtocolTelnetIpaliasList(ctx context.Context, request operations.ProtocolTelnetIpaliasListRequest) (*operations.ProtocolTelnetIpaliasListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetIpaliasListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.IPAlias
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IPAliases = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetConnections - Show the agent's TELNET connections
// IDs of all connected connections
func (s *SDK) ProtocolTelnetServerGetConnections(ctx context.Context, request operations.ProtocolTelnetServerGetConnectionsRequest) (*operations.ProtocolTelnetServerGetConnectionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetServerGetConnectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetServerGetConnections200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetKeymap - Show the agent's TELNET keymap file name
// Keymap file name
func (s *SDK) ProtocolTelnetServerGetKeymap(ctx context.Context, request operations.ProtocolTelnetServerGetKeymapRequest) (*operations.ProtocolTelnetServerGetKeymapResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetServerGetKeymapResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetServerGetKeymap200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetRulesdb - Show the agent's TELNET rules db file name
// Rules db file name
func (s *SDK) ProtocolTelnetServerGetRulesdb(ctx context.Context, request operations.ProtocolTelnetServerGetRulesdbRequest) (*operations.ProtocolTelnetServerGetRulesdbResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetServerGetRulesdbResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetServerGetRulesdb200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetState - Show the agent's TELNET server state
// Return 1 means accepting connections, 0 not
func (s *SDK) ProtocolTelnetServerGetState(ctx context.Context, request operations.ProtocolTelnetServerGetStateRequest) (*operations.ProtocolTelnetServerGetStateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetServerGetStateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetServerGetState200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetUserdb - Show the agent's TELNET user db file name
// User db file name
func (s *SDK) ProtocolTelnetServerGetUserdb(ctx context.Context, request operations.ProtocolTelnetServerGetUserdbRequest) (*operations.ProtocolTelnetServerGetUserdbResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetServerGetUserdbResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTelnetServerGetUserdb200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetUsers - Show the agent's TELNET users
// List of users
func (s *SDK) ProtocolTelnetServerGetUsers(ctx context.Context, request operations.ProtocolTelnetServerGetUsersRequest) (*operations.ProtocolTelnetServerGetUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetServerGetUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TelnetUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TelnetUsers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetSetConfig - Set the agent's TELNET configuration
// Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolTelnetSetConfig(ctx context.Context, request operations.ProtocolTelnetSetConfigRequest) (*operations.ProtocolTelnetSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTelnetSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetSetTrace - Set the agent's TELNET traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolTelnetSetTrace(ctx context.Context, request operations.ProtocolTelnetSetTraceRequest) (*operations.ProtocolTelnetSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTelnetSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTelnetSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpGetArgs - Show the agent's TFTP argument structure
// Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolTftpGetArgs(ctx context.Context, request operations.ProtocolTftpGetArgsRequest) (*operations.ProtocolTftpGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpGetConfig - Show the agent's TFTP configuration
// Agent's TFTP configuration
func (s *SDK) ProtocolTftpGetConfig(ctx context.Context, request operations.ProtocolTftpGetConfigRequest) (*operations.ProtocolTftpGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTftp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTftp = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpGetStatistics - Show the agent's TFTP statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolTftpGetStatistics(ctx context.Context, request operations.ProtocolTftpGetStatisticsRequest) (*operations.ProtocolTftpGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpGetStatsHdr - Show the TFTP statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolTftpGetStatsHdr(ctx context.Context) (*operations.ProtocolTftpGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/tftp/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpGetTrace - Show the agent's TFTP traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolTftpGetTrace(ctx context.Context, request operations.ProtocolTftpGetTraceRequest) (*operations.ProtocolTftpGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTftp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTftp = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionGetParameter - Show a parameter of a TFTP sesssion
// Parameter is server , port , or dstfile
func (s *SDK) ProtocolTftpSessionGetParameter(ctx context.Context, request operations.ProtocolTftpSessionGetParameterRequest) (*operations.ProtocolTftpSessionGetParameterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionGetParameterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionGetParameter200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionRead - Create a read session to download srcfile from server
// Session ID is returned
func (s *SDK) ProtocolTftpSessionRead(ctx context.Context, request operations.ProtocolTftpSessionReadRequest) (*operations.ProtocolTftpSessionReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpSessionRead200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionSetParameter - Set a parameter of a TFTP sesssion
// Parameter is server , port , or dstfile
func (s *SDK) ProtocolTftpSessionSetParameter(ctx context.Context, request operations.ProtocolTftpSessionSetParameterRequest) (*operations.ProtocolTftpSessionSetParameterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionSetParameterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionSetParameter200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionStart - Start a TFTP sesssion
// Start uploading or downloading the file
func (s *SDK) ProtocolTftpSessionStart(ctx context.Context, request operations.ProtocolTftpSessionStartRequest) (*operations.ProtocolTftpSessionStartResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionStartResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionStart200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionStatus - Check a TFTP sesssion's status
// Status includes running state, bytes transfered, and time elapsed
func (s *SDK) ProtocolTftpSessionStatus(ctx context.Context, request operations.ProtocolTftpSessionStatusRequest) (*operations.ProtocolTftpSessionStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionStatus200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionStop - Stop a TFTP sesssion
// Stop uploading or downloading the file
func (s *SDK) ProtocolTftpSessionStop(ctx context.Context, request operations.ProtocolTftpSessionStopRequest) (*operations.ProtocolTftpSessionStopResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionStopResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionStop200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionWrite - Create a read session to upload srcfile to server
// Session ID is returned
func (s *SDK) ProtocolTftpSessionWrite(ctx context.Context, request operations.ProtocolTftpSessionWriteRequest) (*operations.ProtocolTftpSessionWriteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionWriteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpSessionWrite200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSetConfig - Set the agent's TFTP configuration
// Agent's TFTP configuration
func (s *SDK) ProtocolTftpSetConfig(ctx context.Context, request operations.ProtocolTftpSetConfigRequest) (*operations.ProtocolTftpSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSetTrace - Set the agent's TFTP traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolTftpSetTrace(ctx context.Context, request operations.ProtocolTftpSetTraceRequest) (*operations.ProtocolTftpSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGetArgs - Show the agent's TOD argument structure
// Agent's TOD configuration
func (s *SDK) ProtocolTodGetArgs(ctx context.Context, request operations.ProtocolTodGetArgsRequest) (*operations.ProtocolTodGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTodGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTodGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGetConfig - Show the agent's TOD configuration
// Agent's TOD configuration
func (s *SDK) ProtocolTodGetConfig(ctx context.Context, request operations.ProtocolTodGetConfigRequest) (*operations.ProtocolTodGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTodGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTod
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTod = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGetStatistics - Show the agent's TOD statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolTodGetStatistics(ctx context.Context, request operations.ProtocolTodGetStatisticsRequest) (*operations.ProtocolTodGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTodGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTodGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGetStatsHdr - Show the TOD statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolTodGetStatsHdr(ctx context.Context) (*operations.ProtocolTodGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/tod/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTodGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTodGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGetTrace - Show the agent's TOD traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolTodGetTrace(ctx context.Context, request operations.ProtocolTodGetTraceRequest) (*operations.ProtocolTodGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTodGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTod
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTod = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGettime - Retrieve TOD time
// Retrive time from server
func (s *SDK) ProtocolTodGettime(ctx context.Context, request operations.ProtocolTodGettimeRequest) (*operations.ProtocolTodGettimeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTodGettimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTodGettime200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodSetConfig - Set the agent's TOD configuration
// Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolTodSetConfig(ctx context.Context, request operations.ProtocolTodSetConfigRequest) (*operations.ProtocolTodSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTodSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTodSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodSetTrace - Set the agent's TOD traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolTodSetTrace(ctx context.Context, request operations.ProtocolTodSetTraceRequest) (*operations.ProtocolTodSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTodSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTodSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebGetArgs - Show the agent's WEB argument structure
// Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolWebGetArgs(ctx context.Context, request operations.ProtocolWebGetArgsRequest) (*operations.ProtocolWebGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolWebGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebGetConfig - Show the agent's WEB configuration
// Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolWebGetConfig(ctx context.Context, request operations.ProtocolWebGetConfigRequest) (*operations.ProtocolWebGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigWeb
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigWeb = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebGetStatistics - Show the agent's WEB statistics
// Statistics of fields indicated in the headers
func (s *SDK) ProtocolWebGetStatistics(ctx context.Context, request operations.ProtocolWebGetStatisticsRequest) (*operations.ProtocolWebGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolWebGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebGetStatsHdr - Show the WEB statistics headers
// The headers of statistics fields
func (s *SDK) ProtocolWebGetStatsHdr(ctx context.Context) (*operations.ProtocolWebGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/web/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolWebGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebGetTrace - Show the agent's WEB traffic tracing
// Trace 1 means enabled, 0 means not
func (s *SDK) ProtocolWebGetTrace(ctx context.Context, request operations.ProtocolWebGetTraceRequest) (*operations.ProtocolWebGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigWeb
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigWeb = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebPortAdd - Add the agent's WEB port
// Add port
func (s *SDK) ProtocolWebPortAdd(ctx context.Context, request operations.ProtocolWebPortAddRequest) (*operations.ProtocolWebPortAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebPortAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolWebPortAdd200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebPortExists - Show the agent's WEB port
// Check the port. 1 means existing, 0 means not
func (s *SDK) ProtocolWebPortExists(ctx context.Context, request operations.ProtocolWebPortExistsRequest) (*operations.ProtocolWebPortExistsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebPortExistsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolWebPortExists200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebPortRemove - Remove the agent's WEB port
// Remove port
func (s *SDK) ProtocolWebPortRemove(ctx context.Context, request operations.ProtocolWebPortRemoveRequest) (*operations.ProtocolWebPortRemoveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebPortRemoveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolWebPortRemove200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebPortSet - Set the agent's WEB port attribute
// Set port
func (s *SDK) ProtocolWebPortSet(ctx context.Context, request operations.ProtocolWebPortSetRequest) (*operations.ProtocolWebPortSetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebPortSetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolWebPortSet200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebPortStart - Start the agent's WEB port
// Start port
func (s *SDK) ProtocolWebPortStart(ctx context.Context, request operations.ProtocolWebPortStartRequest) (*operations.ProtocolWebPortStartResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebPortStartResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolWebPortStart200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebPortStop - Stop the agent's WEB port
// Stop port
func (s *SDK) ProtocolWebPortStop(ctx context.Context, request operations.ProtocolWebPortStopRequest) (*operations.ProtocolWebPortStopResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebPortStopResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolWebPortStop200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebSetConfig - Set the agent's WEB configuration
// Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *SDK) ProtocolWebSetConfig(ctx context.Context, request operations.ProtocolWebSetConfigRequest) (*operations.ProtocolWebSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolWebSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolWebSetTrace - Set the agent's WEB traffic tracing
// 1 to enable, 0 to disable
func (s *SDK) ProtocolWebSetTrace(ctx context.Context, request operations.ProtocolWebSetTraceRequest) (*operations.ProtocolWebSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolWebSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolWebSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// Reload - Reload the current agent.
// This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
func (s *SDK) Reload(ctx context.Context, request operations.ReloadRequest) (*operations.ReloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/reload", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.Reload200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// Remove - Remove an entry from a table.
// The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
func (s *SDK) Remove(ctx context.Context, request operations.RemoveRequest) (*operations.RemoveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/remove/{object}/{instance}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RemoveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.Remove200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// Resume - Resume the current agent.
// Resume the current agent.
func (s *SDK) Resume(ctx context.Context, request operations.ResumeRequest) (*operations.ResumeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/resume", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ResumeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.Resume200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// Save - Save agent MIB values.
// Save agent MIB values.
func (s *SDK) Save(ctx context.Context, request operations.SaveRequest) (*operations.SaveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/save", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SaveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.Save200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetDelay - one-way transit delay in msec
// The minimum granularity is 10 msec.
func (s *SDK) SetDelay(ctx context.Context, request operations.SetDelayRequest) (*operations.SetDelayResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/delay/{delay}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetDelayResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SetDelay200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetDrops - drop rate (every N-th PDU)
// 0 means no drops
func (s *SDK) SetDrops(ctx context.Context, request operations.SetDropsRequest) (*operations.SetDropsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/drops/{drops}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetDropsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SetDrops200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetHost - host address of the agent.
// Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
func (s *SDK) SetHost(ctx context.Context, request operations.SetHostRequest) (*operations.SetHostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/host/{host}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetHostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetHost200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetInformTimeout - timeout in seconds for retransmitting INFORM PDUs
// The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
func (s *SDK) SetInformTimeout(ctx context.Context, request operations.SetInformTimeoutRequest) (*operations.SetInformTimeoutResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetInformTimeoutResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SetInformTimeout200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetInterface - network interface card for the agent
// network interface card for the agent
func (s *SDK) SetInterface(ctx context.Context, request operations.SetInterfaceRequest) (*operations.SetInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/interface/{interface}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetInterfaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetInterface200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetLog - The current log file for the Simulator.
// The current log file for the Simulator.
func (s *SDK) SetLog(ctx context.Context, request operations.SetLogRequest) (*operations.SetLogResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/set/log"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetLogResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetLog200ApplicationJSONString = &out
		}
	}

	return res, nil
}

// SetMask - subnet mask of the agent.
// subnet mask of the agent.
func (s *SDK) SetMask(ctx context.Context, request operations.SetMaskRequest) (*operations.SetMaskResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/mask/{mask}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetMaskResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetMask200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetMibs - set of MIBs, simulations and scenarios
// set of MIBs, simulations and scenarios
func (s *SDK) SetMibs(ctx context.Context, request operations.SetMibsRequest) (*operations.SetMibsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/mibs", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetMibsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetMibs200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetNetdev - The network address of the host where the MIMIC simulator is running.
// The network address of the host where the MIMIC simulator is running.
func (s *SDK) SetNetdev(ctx context.Context) (*operations.SetNetdevResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/set/netdev"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetNetdevResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SetNetdev200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SetOiddir - MIB directory of the agent.
// MIB directory of the agent.
func (s *SDK) SetOiddir(ctx context.Context, request operations.SetOiddirRequest) (*operations.SetOiddirResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/oiddir/{oiddir}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetOiddirResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetOiddir200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetOwner - owner of the agent
// owner of the agent
func (s *SDK) SetOwner(ctx context.Context, request operations.SetOwnerRequest) (*operations.SetOwnerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/owner/{owner}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetOwnerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetOwner200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetPdusize - maximum PDU size
// The limit for this configurable is 65536
func (s *SDK) SetPdusize(ctx context.Context, request operations.SetPdusizeRequest) (*operations.SetPdusizeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/pdusize/{pdusize}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetPdusizeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SetPdusize200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetPort - port number
// port number
func (s *SDK) SetPort(ctx context.Context, request operations.SetPortRequest) (*operations.SetPortResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/port/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetPortResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetPort200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetPrivdir - private directory of the agent.
// private directory of the agent.
func (s *SDK) SetPrivdir(ctx context.Context, request operations.SetPrivdirRequest) (*operations.SetPrivdirResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/privdir/{privdir}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetPrivdirResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetPrivdir200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetProtocols - protocols supported by agent as a comma-separated list
// protocols supported by agent as a comma-separated list
func (s *SDK) SetProtocols(ctx context.Context, request operations.SetProtocolsRequest) (*operations.SetProtocolsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/protocol", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetProtocolsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int64
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SetProtocols200ApplicationJSONStringIntegers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetReadCommunity - read community string
// read community string
func (s *SDK) SetReadCommunity(ctx context.Context, request operations.SetReadCommunityRequest) (*operations.SetReadCommunityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/read/{read}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetReadCommunityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetReadCommunity200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetStarttime - relative start time
// relative start time
func (s *SDK) SetStarttime(ctx context.Context, request operations.SetStarttimeRequest) (*operations.SetStarttimeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/start/{start}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetStarttimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetStarttime200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetState - Set the state of a MIB object object
// To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
func (s *SDK) SetState(ctx context.Context, request operations.SetStateRequest) (*operations.SetStateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/state/set/{object}/{state}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetStateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetState200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetTrace - SNMP PDU tracing
// SNMP PDU tracing
func (s *SDK) SetTrace(ctx context.Context, request operations.SetTraceRequest) (*operations.SetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/trace/{trace}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SetTrace200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetValidate - SNMP SET validation policy
// Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
func (s *SDK) SetValidate(ctx context.Context, request operations.SetValidateRequest) (*operations.SetValidateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/validate/{validate}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetValidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SetValidate200ApplicationJSONInt32Integer = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetValue - Set a variable in the Value Space.
// NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
func (s *SDK) SetValue(ctx context.Context, request operations.SetValueRequest) (*operations.SetValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetValue200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SetWriteCommunity - write community string
// write community string
func (s *SDK) SetWriteCommunity(ctx context.Context, request operations.SetWriteCommunityRequest) (*operations.SetWriteCommunityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/set/write/{write}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetWriteCommunityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SetWriteCommunity200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// SplitOid - Split the numerical OID into the object OID and instance OID.
// This is useful if you have an OID which is a combination of object and instance.
func (s *SDK) SplitOid(ctx context.Context, request operations.SplitOidRequest) (*operations.SplitOidResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/split/{OID}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SplitOidResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SplitOid200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// Start - Start the current agent.
// For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
func (s *SDK) Start(ctx context.Context, request operations.StartRequest) (*operations.StartResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/start", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StartResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.Start200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StartAllAgents - Start MIMIC.
// Start MIMIC.
func (s *SDK) StartAllAgents(ctx context.Context) (*operations.StartAllAgentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/start"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StartAllAgentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StartAllAgents200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// StartIpalias - Starts an existing ipalias for the agent.
// port defaults to 161 if not specified.
func (s *SDK) StartIpalias(ctx context.Context, request operations.StartIpaliasRequest) (*operations.StartIpaliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/ipalias/start/{IP}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StartIpaliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.StartIpalias200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StatusIpalias - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
// port defaults to 161 if not specified.
func (s *SDK) StatusIpalias(ctx context.Context, request operations.StatusIpaliasRequest) (*operations.StatusIpaliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/ipalias/status/{IP}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StatusIpaliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.StatusIpalias200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// Stop - Show the agent's primary IP address
// Agent primary IP address
func (s *SDK) Stop(ctx context.Context, request operations.StopRequest) (*operations.StopResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/stop", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StopResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.Stop200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StopAllAgents - Stop MIMIC.
// Stop MIMIC.
func (s *SDK) StopAllAgents(ctx context.Context) (*operations.StopAllAgentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/stop"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StopAllAgentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StopAllAgents200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// StopIpalias - Stops an existing ipalias for the agent.
// port defaults to 161 if not specified.
func (s *SDK) StopIpalias(ctx context.Context, request operations.StopIpaliasRequest) (*operations.StopIpaliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StopIpaliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.StopIpalias200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StoreExists - This command can be used as a predicate to ascertain the existence of a given variable.
// It returns "1" if the variable exists, else "0".
func (s *SDK) StoreExists(ctx context.Context, request operations.StoreExistsRequest) (*operations.StoreExistsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/store/exists/{var}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StoreExistsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.StoreExists200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StoreGet - Fetches the value associated with a variable.
// The value will be returned as a string (like all Tcl values).
func (s *SDK) StoreGet(ctx context.Context, request operations.StoreGetRequest) (*operations.StoreGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/store/get/{var}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StoreGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.StoreGet200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StoreList - This command will return the list of variables in the said scope.
// The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
func (s *SDK) StoreList(ctx context.Context) (*operations.StoreListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/store/list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StoreListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StoreList200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StoreLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
// These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
func (s *SDK) StoreLreplace(ctx context.Context, request operations.StoreLreplaceRequest) (*operations.StoreLreplaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/store/lreplace/{var}/{index}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StoreLreplaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.StoreLreplace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StorePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
// It returns "1" if the variable is persistent, else "0".
func (s *SDK) StorePersists(ctx context.Context, request operations.StorePersistsRequest) (*operations.StorePersistsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/store/persists/{var}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StorePersistsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.StorePersists200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StoreSave - This operation flushes all global objects which need to be made persistent to disk.
// The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
func (s *SDK) StoreSave(ctx context.Context) (*operations.StoreSaveResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/set/persistent"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StoreSaveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StoreSave200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// StoreSet - Set the variable store for the global storage
// Persist 1 means persistent , 0 means non-persistent
func (s *SDK) StoreSet(ctx context.Context, request operations.StoreSetRequest) (*operations.StoreSetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/store/set/{var}/{persist}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StoreSetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.StoreSet200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// StoreUnset - Deletes a variable which is currently defined.
// This will cleanup persistent variables if needed
func (s *SDK) StoreUnset(ctx context.Context, request operations.StoreUnsetRequest) (*operations.StoreUnsetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/store/unset/{var}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StoreUnsetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.StoreUnset200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// Terminate - Terminate the MIMIC daemon.
// Terminate the MIMIC daemon.
func (s *SDK) Terminate(ctx context.Context) (*operations.TerminateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/terminate"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TerminateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Terminate200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// TrapConfigAdd - Add a trap destination to the set of destinations.
// Add a trap destination to the set of destinations.
func (s *SDK) TrapConfigAdd(ctx context.Context, request operations.TrapConfigAddRequest) (*operations.TrapConfigAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/trap/config/add/{IP}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TrapConfigAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.TrapConfigAdd200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// TrapConfigDel - Remove a trap destination from the set of destinations.
// Remove a trap destination from the set of destinations.
func (s *SDK) TrapConfigDel(ctx context.Context, request operations.TrapConfigDelRequest) (*operations.TrapConfigDelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TrapConfigDelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.TrapConfigDel200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// TrapConfigList - List the set of trap destinations for this agent instance.
// Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
func (s *SDK) TrapConfigList(ctx context.Context, request operations.TrapConfigListRequest) (*operations.TrapConfigListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/trap/config/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TrapConfigListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TrapDest
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TrapDests = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// TrapList - List the outstanding asynchronous traps for this agent instance.
// List the outstanding asynchronous traps for this agent instance.
func (s *SDK) TrapList(ctx context.Context, request operations.TrapListRequest) (*operations.TrapListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/trap/list", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TrapListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TrapList200ApplicationJSONStrings = out
		}
	}

	return res, nil
}

// UnsetValue - Unset a variable in the Value Space in order to free its memory.
// Only variables that have previously been set can be unset.
func (s *SDK) UnsetValue(ctx context.Context, request operations.UnsetValueRequest) (*operations.UnsetValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UnsetValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.UnsetValue200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}
