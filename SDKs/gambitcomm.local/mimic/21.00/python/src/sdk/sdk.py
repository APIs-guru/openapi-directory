
__doc__ = """ SDK Documentation: https://www.gambitcomm.com/site/about.php - Find out more about Gambit"""
import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://gambitcomm.local",
	"http://127.0.0.1",
]


class SDK:
    r"""SDK Documentation: https://www.gambitcomm.com/site/about.php - Find out more about Gambit"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def access_add(self, request: operations.AccessAddRequest) -> operations.AccessAddResponse:
        r"""Adds/Overwrites the user entry in the access control database.
        Adds/Overwrites the user entry in the access control database.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/add/{user}/{agents}/{mask}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_del(self, request: operations.AccessDelRequest) -> operations.AccessDelResponse:
        r"""Clears a users entry from access control database.
        Using '*' for user clears all the users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/del/{user}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_get_acldb(self) -> operations.AccessGetAcldbResponse:
        r"""Returns the current access control database in use.
        If nothing is specified then this returns \"\".
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/get/acldb"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetAcldbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_get_acldb_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_get_admindir(self) -> operations.AccessGetAdmindirResponse:
        r"""Returns the current admin directory.
        If nothing is specified in admin/settings.cfg then returns \"\". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/get/admindir"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetAdmindirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_get_admindir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_get_adminuser(self) -> operations.AccessGetAdminuserResponse:
        r"""Returns the current administrator.
        If nothing is specified in admin/settings.cfg then returns \"\".
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/get/adminuser"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetAdminuserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_get_adminuser_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_get_enabled(self) -> operations.AccessGetEnabledResponse:
        r"""Returns the state of access control checking.
        0 indicates that it is disabled, 1 indicates it is enabled.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/get/enabled"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_get_enabled_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_list(self) -> operations.AccessListResponse:
        r"""Returns an array of entries.
        Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/access/list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AccessEntry]])
                res.access_entries = out
        elif r.status_code == 400:
            pass

        return res

    
    def access_load(self, request: operations.AccessLoadRequest) -> operations.AccessLoadResponse:
        r"""Loads the specified file for access control data.
        If filename is not specified then the currently set 'acldb' parameter is used.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/load/{filename}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessLoadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.access_load_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def access_save(self, request: operations.AccessSaveRequest) -> operations.AccessSaveResponse:
        r"""Saves current access control data in specified file.
        If filename is not specified then the currently set 'acldb' parameter is used.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/save/{filename}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.access_save_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def access_set_acldb(self, request: operations.AccessSetAcldbRequest) -> operations.AccessSetAcldbResponse:
        r"""Allows setting the name of the current access control database.
        This will be used for subsequent load and save operations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/set/acldb/{databaseName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessSetAcldbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_set_acldb_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def access_set_enabled(self, request: operations.AccessSetEnabledRequest) -> operations.AccessSetEnabledResponse:
        r"""Allows the user to enable/disable the access control check.
        0 indicates disabled, 1 indicates enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/access/set/enabled/{enabledOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessSetEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_set_enabled_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def add(self, request: operations.AddRequest) -> operations.AddResponse:
        r"""Add an entry to a table.
        The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/add/{object}/{instance}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def add_daemon_timer_script(self, request: operations.AddDaemonTimerScriptRequest) -> operations.AddDaemonTimerScriptResponse:
        r"""Add a new timer script to be executed at specified interval (in msec) with the specified argument.
        Add a new timer script to be executed at specified interval (in msec) with the specified argument.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/timer/script/add/{script}/{interval}/{arg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddDaemonTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.add_daemon_timer_script_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def add_ipalias(self, request: operations.AddIpaliasRequest) -> operations.AddIpaliasResponse:
        r"""Adds a new ipalias for the agent.
        port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.add_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def add_timer_script(self, request: operations.AddTimerScriptRequest) -> operations.AddTimerScriptResponse:
        r"""Add a new timer script to be executed at specified interval (in msec) with the specified argument.
        Add a new timer script to be executed at specified interval (in msec) with the specified argument.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.add_timer_script_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_remove(self, request: operations.AgentRemoveRequest) -> operations.AgentRemoveResponse:
        r"""Remove the current agent.
        For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/remove", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_remove_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_copy(self, request: operations.AgentStoreCopyRequest) -> operations.AgentStoreCopyResponse:
        r"""This command copies the variable store from the other agent to this agent.
        This command copies the variable store from the other agent to this agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/copy/{otherAgent}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreCopyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_copy_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_exists(self, request: operations.AgentStoreExistsRequest) -> operations.AgentStoreExistsResponse:
        r"""This command can be used as a predicate to ascertain the existence of a given variable.
        It returns \"1\" if the variable exists, else \"0\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/exists/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_exists_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_get(self, request: operations.AgentStoreGetRequest) -> operations.AgentStoreGetResponse:
        r"""Fetches the value associated with a variable.
        The value will be returned as a string (like all Tcl values).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/get/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_get_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_list(self, request: operations.AgentStoreListRequest) -> operations.AgentStoreListResponse:
        r"""This command will return the list of variables in the said scope.
        The list will be a Tcl format list with curly braces \"{}\" around each list element. These elements in turn are space separated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.agent_store_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_lreplace(self, request: operations.AgentStoreLreplaceRequest) -> operations.AgentStoreLreplaceResponse:
        r"""These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
        These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/lreplace/{var}/{index}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreLreplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_lreplace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_persists(self, request: operations.AgentStorePersistsRequest) -> operations.AgentStorePersistsResponse:
        r"""This command can be used as a predicate to ascertain the persistence of a given variable.
        It returns \"1\" if the variable is persistent, else \"0\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/persists/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStorePersistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_persists_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_set(self, request: operations.AgentStoreSetRequest) -> operations.AgentStoreSetResponse:
        r"""These commands allow the creation of a new variable, or changing an existing value.
        The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/set/{var}/{persist}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_set_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_unset(self, request: operations.AgentStoreUnsetRequest) -> operations.AgentStoreUnsetResponse:
        r"""Deletes a variable which is currently defined.
        This will cleanup persistent variables if needed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/unset/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreUnsetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_unset_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def cfg_load(self, request: operations.CfgLoadRequest) -> operations.CfgLoadResponse:
        r"""Load the lab configuration file file.
        Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgLoadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_load_200_application_json_object = out

        return res

    
    def cfg_new(self, request: operations.CfgNewRequest) -> operations.CfgNewResponse:
        r"""Clear the lab configuration.
        Clear the lab configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/clear/{firstAgentNum}/{lastAgentNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgNewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_new_200_application_json_object = out

        return res

    
    def cfg_save(self) -> operations.CfgSaveResponse:
        r"""Save the lab configuration.
        Save the lab configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/save"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_save_200_application_json_object = out

        return res

    
    def cfg_saveas(self, request: operations.CfgSaveasRequest) -> operations.CfgSaveasResponse:
        r"""Save the lab configuration in file.
        Save the lab configuration in file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgSaveasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_saveas_200_application_json_object = out

        return res

    
    def del_daemon_timer_script(self, request: operations.DelDaemonTimerScriptRequest) -> operations.DelDaemonTimerScriptResponse:
        r"""Remove a timer script from the execution list.
        The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/timer/script/delete/{script}/{interval}/{arg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelDaemonTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.del_daemon_timer_script_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def del_ipalias(self, request: operations.DelIpaliasRequest) -> operations.DelIpaliasResponse:
        r"""Deletes an existing ipalias from the agent.
        port defaults to 161 if not specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.del_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def del_timer_script(self, request: operations.DelTimerScriptRequest) -> operations.DelTimerScriptResponse:
        r"""Remove a timer script from the execution list.
        The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.del_timer_script_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def eval_value(self, request: operations.EvalValueRequest) -> operations.EvalValueResponse:
        r"""Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
        Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/eval/{object}/{instance}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EvalValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.eval_value_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def from_add(self, request: operations.FromAddRequest) -> operations.FromAddResponse:
        r"""Add a source address that the agent will accept messages from.
        An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/from/add/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FromAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.from_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def from_del(self, request: operations.FromDelRequest) -> operations.FromDelResponse:
        r"""delete a source address that the agent will accept messages from.
        An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/from/delete/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FromDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.from_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def from_list(self, request: operations.FromListRequest) -> operations.FromListResponse:
        r"""List the source addresses that the agent will accept messages from.
        This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/from/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FromListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IPSource]])
                res.ip_sources = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_active_data_list(self) -> operations.GetActiveDataListResponse:
        r"""The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
        This list is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/active_data_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveDataListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_active_data_list_200_application_json_int32_integers = out

        return res

    
    def get_active_list(self) -> operations.GetActiveListResponse:
        r"""The list of {agentnum} that are currently active (running or paused).
        This list is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/active_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_active_list_200_application_json_int32_integers = out

        return res

    
    def get_agent_state(self, request: operations.GetAgentStateRequest) -> operations.GetAgentStateResponse:
        r"""current running state of the agent
        0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/state", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_agent_state_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_cfg_file_changed(self) -> operations.GetCfgFileChangedResponse:
        r"""This predicate indicates if the currently loaded agent configuration file has changed.
        Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/cfgfile_changed"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCfgFileChangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_cfg_file_changed_200_application_json_object = out

        return res

    
    def get_cfgfile(self) -> operations.GetCfgfileResponse:
        r"""The currently loaded lab configuration file for the particular user.
        In the case of multi-user access this command returns a different configuration file loaded for each user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/cfgfile"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCfgfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_cfgfile_200_application_json_object = out

        return res

    
    def get_changed(self, request: operations.GetChangedRequest) -> operations.GetChangedResponse:
        r"""has the agent value space changed?
        has the agent value space changed?
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/changed", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_changed_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_changed_config_list(self) -> operations.GetChangedConfigListResponse:
        r"""The list of {agentnum} for which a configurable parameter changed.
        This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/changed_config_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangedConfigListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_changed_config_list_200_application_json_int32_integers = out

        return res

    
    def get_changed_state_list(self) -> operations.GetChangedStateListResponse:
        r"""The list of {agentnum state} for which the state changed.
        This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/changed_state_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangedStateListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AgentState]])
                res.agent_states = out

        return res

    
    def get_clients(self) -> operations.GetClientsResponse:
        r"""The number of clients currently connected to the daemon.
        The number of clients currently connected to the daemon.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/clients"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_clients_200_application_json_object = out

        return res

    
    def get_config_changed(self, request: operations.GetConfigChangedRequest) -> operations.GetConfigChangedResponse:
        r"""has the lab configuration changed?
        has the lab configuration changed?
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/config_changed", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigChangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_config_changed_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_configured_list(self) -> operations.GetConfiguredListResponse:
        r"""The list of {agentnum} that are currently configured.
        This list is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/configured_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfiguredListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_configured_list_200_application_json_int32_integers = out

        return res

    
    def get_daemon_protocols(self) -> operations.GetDaemonProtocolsResponse:
        r"""The set of protocols supported by the Simulator.
        The set of protocols supported by the Simulator.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/protocols"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDaemonProtocolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_daemon_protocols_200_application_json_object = out

        return res

    
    def get_delay(self, request: operations.GetDelayRequest) -> operations.GetDelayResponse:
        r"""one-way transit delay in msec.
        The minimum granularity is 10 msec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/delay", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_delay_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_drops(self, request: operations.GetDropsRequest) -> operations.GetDropsResponse:
        r"""drop rate (every N-th PDU). 0 means no drops.
        drop rate (every N-th PDU). 0 means no drops.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/drops", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDropsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_drops_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_host(self, request: operations.GetHostRequest) -> operations.GetHostResponse:
        r"""host address of the agent.
        Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/host", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_host_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_info(self, request: operations.GetInfoRequest) -> operations.GetInfoResponse:
        r"""Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
        Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/info/{object}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_info_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_inform_timeout(self, request: operations.GetInformTimeoutRequest) -> operations.GetInformTimeoutResponse:
        r"""timeout in seconds for retransmitting INFORM PDUs.
        The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/inform_timeout", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInformTimeoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_inform_timeout_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_instances(self, request: operations.GetInstancesRequest) -> operations.GetInstancesResponse:
        r"""Display the MIB object instances for the specified object.
        This enables MIB browsing of the MIB on the current agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/instances/{object}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_instances_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_interface(self, request: operations.GetInterfaceRequest) -> operations.GetInterfaceResponse:
        r"""network interface card for the agent.
        network interface card for the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/interface", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_interface_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_interfaces(self) -> operations.GetInterfacesResponse:
        r"""The set of network interfaces that can be used for simulations.
        The set of network interfaces that can be used for simulations.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/interfaces"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInterfacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_interfaces_200_application_json_object = out

        return res

    
    def get_last(self) -> operations.GetLastResponse:
        r"""The last configured agent instance.
        The last configured agent instance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/last"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_last_200_application_json_int32_integer = out

        return res

    
    def get_log(self) -> operations.GetLogResponse:
        r"""The current log file for the Simulator.
        The current log file for the Simulator.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/log"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_log_200_application_json_object = out

        return res

    
    def get_mask(self, request: operations.GetMaskRequest) -> operations.GetMaskResponse:
        r"""subnet mask of the agent.
        subnet mask of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/mask", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_mask_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_max(self) -> operations.GetMaxResponse:
        r"""The maximum number of agent instances.
        The maximum number of agent instances.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/max"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_max_200_application_json_int32_integer = out

        return res

    
    def get_mib(self, request: operations.GetMibRequest) -> operations.GetMibResponse:
        r"""Return the MIB that defines the specified object.
        This will only return a MIB name if the object is unmistakeably defined in a MIB.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/mib/{object}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMibResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_mib_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_mibs(self, request: operations.GetMibsRequest) -> operations.GetMibsResponse:
        r"""set of MIBs, simulations and scenarios
        set of MIBs, simulations and scenarios
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/mibs", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMibsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Triplet]])
                res.triplets = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_name(self, request: operations.GetNameRequest) -> operations.GetNameResponse:
        r"""Return the symbolic name of the specified object identifier.
        Return the symbolic name of the specified object identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/name/{OID}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_name_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_netaddr(self) -> operations.GetNetaddrResponse:
        r"""The network address of the host where the MIMIC simulator is running.
        The network address of the host where the MIMIC simulator is running.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/netaddr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetaddrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_netaddr_200_application_json_object = out

        return res

    
    def get_netdev(self) -> operations.GetNetdevResponse:
        r"""The default network device to be used for agent addresses.
        The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/netdev"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetdevResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_netdev_200_application_json_object = out

        return res

    
    def get_number_starts(self, request: operations.GetNumberStartsRequest) -> operations.GetNumberStartsResponse:
        r"""number of starts for the agent.
        This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/num_starts", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumberStartsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_number_starts_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_objects(self, request: operations.GetObjectsRequest) -> operations.GetObjectsResponse:
        r"""Display the MIB objects below the current position
        This command is similar to the ls or dir operating system commands to list filesystem directories.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/list/{OID}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_objects_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_oid(self, request: operations.GetOidRequest) -> operations.GetOidResponse:
        r"""Return the numeric OID of the specified object.
        Return the numeric OID of the specified object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/oid/{object}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_oid_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_oiddir(self, request: operations.GetOiddirRequest) -> operations.GetOiddirResponse:
        r"""MIB directory of the agent.
        MIB directory of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/oiddir", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOiddirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_oiddir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_owner(self, request: operations.GetOwnerRequest) -> operations.GetOwnerResponse:
        r"""owner of the agent.
        owner of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/owner", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_owner_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_pdusize(self, request: operations.GetPdusizeRequest) -> operations.GetPdusizeResponse:
        r"""maximum PDU size.
        The limit for this configurable is 65536.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/pdusize", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPdusizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_pdusize_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_port(self, request: operations.GetPortRequest) -> operations.GetPortResponse:
        r"""port number
        port number
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/port", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_port_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_privdir(self, request: operations.GetPrivdirRequest) -> operations.GetPrivdirResponse:
        r"""private directory of the agent.
        private directory of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/privdir", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPrivdirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_privdir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_product(self) -> operations.GetProductResponse:
        r"""The product number that is licensed.
        The product number that is licensed.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/product"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_product_200_application_json_object = out

        return res

    
    def get_protocols(self, request: operations.GetProtocolsRequest) -> operations.GetProtocolsResponse:
        r"""protocols supported by agent
        protocols supported by agent as an array of strings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/protocol", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProtocolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_protocols_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_read_community(self, request: operations.GetReadCommunityRequest) -> operations.GetReadCommunityResponse:
        r"""read community string
        read community string
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/read", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_read_community_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_return(self) -> operations.GetReturnResponse:
        r"""The return mode.
        The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/return"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_return_200_application_json_object = out

        return res

    
    def get_scen(self, request: operations.GetScenRequest) -> operations.GetScenResponse:
        r"""first scenario name
        first scenario name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/scen", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_scen_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_sim(self, request: operations.GetSimRequest) -> operations.GetSimResponse:
        r"""first simulation name
        first simulation name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/sim", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_sim_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_starttime(self, request: operations.GetStarttimeRequest) -> operations.GetStarttimeResponse:
        r"""relative start time
        relative start time
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/start", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStarttimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_starttime_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_state(self, request: operations.GetStateRequest) -> operations.GetStateResponse:
        r"""Get the state of a MIB object object.
        To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/state/get/{object}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_state_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_state_changed(self, request: operations.GetStateChangedRequest) -> operations.GetStateChangedResponse:
        r"""has the agent state changed?
        has the agent state changed?
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/state_changed", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStateChangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_state_changed_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_statistics(self, request: operations.GetStatisticsRequest) -> operations.GetStatisticsResponse:
        r"""current statistics of the agent instance
        The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_trace(self, request: operations.GetTraceRequest) -> operations.GetTraceResponse:
        r"""SNMP PDU tracing
        SNMP PDU tracing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_trace_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_validate(self, request: operations.GetValidateRequest) -> operations.GetValidateResponse:
        r"""SNMP SET validation policy.
        Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/validate", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_validate_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_value(self, request: operations.GetValueRequest) -> operations.GetValueResponse:
        r"""Get a variable in the Value Space.
        Get a variable in the Value Space.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_value_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_variables(self, request: operations.GetVariablesRequest) -> operations.GetVariablesResponse:
        r"""Display the variables for the specified instance instance for the specified MIB object object
        This enables variable browsing of the MIB on the current agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/variables/{object}/{instance}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariablesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_variables_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_version(self) -> operations.GetVersionResponse:
        r"""The version of the MIMIC command interface.
        The version of the MIMIC command interface.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/version"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_version_200_application_json_string = r.content

        return res

    
    def get_write_community(self, request: operations.GetWriteCommunityRequest) -> operations.GetWriteCommunityResponse:
        r"""write community string
        write community string
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/write", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWriteCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_write_community_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def halt(self, request: operations.HaltRequest) -> operations.HaltResponse:
        r"""Halt the current agent.
        Halt the current agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/halt", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HaltResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.halt_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def list_daemon_timer_scripts(self) -> operations.ListDaemonTimerScriptsResponse:
        r"""List the timer scripts currently running along with the their intervals.
        The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/timer/script/list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDaemonTimerScriptsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TimerScript]])
                res.timer_scripts = out
        elif r.status_code == 400:
            pass

        return res

    
    def list_ipaliases(self, request: operations.ListIpaliasesRequest) -> operations.ListIpaliasesResponse:
        r"""Lists all the additional ipaliases configured for the agent.
        The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIpaliasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IPAlias]])
                res.ip_aliases = out
        elif r.status_code == 400:
            pass

        return res

    
    def list_timer_scripts(self, request: operations.ListTimerScriptsRequest) -> operations.ListTimerScriptsResponse:
        r"""List the timer scripts currently running along with the their intervals.
        The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/timer/script/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTimerScriptsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TimerScript]])
                res.timer_scripts = out
        elif r.status_code == 400:
            pass

        return res

    
    def mget_info(self, request: operations.MgetInfoRequest) -> operations.MgetInfoResponse:
        r"""Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
        Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/mget/{infoArray}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MgetInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.mget_info_200_application_json_objects = out
        elif r.status_code == 400:
            pass

        return res

    
    def mset_value(self, request: operations.MsetValueRequest) -> operations.MsetValueResponse:
        r"""Set multiple variables in the Value Space.
        This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/mset", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MsetValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.mset_value_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def munset_value(self, request: operations.MunsetValueRequest) -> operations.MunsetValueResponse:
        r"""Unset multiple variables in the Value Space
        This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/munset", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MunsetValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.munset_value_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def new(self, request: operations.NewRequest) -> operations.NewResponse:
        r"""Add an agent.
        Add an agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/add/{IP}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.new_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def pause_now(self, request: operations.PauseNowRequest) -> operations.PauseNowResponse:
        r"""Pause the current agent.
        Pause the current agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/pause", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PauseNowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.pause_now_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_coap_get_args(self, request: operations.ProtocolCoapGetArgsRequest) -> operations.ProtocolCoapGetArgsResponse:
        r"""Show the agent's COAP argument structure
        Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolCoapGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_coap_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_coap_get_config(self, request: operations.ProtocolCoapGetConfigRequest) -> operations.ProtocolCoapGetConfigResponse:
        r"""Show the agent's COAP configuration
        Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolCoapGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigCoap])
                res.config_coap = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_coap_get_statistics(self, request: operations.ProtocolCoapGetStatisticsRequest) -> operations.ProtocolCoapGetStatisticsResponse:
        r"""Show the agent's COAP statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolCoapGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_coap_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_coap_get_stats_hdr(self) -> operations.ProtocolCoapGetStatsHdrResponse:
        r"""Show the COAP statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/coap/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolCoapGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_coap_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_coap_get_trace(self, request: operations.ProtocolCoapGetTraceRequest) -> operations.ProtocolCoapGetTraceResponse:
        r"""Show the agent's COAP traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolCoapGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigCoap])
                res.config_coap = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_coap_set_config(self, request: operations.ProtocolCoapSetConfigRequest) -> operations.ProtocolCoapSetConfigResponse:
        r"""Set the agent's COAP configuration
        Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolCoapSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_coap_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_coap_set_trace(self, request: operations.ProtocolCoapSetTraceRequest) -> operations.ProtocolCoapSetTraceResponse:
        r"""Set the agent's COAP traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolCoapSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_coap_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_get_args(self, request: operations.ProtocolDhcpGetArgsRequest) -> operations.ProtocolDhcpGetArgsResponse:
        r"""Show the agent's DHCP argument structure
        Agent's DHCP configuration particulars
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_dhcp_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_get_config(self, request: operations.ProtocolDhcpGetConfigRequest) -> operations.ProtocolDhcpGetConfigResponse:
        r"""Show the agent's DHCP configuration
        Agent's DHCP configuration hwaddr,classid,add_options,script
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigDhcp])
                res.config_dhcp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_get_statistics(self, request: operations.ProtocolDhcpGetStatisticsRequest) -> operations.ProtocolDhcpGetStatisticsResponse:
        r"""Show the agent's DHCP statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_dhcp_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_get_stats_hdr(self) -> operations.ProtocolDhcpGetStatsHdrResponse:
        r"""Show the DHCP statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/dhcp/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_dhcp_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_get_trace(self, request: operations.ProtocolDhcpGetTraceRequest) -> operations.ProtocolDhcpGetTraceResponse:
        r"""Show the agent's DHCP traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigDhcp])
                res.config_dhcp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_params(self, request: operations.ProtocolDhcpParamsRequest) -> operations.ProtocolDhcpParamsResponse:
        r"""Show the parameters configured by the server in its DHCP-OFFER message
        DHCP-OFFER message parameters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/params", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpParamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.protocol_dhcp_params_200_application_json_objects = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_set_config(self, request: operations.ProtocolDhcpSetConfigRequest) -> operations.ProtocolDhcpSetConfigResponse:
        r"""Set the agent's DHCP configuration
        Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_dhcp_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_set_trace(self, request: operations.ProtocolDhcpSetTraceRequest) -> operations.ProtocolDhcpSetTraceResponse:
        r"""Set the agent's DHCP traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_dhcp_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_get_config(self, request: operations.ProtocolGetConfigRequest) -> operations.ProtocolGetConfigResponse:
        r"""Returns the protocol's configuration.
        Returns the protocol's configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/{prot}/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_get_config_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_args(self, request: operations.ProtocolIpmiGetArgsRequest) -> operations.ProtocolIpmiGetArgsResponse:
        r"""Show the agent's IPMI argument structure
        Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_ipmi_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_attr(self, request: operations.ProtocolIpmiGetAttrRequest) -> operations.ProtocolIpmiGetAttrResponse:
        r"""Show the outgoing message's attributes
        Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ipmi_get_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_config(self, request: operations.ProtocolIpmiGetConfigRequest) -> operations.ProtocolIpmiGetConfigResponse:
        r"""Show the agent's IPMI configuration
        Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigIpmi])
                res.config_ipmi = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_statistics(self, request: operations.ProtocolIpmiGetStatisticsRequest) -> operations.ProtocolIpmiGetStatisticsResponse:
        r"""Show the agent's IPMI statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_ipmi_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_stats_hdr(self) -> operations.ProtocolIpmiGetStatsHdrResponse:
        r"""Show the IPMI statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/ipmi/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_ipmi_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_trace(self, request: operations.ProtocolIpmiGetTraceRequest) -> operations.ProtocolIpmiGetTraceResponse:
        r"""Show the agent's IPMI traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigIpmi])
                res.config_ipmi = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_set_attr(self, request: operations.ProtocolIpmiSetAttrRequest) -> operations.ProtocolIpmiSetAttrResponse:
        r"""Set the outgoing message's attributes
        Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiSetAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ipmi_set_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_set_config(self, request: operations.ProtocolIpmiSetConfigRequest) -> operations.ProtocolIpmiSetConfigResponse:
        r"""Set the agent's IPMI configuration
        Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ipmi_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_set_trace(self, request: operations.ProtocolIpmiSetTraceRequest) -> operations.ProtocolIpmiSetTraceResponse:
        r"""Set the agent's IPMI traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ipmi_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_get_protstate(self, request: operations.ProtocolMqttClientGetProtstateRequest) -> operations.ProtocolMqttClientGetProtstateResponse:
        r"""Show the agent's MQTT TCP connection state
        0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientGetProtstateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_get_protstate_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_get_state(self, request: operations.ProtocolMqttClientGetStateRequest) -> operations.ProtocolMqttClientGetStateResponse:
        r"""Show the agent's MQTT state
        0 means stopped, 1 means running
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientGetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_get_state_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_message_card(self, request: operations.ProtocolMqttClientMessageCardRequest) -> operations.ProtocolMqttClientMessageCardResponse:
        r"""Show the agent's current messages' cardinality
        0 or more
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientMessageCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_message_card_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_message_get(self, request: operations.ProtocolMqttClientMessageGetRequest) -> operations.ProtocolMqttClientMessageGetResponse:
        r"""Show the agent's message attributes
        Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientMessageGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_mqtt_client_message_get_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_message_set(self, request: operations.ProtocolMqttClientMessageSetRequest) -> operations.ProtocolMqttClientMessageSetResponse:
        r"""Set the agent's message attributes
        Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientMessageSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_mqtt_client_message_set_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_resubscribe(self, request: operations.ProtocolMqttClientResubscribeRequest) -> operations.ProtocolMqttClientResubscribeResponse:
        r"""Restart receiving messages from a subcription of the agent
        Restarts a subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientResubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_mqtt_client_resubscribe_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_runtime_abort(self, request: operations.ProtocolMqttClientRuntimeAbortRequest) -> operations.ProtocolMqttClientRuntimeAbortResponse:
        r"""Abort agent's MQTT TCP session without sending DISCONNECT command
        Abort a connection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientRuntimeAbortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_mqtt_client_runtime_abort_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_runtime_connect(self, request: operations.ProtocolMqttClientRuntimeConnectRequest) -> operations.ProtocolMqttClientRuntimeConnectResponse:
        r"""Start agent's MQTT TCP session
        Start a connection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientRuntimeConnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_mqtt_client_runtime_connect_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_runtime_disconnect(self, request: operations.ProtocolMqttClientRuntimeDisconnectRequest) -> operations.ProtocolMqttClientRuntimeDisconnectResponse:
        r"""Disconnect agent's MQTT TCP session by sending DISCONNECT command
        Graceful disconnect
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientRuntimeDisconnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_mqtt_client_runtime_disconnect_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_broker(self, request: operations.ProtocolMqttClientSetBrokerRequest) -> operations.ProtocolMqttClientSetBrokerResponse:
        r"""Set the agent's MQTT TCP connection target broker
        Broker IP address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_broker_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_cleansession(self, request: operations.ProtocolMqttClientSetCleansessionRequest) -> operations.ProtocolMqttClientSetCleansessionResponse:
        r"""Set the agent's MQTT session
        1 for clean session , 0 not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetCleansessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_cleansession_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_clientid(self, request: operations.ProtocolMqttClientSetClientidRequest) -> operations.ProtocolMqttClientSetClientidResponse:
        r"""Set the agent's MQTT client ID
        MQTT client ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetClientidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_clientid_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_keepalive(self, request: operations.ProtocolMqttClientSetKeepaliveRequest) -> operations.ProtocolMqttClientSetKeepaliveResponse:
        r"""Set the agent's MQTT TCP keepalive
        Keep alive the TCP connection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetKeepaliveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_keepalive_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_on_disconnect(self, request: operations.ProtocolMqttClientSetOnDisconnectRequest) -> operations.ProtocolMqttClientSetOnDisconnectResponse:
        r"""Set the agent's MQTT disconnection action
        Action to take when MQTT session is disconnected
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetOnDisconnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_on_disconnect_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_password(self, request: operations.ProtocolMqttClientSetPasswordRequest) -> operations.ProtocolMqttClientSetPasswordResponse:
        r"""Set the agent's MQTT client password
        Client password
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_password_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_port(self, request: operations.ProtocolMqttClientSetPortRequest) -> operations.ProtocolMqttClientSetPortResponse:
        r"""Set the agent's MQTT TCP connection target port
        target TCP port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_port_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_username(self, request: operations.ProtocolMqttClientSetUsernameRequest) -> operations.ProtocolMqttClientSetUsernameResponse:
        r"""Set the agent's MQTT client username
        Client username
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_username_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_willmsg(self, request: operations.ProtocolMqttClientSetWillmsgRequest) -> operations.ProtocolMqttClientSetWillmsgResponse:
        r"""Set the agent's MQTT client's will
        Will message
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetWillmsgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_willmsg_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_willqos(self, request: operations.ProtocolMqttClientSetWillqosRequest) -> operations.ProtocolMqttClientSetWillqosResponse:
        r"""Set the agent's MQTT will message's QOS field
        QOS field
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetWillqosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_willqos_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_willretain(self, request: operations.ProtocolMqttClientSetWillretainRequest) -> operations.ProtocolMqttClientSetWillretainResponse:
        r"""Set the agent's MQTT retained will
        Retaining will
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetWillretainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_willretain_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_willtopic(self, request: operations.ProtocolMqttClientSetWilltopicRequest) -> operations.ProtocolMqttClientSetWilltopicResponse:
        r"""Set the agent's MQTT client will's topic
        Will topic for the will message
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetWilltopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_set_willtopic_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_subscribe_card(self, request: operations.ProtocolMqttClientSubscribeCardRequest) -> operations.ProtocolMqttClientSubscribeCardResponse:
        r"""Show the agent's current subscriptions' cardinality
        0 or more
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSubscribeCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_client_subscribe_card_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_subscribe_get(self, request: operations.ProtocolMqttClientSubscribeGetRequest) -> operations.ProtocolMqttClientSubscribeGetResponse:
        r"""Show the agent's subscription attributes
        Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSubscribeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_mqtt_client_subscribe_get_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_subscribe_set(self, request: operations.ProtocolMqttClientSubscribeSetRequest) -> operations.ProtocolMqttClientSubscribeSetResponse:
        r"""Set the agent's subscribe attributes
        Attribute can not be properties .
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSubscribeSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_mqtt_client_subscribe_set_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_unsubscribe(self, request: operations.ProtocolMqttClientUnsubscribeRequest) -> operations.ProtocolMqttClientUnsubscribeResponse:
        r"""Stops receiving messages from a subcription of the agent
        Stops a subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientUnsubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_mqtt_client_unsubscribe_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_args(self, request: operations.ProtocolMqttGetArgsRequest) -> operations.ProtocolMqttGetArgsResponse:
        r"""Show the agent's MQTT argument structure
        Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_mqtt_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_config(self, request: operations.ProtocolMqttGetConfigRequest) -> operations.ProtocolMqttGetConfigResponse:
        r"""Show the agent's MQTT configuration
        Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigMqtt])
                res.config_mqtt = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_statistics(self, request: operations.ProtocolMqttGetStatisticsRequest) -> operations.ProtocolMqttGetStatisticsResponse:
        r"""Show the agent's MQTT statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_mqtt_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_stats_hdr(self) -> operations.ProtocolMqttGetStatsHdrResponse:
        r"""Show the MQTT statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/mqtt/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_mqtt_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_trace(self, request: operations.ProtocolMqttGetTraceRequest) -> operations.ProtocolMqttGetTraceResponse:
        r"""Show the agent's MQTT traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigMqtt])
                res.config_mqtt = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_set_config(self, request: operations.ProtocolMqttSetConfigRequest) -> operations.ProtocolMqttSetConfigResponse:
        r"""Set the agent's MQTT configuration
        Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_mqtt_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_set_trace(self, request: operations.ProtocolMqttSetTraceRequest) -> operations.ProtocolMqttSetTraceResponse:
        r"""Set the agent's MQTT traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_mqtt_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_change_attr(self, request: operations.ProtocolNetflowChangeAttrRequest) -> operations.ProtocolNetflowChangeAttrResponse:
        r"""Change NETFLOW export attributes
        Change attributes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowChangeAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_change_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_change_dfs(self, request: operations.ProtocolNetflowChangeDfsRequest) -> operations.ProtocolNetflowChangeDfsResponse:
        r"""Change NETFLOW data export interval
        Interval in msec .
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowChangeDfsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_change_dfs_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_change_tfs(self, request: operations.ProtocolNetflowChangeTfsRequest) -> operations.ProtocolNetflowChangeTfsResponse:
        r"""Change NETFLOW template export interval
        Interval in msec .
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowChangeTfsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_change_tfs_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_args(self, request: operations.ProtocolNetflowGetArgsRequest) -> operations.ProtocolNetflowGetArgsResponse:
        r"""Show the agent's NETFLOW argument structure
        Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_netflow_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_config(self, request: operations.ProtocolNetflowGetConfigRequest) -> operations.ProtocolNetflowGetConfigResponse:
        r"""Show the agent's NETFLOW configuration
        Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigNetflow])
                res.config_netflow = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_statistics(self, request: operations.ProtocolNetflowGetStatisticsRequest) -> operations.ProtocolNetflowGetStatisticsResponse:
        r"""Show the agent's NETFLOW statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_netflow_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_stats_hdr(self) -> operations.ProtocolNetflowGetStatsHdrResponse:
        r"""Show the NETFLOW statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/netflow/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_netflow_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_trace(self, request: operations.ProtocolNetflowGetTraceRequest) -> operations.ProtocolNetflowGetTraceResponse:
        r"""Show the agent's NETFLOW traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigNetflow])
                res.config_netflow = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_halt(self, request: operations.ProtocolNetflowHaltRequest) -> operations.ProtocolNetflowHaltResponse:
        r"""Halt NETFLOW traffic
        Halt NETFLOW traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/halt", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowHaltResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_halt_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_list(self, request: operations.ProtocolNetflowListRequest) -> operations.ProtocolNetflowListResponse:
        r"""Show list of NETFLOW exports
        Show list of NETFLOW exports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.protocol_netflow_list_200_application_json_objects = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_reload(self, request: operations.ProtocolNetflowReloadRequest) -> operations.ProtocolNetflowReloadResponse:
        r"""Reload NETFLOW configuration before resuming traffic
        Reload NETFLOW configuration before resuming traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/reload", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowReloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_reload_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_resume(self, request: operations.ProtocolNetflowResumeRequest) -> operations.ProtocolNetflowResumeResponse:
        r"""Resuming traffic
        Resuming traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/resume", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_resume_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_set_collector(self, request: operations.ProtocolNetflowSetCollectorRequest) -> operations.ProtocolNetflowSetCollectorResponse:
        r"""Swap NETFLOW collector
        Allow changing collector without stopping agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetCollectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_set_collector_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_set_config(self, request: operations.ProtocolNetflowSetConfigRequest) -> operations.ProtocolNetflowSetConfigResponse:
        r"""Set the agent's NETFLOW configuration
        Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_set_file_name(self, request: operations.ProtocolNetflowSetFileNameRequest) -> operations.ProtocolNetflowSetFileNameResponse:
        r"""Swap NETFLOW configuration file
        Allow reloading the configuration file for an agent without stopping agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetFileNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_set_file_name_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_set_trace(self, request: operations.ProtocolNetflowSetTraceRequest) -> operations.ProtocolNetflowSetTraceResponse:
        r"""Set the agent's NETFLOW traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_get_args(self, request: operations.ProtocolProxyGetArgsRequest) -> operations.ProtocolProxyGetArgsResponse:
        r"""Show the agent's PROXY argument structure
        Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_proxy_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_get_config(self, request: operations.ProtocolProxyGetConfigRequest) -> operations.ProtocolProxyGetConfigResponse:
        r"""Show the agent's PROXY configuration
        Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigProxy])
                res.config_proxy = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_get_statistics(self, request: operations.ProtocolProxyGetStatisticsRequest) -> operations.ProtocolProxyGetStatisticsResponse:
        r"""Show the agent's PROXY statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_proxy_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_get_stats_hdr(self) -> operations.ProtocolProxyGetStatsHdrResponse:
        r"""Show the PROXY statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/proxy/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_proxy_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_get_trace(self, request: operations.ProtocolProxyGetTraceRequest) -> operations.ProtocolProxyGetTraceResponse:
        r"""Show the agent's PROXY traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigProxy])
                res.config_proxy = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_add(self, request: operations.ProtocolProxyPortAddRequest) -> operations.ProtocolProxyPortAddResponse:
        r"""Add individual proxy target on the agent and the simulator host
        Additional proxy target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_isstarted(self, request: operations.ProtocolProxyPortIsstartedRequest) -> operations.ProtocolProxyPortIsstartedResponse:
        r"""Check individual target
        Check individual target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortIsstartedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_isstarted_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_list(self, request: operations.ProtocolProxyPortListRequest) -> operations.ProtocolProxyPortListResponse:
        r"""List all proxy targets
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_proxy_port_list_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_remove(self, request: operations.ProtocolProxyPortRemoveRequest) -> operations.ProtocolProxyPortRemoveResponse:
        r"""Remove individual proxy target on the agent and the simulator host
        Remove proxy target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_remove_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_start(self, request: operations.ProtocolProxyPortStartRequest) -> operations.ProtocolProxyPortStartResponse:
        r"""Start additional target
        Start additional target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_start_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_stop(self, request: operations.ProtocolProxyPortStopRequest) -> operations.ProtocolProxyPortStopResponse:
        r"""Stop additional target
        Stop additional target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_stop_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_set_config(self, request: operations.ProtocolProxySetConfigRequest) -> operations.ProtocolProxySetConfigResponse:
        r"""Set the agent's PROXY configuration
        Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxySetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_set_trace(self, request: operations.ProtocolProxySetTraceRequest) -> operations.ProtocolProxySetTraceResponse:
        r"""Set the agent's PROXY traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxySetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_get_args(self, request: operations.ProtocolSflowGetArgsRequest) -> operations.ProtocolSflowGetArgsResponse:
        r"""Show the agent's SFLOW argument structure
        Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_sflow_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_get_config(self, request: operations.ProtocolSflowGetConfigRequest) -> operations.ProtocolSflowGetConfigResponse:
        r"""Show the agent's SFLOW configuration
        Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSflow])
                res.config_sflow = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_get_statistics(self, request: operations.ProtocolSflowGetStatisticsRequest) -> operations.ProtocolSflowGetStatisticsResponse:
        r"""Show the agent's SFLOW statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_sflow_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_get_stats_hdr(self) -> operations.ProtocolSflowGetStatsHdrResponse:
        r"""Show the SFLOW statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/sflow/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_sflow_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_get_trace(self, request: operations.ProtocolSflowGetTraceRequest) -> operations.ProtocolSflowGetTraceResponse:
        r"""Show the agent's SFLOW traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSflow])
                res.config_sflow = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_halt(self, request: operations.ProtocolSflowHaltRequest) -> operations.ProtocolSflowHaltResponse:
        r"""Halt SFLOW traffic
        Halt SFLOW traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/halt", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowHaltResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_halt_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_reload(self, request: operations.ProtocolSflowReloadRequest) -> operations.ProtocolSflowReloadResponse:
        r"""Reload SFLOW configuration before resuming traffic
        Reload SFLOW configuration before resuming traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/reload", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowReloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_reload_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_resume(self, request: operations.ProtocolSflowResumeRequest) -> operations.ProtocolSflowResumeResponse:
        r"""Resuming traffic
        Resuming traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/resume", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_resume_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_set_config(self, request: operations.ProtocolSflowSetConfigRequest) -> operations.ProtocolSflowSetConfigResponse:
        r"""Set the agent's SFLOW configuration
        Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_set_trace(self, request: operations.ProtocolSflowSetTraceRequest) -> operations.ProtocolSflowSetTraceResponse:
        r"""Set the agent's SFLOW traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_get_args(self, request: operations.ProtocolSnmptcpGetArgsRequest) -> operations.ProtocolSnmptcpGetArgsResponse:
        r"""Show the agent's SNMPTCP argument structure
        Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_snmptcp_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_get_config(self, request: operations.ProtocolSnmptcpGetConfigRequest) -> operations.ProtocolSnmptcpGetConfigResponse:
        r"""Show the agent's SNMPTCP configuration
        Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSnmptcp])
                res.config_snmptcp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_get_statistics(self, request: operations.ProtocolSnmptcpGetStatisticsRequest) -> operations.ProtocolSnmptcpGetStatisticsResponse:
        r"""Show the agent's SNMPTCP statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_snmptcp_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_get_stats_hdr(self) -> operations.ProtocolSnmptcpGetStatsHdrResponse:
        r"""Show the SNMPTCP statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/snmptcp/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_snmptcp_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_get_trace(self, request: operations.ProtocolSnmptcpGetTraceRequest) -> operations.ProtocolSnmptcpGetTraceResponse:
        r"""Show the agent's SNMPTCP traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSnmptcp])
                res.config_snmptcp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_ipalias_disable(self, request: operations.ProtocolSnmptcpIpaliasDisableRequest) -> operations.ProtocolSnmptcpIpaliasDisableResponse:
        r"""Disable individual IP aliases on the agent and the simulator host
        By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_ipalias_disable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_ipalias_enable(self, request: operations.ProtocolSnmptcpIpaliasEnableRequest) -> operations.ProtocolSnmptcpIpaliasEnableResponse:
        r"""Enable individual IP aliases on the agent and the simulator host
        By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_ipalias_enable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_ipalias_isenabled(self, request: operations.ProtocolSnmptcpIpaliasIsenabledRequest) -> operations.ProtocolSnmptcpIpaliasIsenabledResponse:
        r"""Check individual IP aliases on the agent and the simulator host
        By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasIsenabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_ipalias_isenabled_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_ipalias_list(self, request: operations.ProtocolSnmptcpIpaliasListRequest) -> operations.ProtocolSnmptcpIpaliasListResponse:
        r"""List all IP aliases on the agent and the simulator host
        By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IPAlias]])
                res.ip_aliases = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_set_config(self, request: operations.ProtocolSnmptcpSetConfigRequest) -> operations.ProtocolSnmptcpSetConfigResponse:
        r"""Set the agent's SNMPTCP configuration
        Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_set_trace(self, request: operations.ProtocolSnmptcpSetTraceRequest) -> operations.ProtocolSnmptcpSetTraceResponse:
        r"""Set the agent's SNMPTCP traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_access_add(self, request: operations.ProtocolSnmpv3AccessAddRequest) -> operations.ProtocolSnmpv3AccessAddResponse:
        r"""Adds a new access entry with the specified parameters.
        Adds a new access entry with the specified parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_access_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_access_clear(self, request: operations.ProtocolSnmpv3AccessClearRequest) -> operations.ProtocolSnmpv3AccessClearResponse:
        r"""Clears all access entries.
        Clears all access entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_access_clear_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_access_del(self, request: operations.ProtocolSnmpv3AccessDelRequest) -> operations.ProtocolSnmpv3AccessDelResponse:
        r"""Deletes the specified access entry.
        Deletes the specified access entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_access_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_access_list(self, request: operations.ProtocolSnmpv3AccessListRequest) -> operations.ProtocolSnmpv3AccessListResponse:
        r"""Returns the current acccess entries as an array of strings.
        Returns the current acccess entries as an array of strings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_snmpv3_access_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_config(self, request: operations.ProtocolSnmpv3GetConfigRequest) -> operations.ProtocolSnmpv3GetConfigResponse:
        r"""Returns the SNMPv3 configuration.
        Returns the SNMPv3 configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSnmPv3])
                res.config_snm_pv3 = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_context_engineid(self, request: operations.ProtocolSnmpv3GetContextEngineidRequest) -> operations.ProtocolSnmpv3GetContextEngineidResponse:
        r"""Retrieves the contextEngineID for the agent instance.
        Retrieves the contextEngineID for the agent instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetContextEngineidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_get_context_engineid_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_engineboots(self, request: operations.ProtocolSnmpv3GetEnginebootsRequest) -> operations.ProtocolSnmpv3GetEnginebootsResponse:
        r"""Retrieves the number of times the agent has been restarted.
        Retrieves the number of times the agent has been restarted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetEnginebootsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.protocol_snmpv3_get_engineboots_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_engineid(self, request: operations.ProtocolSnmpv3GetEngineidRequest) -> operations.ProtocolSnmpv3GetEngineidResponse:
        r"""For started agents, retrieves the current engineID in use by the snmpv3 module.
        For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetEngineidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_get_engineid_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_enginetime(self, request: operations.ProtocolSnmpv3GetEnginetimeRequest) -> operations.ProtocolSnmpv3GetEnginetimeResponse:
        r"""Retrieves the time in seconds for which the agent has been running.
        Retrieves the time in seconds for which the agent has been running.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetEnginetimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.protocol_snmpv3_get_enginetime_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_group_add(self, request: operations.ProtocolSnmpv3GroupAddRequest) -> operations.ProtocolSnmpv3GroupAddResponse:
        r"""Adds a new group entry with the specified parameters.
        Adds a new group entry with the specified parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_group_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_group_clear(self, request: operations.ProtocolSnmpv3GroupClearRequest) -> operations.ProtocolSnmpv3GroupClearResponse:
        r"""Clears all group entries.
        Clears all group entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_group_clear_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_group_del(self, request: operations.ProtocolSnmpv3GroupDelRequest) -> operations.ProtocolSnmpv3GroupDelResponse:
        r"""Deletes the specified group entry.
        Deletes the specified group entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_group_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_group_list(self, request: operations.ProtocolSnmpv3GroupListRequest) -> operations.ProtocolSnmpv3GroupListResponse:
        r"""Returns the current group entries as an array of strings.
        Returns the current group entries as an array of strings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_snmpv3_group_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_set_config(self, request: operations.ProtocolSnmpv3SetConfigRequest) -> operations.ProtocolSnmpv3SetConfigResponse:
        r"""Changes the SNMPv3 configuration.
        Changes the SNMPv3 configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3SetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_user_add(self, request: operations.ProtocolSnmpv3UserAddRequest) -> operations.ProtocolSnmpv3UserAddResponse:
        r"""Adds a new user entry with the specified parameters.
        Adds a new user entry with the specified parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_user_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_user_clear(self, request: operations.ProtocolSnmpv3UserClearRequest) -> operations.ProtocolSnmpv3UserClearResponse:
        r"""Clears all user entries.
        Clears all user entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_user_clear_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_user_del(self, request: operations.ProtocolSnmpv3UserDelRequest) -> operations.ProtocolSnmpv3UserDelResponse:
        r"""Deletes the specified user entry.
        Deletes the specified user entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_user_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_user_list(self, request: operations.ProtocolSnmpv3UserListRequest) -> operations.ProtocolSnmpv3UserListResponse:
        r"""Returns the current user entries as a Tcl list.
        Returns the current user entries as a Tcl list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_snmpv3_user_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_usm_save(self, request: operations.ProtocolSnmpv3UsmSaveRequest) -> operations.ProtocolSnmpv3UsmSaveResponse:
        r"""Saves current user settings in the currently loaded USM config file.
        Saves current user settings in the currently loaded USM config file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UsmSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_snmpv3_usm_save_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_usm_saveas(self, request: operations.ProtocolSnmpv3UsmSaveasRequest) -> operations.ProtocolSnmpv3UsmSaveasResponse:
        r"""Saves current user settings in the specified USM config file.
        Saves current user settings in the specified USM config file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UsmSaveasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_snmpv3_usm_saveas_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_vacm_save(self, request: operations.ProtocolSnmpv3VacmSaveRequest) -> operations.ProtocolSnmpv3VacmSaveResponse:
        r"""Saves current group, access, view settings in the currently loaded VACM config file.
        Saves current group, access, view settings in the currently loaded VACM config file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3VacmSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_snmpv3_vacm_save_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_vacm_saveas(self, request: operations.ProtocolSnmpv3VacmSaveasRequest) -> operations.ProtocolSnmpv3VacmSaveasResponse:
        r"""Saves current group, access, view settings in the specified VACM config file.
        Saves current group, access, view settings in the specified VACM config file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3VacmSaveasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_snmpv3_vacm_saveas_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_view_add(self, request: operations.ProtocolSnmpv3ViewAddRequest) -> operations.ProtocolSnmpv3ViewAddResponse:
        r"""Adds a new view entry with the specified parameters.
        Adds a new view entry with the specified parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_view_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_view_clear(self, request: operations.ProtocolSnmpv3ViewClearRequest) -> operations.ProtocolSnmpv3ViewClearResponse:
        r"""Clears all view entries.
        Clears all view entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_view_clear_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_view_del(self, request: operations.ProtocolSnmpv3ViewDelRequest) -> operations.ProtocolSnmpv3ViewDelResponse:
        r"""Deletes the specified view entry.
        Deletes the specified view entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_view_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_view_list(self, request: operations.ProtocolSnmpv3ViewListRequest) -> operations.ProtocolSnmpv3ViewListResponse:
        r"""Returns the current view entries as an array of strings.
        Returns the current view entries as an array of strings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_snmpv3_view_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_get_args(self, request: operations.ProtocolSSHGetArgsRequest) -> operations.ProtocolSSHGetArgsResponse:
        r"""Show the agent's SSH argument structure
        Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_ssh_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_get_config(self, request: operations.ProtocolSSHGetConfigRequest) -> operations.ProtocolSSHGetConfigResponse:
        r"""Show the agent's SSH configuration
        Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSSH])
                res.config_ssh = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_get_statistics(self, request: operations.ProtocolSSHGetStatisticsRequest) -> operations.ProtocolSSHGetStatisticsResponse:
        r"""Show the agent's SSH statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_ssh_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_get_stats_hdr(self) -> operations.ProtocolSSHGetStatsHdrResponse:
        r"""Show the SSH statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/ssh/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_ssh_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_get_trace(self, request: operations.ProtocolSSHGetTraceRequest) -> operations.ProtocolSSHGetTraceResponse:
        r"""Show the agent's SSH traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSSH])
                res.config_ssh = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_ipalias_disable(self, request: operations.ProtocolSSHIpaliasDisableRequest) -> operations.ProtocolSSHIpaliasDisableResponse:
        r"""Disable individual IP aliases on the agent and the simulator host
        By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHIpaliasDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ssh_ipalias_disable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_ipalias_enable(self, request: operations.ProtocolSSHIpaliasEnableRequest) -> operations.ProtocolSSHIpaliasEnableResponse:
        r"""Enable individual IP aliases on the agent and the simulator host
        By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHIpaliasEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ssh_ipalias_enable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_ipalias_isenabled(self, request: operations.ProtocolSSHIpaliasIsenabledRequest) -> operations.ProtocolSSHIpaliasIsenabledResponse:
        r"""Check individual IP aliases on the agent and the simulator host
        By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHIpaliasIsenabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ssh_ipalias_isenabled_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_ipalias_list(self, request: operations.ProtocolSSHIpaliasListRequest) -> operations.ProtocolSSHIpaliasListResponse:
        r"""List all IP aliases on the agent and the simulator host
        By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHIpaliasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IPAlias]])
                res.ip_aliases = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_set_config(self, request: operations.ProtocolSSHSetConfigRequest) -> operations.ProtocolSSHSetConfigResponse:
        r"""Set the agent's SSH configuration
        Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ssh_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ssh_set_trace(self, request: operations.ProtocolSSHSetTraceRequest) -> operations.ProtocolSSHSetTraceResponse:
        r"""Set the agent's SSH traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ssh_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_args(self, request: operations.ProtocolSyslogGetArgsRequest) -> operations.ProtocolSyslogGetArgsResponse:
        r"""Show the agent's SYSLOG argument structure
        Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_syslog_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_attr(self, request: operations.ProtocolSyslogGetAttrRequest) -> operations.ProtocolSyslogGetAttrResponse:
        r"""Show the outgoing message's attributes
        Attribute can be server , sequence , separator , hostname , timestamp
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_get_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_config(self, request: operations.ProtocolSyslogGetConfigRequest) -> operations.ProtocolSyslogGetConfigResponse:
        r"""Show the agent's SYSLOG configuration
        Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSyslog])
                res.config_syslog = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_statistics(self, request: operations.ProtocolSyslogGetStatisticsRequest) -> operations.ProtocolSyslogGetStatisticsResponse:
        r"""Show the agent's SYSLOG statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_syslog_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_stats_hdr(self) -> operations.ProtocolSyslogGetStatsHdrResponse:
        r"""Show the SYSLOG statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/syslog/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_syslog_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_trace(self, request: operations.ProtocolSyslogGetTraceRequest) -> operations.ProtocolSyslogGetTraceResponse:
        r"""Show the agent's SYSLOG traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSyslog])
                res.config_syslog = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_send(self, request: operations.ProtocolSyslogSendRequest) -> operations.ProtocolSyslogSendResponse:
        r"""Set the agent's SYSLOG traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_send_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_set_attr(self, request: operations.ProtocolSyslogSetAttrRequest) -> operations.ProtocolSyslogSetAttrResponse:
        r"""Set the outgoing message's attributes
        Attribute can be server , sequence , separator , hostname , timestamp
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSetAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_set_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_set_config(self, request: operations.ProtocolSyslogSetConfigRequest) -> operations.ProtocolSyslogSetConfigResponse:
        r"""Set the agent's SYSLOG configuration
        Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_set_trace(self, request: operations.ProtocolSyslogSetTraceRequest) -> operations.ProtocolSyslogSetTraceResponse:
        r"""Set the agent's SYSLOG traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_connection_logon(self, request: operations.ProtocolTelnetConnectionLogonRequest) -> operations.ProtocolTelnetConnectionLogonResponse:
        r"""Changes the connection's current logon.
        Logon change allows (hidden) commands for a different access mode to run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetConnectionLogonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_telnet_connection_logon_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_connection_request(self, request: operations.ProtocolTelnetConnectionRequestRequest) -> operations.ProtocolTelnetConnectionRequestResponse:
        r"""Executes the command asynchronously .
        Equivalent of the command typed in by the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetConnectionRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_telnet_connection_request_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_connection_signal(self, request: operations.ProtocolTelnetConnectionSignalRequest) -> operations.ProtocolTelnetConnectionSignalResponse:
        r"""Triggers the asynchronous signal event with the specified signal name
        Signal name is either connect or idle
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetConnectionSignalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_telnet_connection_signal_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_args(self, request: operations.ProtocolTelnetGetArgsRequest) -> operations.ProtocolTelnetGetArgsResponse:
        r"""Show the agent's TELNET argument structure
        Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_telnet_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_config(self, request: operations.ProtocolTelnetGetConfigRequest) -> operations.ProtocolTelnetGetConfigResponse:
        r"""Show the agent's TELNET configuration
        Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTelnet])
                res.config_telnet = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_statistics(self, request: operations.ProtocolTelnetGetStatisticsRequest) -> operations.ProtocolTelnetGetStatisticsResponse:
        r"""Show the agent's TELNET statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_telnet_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_stats_hdr(self) -> operations.ProtocolTelnetGetStatsHdrResponse:
        r"""Show the TELNET statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/telnet/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_telnet_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_trace(self, request: operations.ProtocolTelnetGetTraceRequest) -> operations.ProtocolTelnetGetTraceResponse:
        r"""Show the agent's TELNET traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTelnet])
                res.config_telnet = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_ipalias_disable(self, request: operations.ProtocolTelnetIpaliasDisableRequest) -> operations.ProtocolTelnetIpaliasDisableResponse:
        r"""Disable individual IP aliases on the agent and the simulator host
        By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_ipalias_disable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_ipalias_enable(self, request: operations.ProtocolTelnetIpaliasEnableRequest) -> operations.ProtocolTelnetIpaliasEnableResponse:
        r"""Enable individual IP aliases on the agent and the simulator host
        By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_ipalias_enable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_ipalias_isenabled(self, request: operations.ProtocolTelnetIpaliasIsenabledRequest) -> operations.ProtocolTelnetIpaliasIsenabledResponse:
        r"""Check individual IP aliases on the agent and the simulator host
        By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasIsenabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_ipalias_isenabled_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_ipalias_list(self, request: operations.ProtocolTelnetIpaliasListRequest) -> operations.ProtocolTelnetIpaliasListResponse:
        r"""List all IP aliases on the agent and the simulator host
        By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IPAlias]])
                res.ip_aliases = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_connections(self, request: operations.ProtocolTelnetServerGetConnectionsRequest) -> operations.ProtocolTelnetServerGetConnectionsResponse:
        r"""Show the agent's TELNET connections
        IDs of all connected connections
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_telnet_server_get_connections_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_keymap(self, request: operations.ProtocolTelnetServerGetKeymapRequest) -> operations.ProtocolTelnetServerGetKeymapResponse:
        r"""Show the agent's TELNET keymap file name
        Keymap file name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetKeymapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_telnet_server_get_keymap_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_rulesdb(self, request: operations.ProtocolTelnetServerGetRulesdbRequest) -> operations.ProtocolTelnetServerGetRulesdbResponse:
        r"""Show the agent's TELNET rules db file name
        Rules db file name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetRulesdbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_telnet_server_get_rulesdb_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_state(self, request: operations.ProtocolTelnetServerGetStateRequest) -> operations.ProtocolTelnetServerGetStateResponse:
        r"""Show the agent's TELNET server state
        Return 1 means accepting connections, 0 not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_telnet_server_get_state_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_userdb(self, request: operations.ProtocolTelnetServerGetUserdbRequest) -> operations.ProtocolTelnetServerGetUserdbResponse:
        r"""Show the agent's TELNET user db file name
        User db file name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetUserdbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_telnet_server_get_userdb_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_users(self, request: operations.ProtocolTelnetServerGetUsersRequest) -> operations.ProtocolTelnetServerGetUsersResponse:
        r"""Show the agent's TELNET users
        List of users
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TelnetUser]])
                res.telnet_users = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_set_config(self, request: operations.ProtocolTelnetSetConfigRequest) -> operations.ProtocolTelnetSetConfigResponse:
        r"""Set the agent's TELNET configuration
        Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_set_trace(self, request: operations.ProtocolTelnetSetTraceRequest) -> operations.ProtocolTelnetSetTraceResponse:
        r"""Set the agent's TELNET traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_get_args(self, request: operations.ProtocolTftpGetArgsRequest) -> operations.ProtocolTftpGetArgsResponse:
        r"""Show the agent's TFTP argument structure
        Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_tftp_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_get_config(self, request: operations.ProtocolTftpGetConfigRequest) -> operations.ProtocolTftpGetConfigResponse:
        r"""Show the agent's TFTP configuration
        Agent's TFTP configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTftp])
                res.config_tftp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_get_statistics(self, request: operations.ProtocolTftpGetStatisticsRequest) -> operations.ProtocolTftpGetStatisticsResponse:
        r"""Show the agent's TFTP statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_tftp_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_get_stats_hdr(self) -> operations.ProtocolTftpGetStatsHdrResponse:
        r"""Show the TFTP statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/tftp/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_tftp_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_get_trace(self, request: operations.ProtocolTftpGetTraceRequest) -> operations.ProtocolTftpGetTraceResponse:
        r"""Show the agent's TFTP traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTftp])
                res.config_tftp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_get_parameter(self, request: operations.ProtocolTftpSessionGetParameterRequest) -> operations.ProtocolTftpSessionGetParameterResponse:
        r"""Show a parameter of a TFTP sesssion
        Parameter is server , port , or dstfile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionGetParameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_get_parameter_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_read(self, request: operations.ProtocolTftpSessionReadRequest) -> operations.ProtocolTftpSessionReadResponse:
        r"""Create a read session to download srcfile from server
        Session ID is returned
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_tftp_session_read_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_set_parameter(self, request: operations.ProtocolTftpSessionSetParameterRequest) -> operations.ProtocolTftpSessionSetParameterResponse:
        r"""Set a parameter of a TFTP sesssion
        Parameter is server , port , or dstfile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionSetParameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_set_parameter_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_start(self, request: operations.ProtocolTftpSessionStartRequest) -> operations.ProtocolTftpSessionStartResponse:
        r"""Start a TFTP sesssion
        Start uploading or downloading the file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_start_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_status(self, request: operations.ProtocolTftpSessionStatusRequest) -> operations.ProtocolTftpSessionStatusResponse:
        r"""Check a TFTP sesssion's status
        Status includes running state, bytes transfered, and time elapsed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_status_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_stop(self, request: operations.ProtocolTftpSessionStopRequest) -> operations.ProtocolTftpSessionStopResponse:
        r"""Stop a TFTP sesssion
        Stop uploading or downloading the file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_stop_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_write(self, request: operations.ProtocolTftpSessionWriteRequest) -> operations.ProtocolTftpSessionWriteResponse:
        r"""Create a read session to upload srcfile to server
        Session ID is returned
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionWriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_tftp_session_write_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_set_config(self, request: operations.ProtocolTftpSetConfigRequest) -> operations.ProtocolTftpSetConfigResponse:
        r"""Set the agent's TFTP configuration
        Agent's TFTP configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_set_trace(self, request: operations.ProtocolTftpSetTraceRequest) -> operations.ProtocolTftpSetTraceResponse:
        r"""Set the agent's TFTP traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_get_args(self, request: operations.ProtocolTodGetArgsRequest) -> operations.ProtocolTodGetArgsResponse:
        r"""Show the agent's TOD argument structure
        Agent's TOD configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_tod_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_get_config(self, request: operations.ProtocolTodGetConfigRequest) -> operations.ProtocolTodGetConfigResponse:
        r"""Show the agent's TOD configuration
        Agent's TOD configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTod])
                res.config_tod = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_get_statistics(self, request: operations.ProtocolTodGetStatisticsRequest) -> operations.ProtocolTodGetStatisticsResponse:
        r"""Show the agent's TOD statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_tod_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_get_stats_hdr(self) -> operations.ProtocolTodGetStatsHdrResponse:
        r"""Show the TOD statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/tod/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_tod_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_get_trace(self, request: operations.ProtocolTodGetTraceRequest) -> operations.ProtocolTodGetTraceResponse:
        r"""Show the agent's TOD traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTod])
                res.config_tod = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_gettime(self, request: operations.ProtocolTodGettimeRequest) -> operations.ProtocolTodGettimeResponse:
        r"""Retrieve TOD time
        Retrive time from server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGettimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_tod_gettime_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_set_config(self, request: operations.ProtocolTodSetConfigRequest) -> operations.ProtocolTodSetConfigResponse:
        r"""Set the agent's TOD configuration
        Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tod_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_set_trace(self, request: operations.ProtocolTodSetTraceRequest) -> operations.ProtocolTodSetTraceResponse:
        r"""Set the agent's TOD traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tod_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_get_args(self, request: operations.ProtocolWebGetArgsRequest) -> operations.ProtocolWebGetArgsResponse:
        r"""Show the agent's WEB argument structure
        Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_web_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_get_config(self, request: operations.ProtocolWebGetConfigRequest) -> operations.ProtocolWebGetConfigResponse:
        r"""Show the agent's WEB configuration
        Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigWeb])
                res.config_web = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_get_statistics(self, request: operations.ProtocolWebGetStatisticsRequest) -> operations.ProtocolWebGetStatisticsResponse:
        r"""Show the agent's WEB statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.protocol_web_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_get_stats_hdr(self) -> operations.ProtocolWebGetStatsHdrResponse:
        r"""Show the WEB statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/web/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_web_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_get_trace(self, request: operations.ProtocolWebGetTraceRequest) -> operations.ProtocolWebGetTraceResponse:
        r"""Show the agent's WEB traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigWeb])
                res.config_web = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_add(self, request: operations.ProtocolWebPortAddRequest) -> operations.ProtocolWebPortAddResponse:
        r"""Add the agent's WEB port
        Add port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_exists(self, request: operations.ProtocolWebPortExistsRequest) -> operations.ProtocolWebPortExistsResponse:
        r"""Show the agent's WEB port
        Check the port. 1 means existing, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.protocol_web_port_exists_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_remove(self, request: operations.ProtocolWebPortRemoveRequest) -> operations.ProtocolWebPortRemoveResponse:
        r"""Remove the agent's WEB port
        Remove port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_remove_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_set(self, request: operations.ProtocolWebPortSetRequest) -> operations.ProtocolWebPortSetResponse:
        r"""Set the agent's WEB port attribute
        Set port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_set_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_start(self, request: operations.ProtocolWebPortStartRequest) -> operations.ProtocolWebPortStartResponse:
        r"""Start the agent's WEB port
        Start port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_start_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_stop(self, request: operations.ProtocolWebPortStopRequest) -> operations.ProtocolWebPortStopResponse:
        r"""Stop the agent's WEB port
        Stop port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_stop_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_set_config(self, request: operations.ProtocolWebSetConfigRequest) -> operations.ProtocolWebSetConfigResponse:
        r"""Set the agent's WEB configuration
        Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_set_trace(self, request: operations.ProtocolWebSetTraceRequest) -> operations.ProtocolWebSetTraceResponse:
        r"""Set the agent's WEB traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def reload(self, request: operations.ReloadRequest) -> operations.ReloadResponse:
        r"""Reload the current agent.
        This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/reload", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.reload_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def remove(self, request: operations.RemoveRequest) -> operations.RemoveResponse:
        r"""Remove an entry from a table.
        The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/remove/{object}/{instance}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.remove_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def resume(self, request: operations.ResumeRequest) -> operations.ResumeResponse:
        r"""Resume the current agent.
        Resume the current agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/resume", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.resume_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def save(self, request: operations.SaveRequest) -> operations.SaveResponse:
        r"""Save agent MIB values.
        Save agent MIB values.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/save", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.save_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_delay(self, request: operations.SetDelayRequest) -> operations.SetDelayResponse:
        r"""one-way transit delay in msec
        The minimum granularity is 10 msec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/delay/{delay}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_delay_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_drops(self, request: operations.SetDropsRequest) -> operations.SetDropsResponse:
        r"""drop rate (every N-th PDU)
        0 means no drops
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/drops/{drops}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetDropsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_drops_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_host(self, request: operations.SetHostRequest) -> operations.SetHostResponse:
        r"""host address of the agent.
        Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/host/{host}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_host_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_inform_timeout(self, request: operations.SetInformTimeoutRequest) -> operations.SetInformTimeoutResponse:
        r"""timeout in seconds for retransmitting INFORM PDUs
        The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetInformTimeoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_inform_timeout_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_interface(self, request: operations.SetInterfaceRequest) -> operations.SetInterfaceResponse:
        r"""network interface card for the agent
        network interface card for the agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/interface/{interface}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_interface_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_log(self, request: operations.SetLogRequest) -> operations.SetLogResponse:
        r"""The current log file for the Simulator.
        The current log file for the Simulator.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/set/log"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_log_200_application_json_string = r.content

        return res

    
    def set_mask(self, request: operations.SetMaskRequest) -> operations.SetMaskResponse:
        r"""subnet mask of the agent.
        subnet mask of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/mask/{mask}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetMaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_mask_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_mibs(self, request: operations.SetMibsRequest) -> operations.SetMibsResponse:
        r"""set of MIBs, simulations and scenarios
        set of MIBs, simulations and scenarios
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/mibs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetMibsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_mibs_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_netdev(self) -> operations.SetNetdevResponse:
        r"""The network address of the host where the MIMIC simulator is running.
        The network address of the host where the MIMIC simulator is running.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/set/netdev"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetNetdevResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.set_netdev_200_application_json_object = out

        return res

    
    def set_oiddir(self, request: operations.SetOiddirRequest) -> operations.SetOiddirResponse:
        r"""MIB directory of the agent.
        MIB directory of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/oiddir/{oiddir}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetOiddirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_oiddir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_owner(self, request: operations.SetOwnerRequest) -> operations.SetOwnerResponse:
        r"""owner of the agent
        owner of the agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/owner/{owner}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_owner_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_pdusize(self, request: operations.SetPdusizeRequest) -> operations.SetPdusizeResponse:
        r"""maximum PDU size
        The limit for this configurable is 65536
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/pdusize/{pdusize}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPdusizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_pdusize_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_port(self, request: operations.SetPortRequest) -> operations.SetPortResponse:
        r"""port number
        port number
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/port/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_port_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_privdir(self, request: operations.SetPrivdirRequest) -> operations.SetPrivdirResponse:
        r"""private directory of the agent.
        private directory of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/privdir/{privdir}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPrivdirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_privdir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_protocols(self, request: operations.SetProtocolsRequest) -> operations.SetProtocolsResponse:
        r"""protocols supported by agent as a comma-separated list
        protocols supported by agent as a comma-separated list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/protocol", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetProtocolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.set_protocols_200_application_json_string_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_read_community(self, request: operations.SetReadCommunityRequest) -> operations.SetReadCommunityResponse:
        r"""read community string
        read community string
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/read/{read}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetReadCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_read_community_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_starttime(self, request: operations.SetStarttimeRequest) -> operations.SetStarttimeResponse:
        r"""relative start time
        relative start time
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/start/{start}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetStarttimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_starttime_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_state(self, request: operations.SetStateRequest) -> operations.SetStateResponse:
        r"""Set the state of a MIB object object
        To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/state/set/{object}/{state}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_state_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_trace(self, request: operations.SetTraceRequest) -> operations.SetTraceResponse:
        r"""SNMP PDU tracing
        SNMP PDU tracing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/trace/{trace}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_trace_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_validate(self, request: operations.SetValidateRequest) -> operations.SetValidateResponse:
        r"""SNMP SET validation policy
        Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/validate/{validate}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_validate_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_value(self, request: operations.SetValueRequest) -> operations.SetValueResponse:
        r"""Set a variable in the Value Space.
        NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. \"\\x 01 23 45\". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - \"1\", \"2c\", \"2\" and \"3\". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_value_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_write_community(self, request: operations.SetWriteCommunityRequest) -> operations.SetWriteCommunityResponse:
        r"""write community string
        write community string
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/write/{write}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetWriteCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_write_community_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def split_oid(self, request: operations.SplitOidRequest) -> operations.SplitOidResponse:
        r"""Split the numerical OID into the object OID and instance OID.
        This is useful if you have an OID which is a combination of object and instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/split/{OID}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SplitOidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.split_oid_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def start(self, request: operations.StartRequest) -> operations.StartResponse:
        r"""Start the current agent.
        For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/start", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.start_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def start_all_agents(self) -> operations.StartAllAgentsResponse:
        r"""Start MIMIC.
        Start MIMIC.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/start"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartAllAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.start_all_agents_200_application_json_object = out

        return res

    
    def start_ipalias(self, request: operations.StartIpaliasRequest) -> operations.StartIpaliasResponse:
        r"""Starts an existing ipalias for the agent.
        port defaults to 161 if not specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/start/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.start_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def status_ipalias(self, request: operations.StatusIpaliasRequest) -> operations.StatusIpaliasResponse:
        r"""Returns the status (0=down, 1=up) of an existing ipalias for the agent.
        port defaults to 161 if not specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/status/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.status_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def stop(self, request: operations.StopRequest) -> operations.StopResponse:
        r"""Show the agent's primary IP address
        Agent primary IP address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/stop", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.stop_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def stop_all_agents(self) -> operations.StopAllAgentsResponse:
        r"""Stop MIMIC.
        Stop MIMIC.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/stop"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopAllAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.stop_all_agents_200_application_json_object = out

        return res

    
    def stop_ipalias(self, request: operations.StopIpaliasRequest) -> operations.StopIpaliasResponse:
        r"""Stops an existing ipalias for the agent.
        port defaults to 161 if not specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.stop_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_exists(self, request: operations.StoreExistsRequest) -> operations.StoreExistsResponse:
        r"""This command can be used as a predicate to ascertain the existence of a given variable.
        It returns \"1\" if the variable exists, else \"0\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/exists/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_exists_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_get(self, request: operations.StoreGetRequest) -> operations.StoreGetResponse:
        r"""Fetches the value associated with a variable.
        The value will be returned as a string (like all Tcl values).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/get/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_get_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_list(self) -> operations.StoreListResponse:
        r"""This command will return the list of variables in the said scope.
        The list will be a Tcl format list with curly braces \"{}\" around each list element. These elements in turn are space separated.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/store/list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.store_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def store_lreplace(self, request: operations.StoreLreplaceRequest) -> operations.StoreLreplaceResponse:
        r"""These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
        These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/lreplace/{var}/{index}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreLreplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_lreplace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_persists(self, request: operations.StorePersistsRequest) -> operations.StorePersistsResponse:
        r"""This command can be used as a predicate to ascertain the persistence of a given variable.
        It returns \"1\" if the variable is persistent, else \"0\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/persists/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StorePersistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_persists_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_save(self) -> operations.StoreSaveResponse:
        r"""This operation flushes all global objects which need to be made persistent to disk.
        The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/set/persistent"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.store_save_200_application_json_object = out

        return res

    
    def store_set(self, request: operations.StoreSetRequest) -> operations.StoreSetResponse:
        r"""Set the variable store for the global storage
        Persist 1 means persistent , 0 means non-persistent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/set/{var}/{persist}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_set_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_unset(self, request: operations.StoreUnsetRequest) -> operations.StoreUnsetResponse:
        r"""Deletes a variable which is currently defined.
        This will cleanup persistent variables if needed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/unset/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreUnsetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_unset_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def terminate(self) -> operations.TerminateResponse:
        r"""Terminate the MIMIC daemon.
        Terminate the MIMIC daemon.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/terminate"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TerminateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.terminate_200_application_json_object = out

        return res

    
    def trap_config_add(self, request: operations.TrapConfigAddRequest) -> operations.TrapConfigAddResponse:
        r"""Add a trap destination to the set of destinations.
        Add a trap destination to the set of destinations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/config/add/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapConfigAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.trap_config_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def trap_config_del(self, request: operations.TrapConfigDelRequest) -> operations.TrapConfigDelResponse:
        r"""Remove a trap destination from the set of destinations.
        Remove a trap destination from the set of destinations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapConfigDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.trap_config_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def trap_config_list(self, request: operations.TrapConfigListRequest) -> operations.TrapConfigListResponse:
        r"""List the set of trap destinations for this agent instance.
        Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/config/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapConfigListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TrapDest]])
                res.trap_dests = out
        elif r.status_code == 400:
            pass

        return res

    
    def trap_list(self, request: operations.TrapListRequest) -> operations.TrapListResponse:
        r"""List the outstanding asynchronous traps for this agent instance.
        List the outstanding asynchronous traps for this agent instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.trap_list_200_application_json_strings = out

        return res

    
    def unset_value(self, request: operations.UnsetValueRequest) -> operations.UnsetValueResponse:
        r"""Unset a variable in the Value Space in order to free its memory.
        Only variables that have previously been set can be unset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsetValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.unset_value_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    