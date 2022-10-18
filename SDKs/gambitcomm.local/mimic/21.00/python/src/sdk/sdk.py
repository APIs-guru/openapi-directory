import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://gambitcomm.local",
	"http://127.0.0.1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def access_add(self, request: operations.AccessAddRequest) -> operations.AccessAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/access/add/{user}/{agents}/{mask}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessAddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.access_add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def access_del(self, request: operations.AccessDelRequest) -> operations.AccessDelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/access/del/{user}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessDelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.access_del_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def access_get_acldb(self) -> operations.AccessGetAcldbResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/access/get/acldb"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetAcldbResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.access_get_acldb_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def access_get_admindir(self) -> operations.AccessGetAdmindirResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/access/get/admindir"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetAdmindirResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.access_get_admindir_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def access_get_adminuser(self) -> operations.AccessGetAdminuserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/access/get/adminuser"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetAdminuserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.access_get_adminuser_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def access_get_enabled(self) -> operations.AccessGetEnabledResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/access/get/enabled"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessGetEnabledResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.access_get_enabled_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def access_list(self) -> operations.AccessListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/access/list"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/access/load/{filename}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/access/save/{filename}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/access/set/acldb/{databaseName}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessSetAcldbResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.access_set_acldb_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def access_set_enabled(self, request: operations.AccessSetEnabledRequest) -> operations.AccessSetEnabledResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/access/set/enabled/{enabledOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessSetEnabledResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.access_set_enabled_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def add(self, request: operations.AddRequest) -> operations.AddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/add/{object}/{instance}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def add_daemon_timer_script(self, request: operations.AddDaemonTimerScriptRequest) -> operations.AddDaemonTimerScriptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/timer/script/add/{script}/{interval}/{arg}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddDaemonTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.add_daemon_timer_script_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def add_ipalias(self, request: operations.AddIpaliasRequest) -> operations.AddIpaliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddIpaliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.add_ipalias_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def add_timer_script(self, request: operations.AddTimerScriptRequest) -> operations.AddTimerScriptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.add_timer_script_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def agent_remove(self, request: operations.AgentRemoveRequest) -> operations.AgentRemoveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/remove", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentRemoveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.agent_remove_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def agent_store_copy(self, request: operations.AgentStoreCopyRequest) -> operations.AgentStoreCopyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/copy/{otherAgent}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreCopyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.agent_store_copy_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def agent_store_exists(self, request: operations.AgentStoreExistsRequest) -> operations.AgentStoreExistsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/exists/{var}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreExistsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.agent_store_exists_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def agent_store_get(self, request: operations.AgentStoreGetRequest) -> operations.AgentStoreGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/get/{var}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.agent_store_get_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def agent_store_list(self, request: operations.AgentStoreListRequest) -> operations.AgentStoreListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/lreplace/{var}/{index}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreLreplaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.agent_store_lreplace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def agent_store_persists(self, request: operations.AgentStorePersistsRequest) -> operations.AgentStorePersistsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/persists/{var}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStorePersistsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.agent_store_persists_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def agent_store_set(self, request: operations.AgentStoreSetRequest) -> operations.AgentStoreSetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/set/{var}/{persist}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreSetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.agent_store_set_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def agent_store_unset(self, request: operations.AgentStoreUnsetRequest) -> operations.AgentStoreUnsetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/unset/{var}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreUnsetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.agent_store_unset_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def cfg_load(self, request: operations.CfgLoadRequest) -> operations.CfgLoadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgLoadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_load_200_application_json_object = out

        return res

    
    
    def cfg_new(self, request: operations.CfgNewRequest) -> operations.CfgNewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/clear/{firstAgentNum}/{lastAgentNum}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgNewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_new_200_application_json_object = out

        return res

    
    
    def cfg_save(self) -> operations.CfgSaveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/save"
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgSaveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_save_200_application_json_object = out

        return res

    
    
    def cfg_saveas(self, request: operations.CfgSaveasRequest) -> operations.CfgSaveasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgSaveasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_saveas_200_application_json_object = out

        return res

    
    
    def del_daemon_timer_script(self, request: operations.DelDaemonTimerScriptRequest) -> operations.DelDaemonTimerScriptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/timer/script/delete/{script}/{interval}/{arg}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelDaemonTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.del_daemon_timer_script_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def del_ipalias(self, request: operations.DelIpaliasRequest) -> operations.DelIpaliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelIpaliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.del_ipalias_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def del_timer_script(self, request: operations.DelTimerScriptRequest) -> operations.DelTimerScriptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.del_timer_script_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def eval_value(self, request: operations.EvalValueRequest) -> operations.EvalValueResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/eval/{object}/{instance}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EvalValueResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.eval_value_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def from_add(self, request: operations.FromAddRequest) -> operations.FromAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/from/add/{IP}/{port}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FromAddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.from_add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def from_del(self, request: operations.FromDelRequest) -> operations.FromDelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/from/delete/{IP}/{port}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FromDelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.from_del_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def from_list(self, request: operations.FromListRequest) -> operations.FromListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/from/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/active_data_list"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveDataListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_active_data_list_200_application_json_int32_integers = out

        return res

    
    
    def get_active_list(self) -> operations.GetActiveListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/active_list"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_active_list_200_application_json_int32_integers = out

        return res

    
    
    def get_agent_state(self, request: operations.GetAgentStateRequest) -> operations.GetAgentStateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/state", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/cfgfile_changed"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCfgFileChangedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_cfg_file_changed_200_application_json_object = out

        return res

    
    
    def get_cfgfile(self) -> operations.GetCfgfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/cfgfile"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCfgfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_cfgfile_200_application_json_object = out

        return res

    
    
    def get_changed(self, request: operations.GetChangedRequest) -> operations.GetChangedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/changed", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/changed_config_list"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangedConfigListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_changed_config_list_200_application_json_int32_integers = out

        return res

    
    
    def get_changed_state_list(self) -> operations.GetChangedStateListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/changed_state_list"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangedStateListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AgentState]])
                res.agent_states = out

        return res

    
    
    def get_clients(self) -> operations.GetClientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/clients"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClientsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_clients_200_application_json_object = out

        return res

    
    
    def get_config_changed(self, request: operations.GetConfigChangedRequest) -> operations.GetConfigChangedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/config_changed", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/configured_list"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfiguredListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_configured_list_200_application_json_int32_integers = out

        return res

    
    
    def get_daemon_protocols(self) -> operations.GetDaemonProtocolsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/protocols"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDaemonProtocolsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_daemon_protocols_200_application_json_object = out

        return res

    
    
    def get_delay(self, request: operations.GetDelayRequest) -> operations.GetDelayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/delay", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/drops", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/host", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_host_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_info(self, request: operations.GetInfoRequest) -> operations.GetInfoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/info/{object}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_info_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_inform_timeout(self, request: operations.GetInformTimeoutRequest) -> operations.GetInformTimeoutResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/inform_timeout", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/instances/{object}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/interface", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_interface_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_interfaces(self) -> operations.GetInterfacesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/interfaces"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInterfacesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_interfaces_200_application_json_object = out

        return res

    
    
    def get_last(self) -> operations.GetLastResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/last"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLastResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_last_200_application_json_int32_integer = out

        return res

    
    
    def get_log(self) -> operations.GetLogResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/log"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLogResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_log_200_application_json_object = out

        return res

    
    
    def get_mask(self, request: operations.GetMaskRequest) -> operations.GetMaskResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/mask", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMaskResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_mask_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_max(self) -> operations.GetMaxResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/max"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMaxResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_max_200_application_json_int32_integer = out

        return res

    
    
    def get_mib(self, request: operations.GetMibRequest) -> operations.GetMibResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/mib/{object}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMibResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_mib_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_mibs(self, request: operations.GetMibsRequest) -> operations.GetMibsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/mibs", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/name/{OID}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_name_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_netaddr(self) -> operations.GetNetaddrResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/netaddr"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetaddrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_netaddr_200_application_json_object = out

        return res

    
    
    def get_netdev(self) -> operations.GetNetdevResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/netdev"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetdevResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_netdev_200_application_json_object = out

        return res

    
    
    def get_number_starts(self, request: operations.GetNumberStartsRequest) -> operations.GetNumberStartsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/num_starts", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/list/{OID}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/oid/{object}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOidResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_oid_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_oiddir(self, request: operations.GetOiddirRequest) -> operations.GetOiddirResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/oiddir", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOiddirResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_oiddir_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_owner(self, request: operations.GetOwnerRequest) -> operations.GetOwnerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/owner", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOwnerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_owner_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_pdusize(self, request: operations.GetPdusizeRequest) -> operations.GetPdusizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/pdusize", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/port", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_port_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_privdir(self, request: operations.GetPrivdirRequest) -> operations.GetPrivdirResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/privdir", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPrivdirResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_privdir_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_product(self) -> operations.GetProductResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/product"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_product_200_application_json_object = out

        return res

    
    
    def get_protocols(self, request: operations.GetProtocolsRequest) -> operations.GetProtocolsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/protocol", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/read", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadCommunityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_read_community_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_return(self) -> operations.GetReturnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/return"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReturnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_return_200_application_json_object = out

        return res

    
    
    def get_scen(self, request: operations.GetScenRequest) -> operations.GetScenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/scen", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/sim", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_sim_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_starttime(self, request: operations.GetStarttimeRequest) -> operations.GetStarttimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/start", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStarttimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_starttime_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_state(self, request: operations.GetStateRequest) -> operations.GetStateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/state/get/{object}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_state_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_state_changed(self, request: operations.GetStateChangedRequest) -> operations.GetStateChangedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/state_changed", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/validate", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetValueResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_value_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def get_variables(self, request: operations.GetVariablesRequest) -> operations.GetVariablesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/variables/{object}/{instance}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/get/version"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_version_200_application_json_string = out

        return res

    
    
    def get_write_community(self, request: operations.GetWriteCommunityRequest) -> operations.GetWriteCommunityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/write", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWriteCommunityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.get_write_community_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def halt(self, request: operations.HaltRequest) -> operations.HaltResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/halt", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HaltResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.halt_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def list_daemon_timer_scripts(self) -> operations.ListDaemonTimerScriptsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/timer/script/list"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/timer/script/list", request.path_params)
        
        client = self.client

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

    
    
    def mset_value(self, request: operations.MsetValueRequest) -> operations.MsetValueResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/mset", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MsetValueResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.mset_value_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def munset_value(self, request: operations.MunsetValueRequest) -> operations.MunsetValueResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/munset", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MunsetValueResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.munset_value_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def new(self, request: operations.NewRequest) -> operations.NewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/add/{IP}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.new_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def pause_now(self, request: operations.PauseNowRequest) -> operations.PauseNowResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/pause", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PauseNowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.pause_now_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_coap_get_args(self, request: operations.ProtocolCoapGetArgsRequest) -> operations.ProtocolCoapGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/coap/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolCoapSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_coap_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_coap_set_trace(self, request: operations.ProtocolCoapSetTraceRequest) -> operations.ProtocolCoapSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolCoapSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_coap_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_dhcp_get_args(self, request: operations.ProtocolDhcpGetArgsRequest) -> operations.ProtocolDhcpGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/dhcp/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/params", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_dhcp_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_dhcp_set_trace(self, request: operations.ProtocolDhcpSetTraceRequest) -> operations.ProtocolDhcpSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_dhcp_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_get_config(self, request: operations.ProtocolGetConfigRequest) -> operations.ProtocolGetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/{prot}/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetAttrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_ipmi_get_attr_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_ipmi_get_config(self, request: operations.ProtocolIpmiGetConfigRequest) -> operations.ProtocolIpmiGetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/ipmi/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiSetAttrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_ipmi_set_attr_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_ipmi_set_config(self, request: operations.ProtocolIpmiSetConfigRequest) -> operations.ProtocolIpmiSetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_ipmi_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_ipmi_set_trace(self, request: operations.ProtocolIpmiSetTraceRequest) -> operations.ProtocolIpmiSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_ipmi_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_mqtt_client_get_protstate(self, request: operations.ProtocolMqttClientGetProtstateRequest) -> operations.ProtocolMqttClientGetProtstateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientResubscribeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_mqtt_client_resubscribe_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_mqtt_client_runtime_abort(self, request: operations.ProtocolMqttClientRuntimeAbortRequest) -> operations.ProtocolMqttClientRuntimeAbortResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientUnsubscribeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_mqtt_client_unsubscribe_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_mqtt_get_args(self, request: operations.ProtocolMqttGetArgsRequest) -> operations.ProtocolMqttGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/mqtt/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_mqtt_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_mqtt_set_trace(self, request: operations.ProtocolMqttSetTraceRequest) -> operations.ProtocolMqttSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_mqtt_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_change_attr(self, request: operations.ProtocolNetflowChangeAttrRequest) -> operations.ProtocolNetflowChangeAttrResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowChangeAttrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_change_attr_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_change_dfs(self, request: operations.ProtocolNetflowChangeDfsRequest) -> operations.ProtocolNetflowChangeDfsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowChangeDfsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_change_dfs_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_change_tfs(self, request: operations.ProtocolNetflowChangeTfsRequest) -> operations.ProtocolNetflowChangeTfsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowChangeTfsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_change_tfs_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_get_args(self, request: operations.ProtocolNetflowGetArgsRequest) -> operations.ProtocolNetflowGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/netflow/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/halt", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowHaltResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_halt_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_list(self, request: operations.ProtocolNetflowListRequest) -> operations.ProtocolNetflowListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/reload", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowReloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_reload_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_resume(self, request: operations.ProtocolNetflowResumeRequest) -> operations.ProtocolNetflowResumeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/resume", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowResumeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_resume_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_set_collector(self, request: operations.ProtocolNetflowSetCollectorRequest) -> operations.ProtocolNetflowSetCollectorResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetCollectorResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_set_collector_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_set_config(self, request: operations.ProtocolNetflowSetConfigRequest) -> operations.ProtocolNetflowSetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_set_file_name(self, request: operations.ProtocolNetflowSetFileNameRequest) -> operations.ProtocolNetflowSetFileNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetFileNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_set_file_name_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_netflow_set_trace(self, request: operations.ProtocolNetflowSetTraceRequest) -> operations.ProtocolNetflowSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_netflow_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_proxy_get_args(self, request: operations.ProtocolProxyGetArgsRequest) -> operations.ProtocolProxyGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/proxy/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortAddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_proxy_port_add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_proxy_port_isstarted(self, request: operations.ProtocolProxyPortIsstartedRequest) -> operations.ProtocolProxyPortIsstartedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortIsstartedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_proxy_port_isstarted_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_proxy_port_list(self, request: operations.ProtocolProxyPortListRequest) -> operations.ProtocolProxyPortListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortRemoveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_proxy_port_remove_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_proxy_port_start(self, request: operations.ProtocolProxyPortStartRequest) -> operations.ProtocolProxyPortStartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortStartResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_proxy_port_start_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_proxy_port_stop(self, request: operations.ProtocolProxyPortStopRequest) -> operations.ProtocolProxyPortStopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortStopResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_proxy_port_stop_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_proxy_set_config(self, request: operations.ProtocolProxySetConfigRequest) -> operations.ProtocolProxySetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxySetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_proxy_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_proxy_set_trace(self, request: operations.ProtocolProxySetTraceRequest) -> operations.ProtocolProxySetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxySetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_proxy_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_sflow_get_args(self, request: operations.ProtocolSflowGetArgsRequest) -> operations.ProtocolSflowGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/sflow/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/halt", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowHaltResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_sflow_halt_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_sflow_reload(self, request: operations.ProtocolSflowReloadRequest) -> operations.ProtocolSflowReloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/reload", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowReloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_sflow_reload_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_sflow_resume(self, request: operations.ProtocolSflowResumeRequest) -> operations.ProtocolSflowResumeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/resume", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowResumeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_sflow_resume_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_sflow_set_config(self, request: operations.ProtocolSflowSetConfigRequest) -> operations.ProtocolSflowSetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_sflow_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_sflow_set_trace(self, request: operations.ProtocolSflowSetTraceRequest) -> operations.ProtocolSflowSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_sflow_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmptcp_get_args(self, request: operations.ProtocolSnmptcpGetArgsRequest) -> operations.ProtocolSnmptcpGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/snmptcp/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasDisableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmptcp_ipalias_disable_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmptcp_ipalias_enable(self, request: operations.ProtocolSnmptcpIpaliasEnableRequest) -> operations.ProtocolSnmptcpIpaliasEnableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasEnableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmptcp_ipalias_enable_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmptcp_ipalias_isenabled(self, request: operations.ProtocolSnmptcpIpaliasIsenabledRequest) -> operations.ProtocolSnmptcpIpaliasIsenabledResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasIsenabledResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmptcp_ipalias_isenabled_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmptcp_ipalias_list(self, request: operations.ProtocolSnmptcpIpaliasListRequest) -> operations.ProtocolSnmptcpIpaliasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmptcp_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmptcp_set_trace(self, request: operations.ProtocolSnmptcpSetTraceRequest) -> operations.ProtocolSnmptcpSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmptcp_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_access_add(self, request: operations.ProtocolSnmpv3AccessAddRequest) -> operations.ProtocolSnmpv3AccessAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessAddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_access_add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_access_clear(self, request: operations.ProtocolSnmpv3AccessClearRequest) -> operations.ProtocolSnmpv3AccessClearResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessClearResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_access_clear_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_access_del(self, request: operations.ProtocolSnmpv3AccessDelRequest) -> operations.ProtocolSnmpv3AccessDelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessDelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_access_del_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_access_list(self, request: operations.ProtocolSnmpv3AccessListRequest) -> operations.ProtocolSnmpv3AccessListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetContextEngineidResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_get_context_engineid_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_get_engineboots(self, request: operations.ProtocolSnmpv3GetEnginebootsRequest) -> operations.ProtocolSnmpv3GetEnginebootsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetEngineidResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_get_engineid_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_get_enginetime(self, request: operations.ProtocolSnmpv3GetEnginetimeRequest) -> operations.ProtocolSnmpv3GetEnginetimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupAddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_group_add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_group_clear(self, request: operations.ProtocolSnmpv3GroupClearRequest) -> operations.ProtocolSnmpv3GroupClearResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupClearResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_group_clear_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_group_del(self, request: operations.ProtocolSnmpv3GroupDelRequest) -> operations.ProtocolSnmpv3GroupDelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupDelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_group_del_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_group_list(self, request: operations.ProtocolSnmpv3GroupListRequest) -> operations.ProtocolSnmpv3GroupListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3SetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_user_add(self, request: operations.ProtocolSnmpv3UserAddRequest) -> operations.ProtocolSnmpv3UserAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserAddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_user_add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_user_clear(self, request: operations.ProtocolSnmpv3UserClearRequest) -> operations.ProtocolSnmpv3UserClearResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserClearResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_user_clear_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_user_del(self, request: operations.ProtocolSnmpv3UserDelRequest) -> operations.ProtocolSnmpv3UserDelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserDelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_user_del_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_user_list(self, request: operations.ProtocolSnmpv3UserListRequest) -> operations.ProtocolSnmpv3UserListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewAddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_view_add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_view_clear(self, request: operations.ProtocolSnmpv3ViewClearRequest) -> operations.ProtocolSnmpv3ViewClearResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewClearResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_view_clear_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_view_del(self, request: operations.ProtocolSnmpv3ViewDelRequest) -> operations.ProtocolSnmpv3ViewDelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewDelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_snmpv3_view_del_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_snmpv3_view_list(self, request: operations.ProtocolSnmpv3ViewListRequest) -> operations.ProtocolSnmpv3ViewListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/ssh/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHIpaliasDisableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_ssh_ipalias_disable_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_ssh_ipalias_enable(self, request: operations.ProtocolSSHIpaliasEnableRequest) -> operations.ProtocolSSHIpaliasEnableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHIpaliasEnableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_ssh_ipalias_enable_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_ssh_ipalias_isenabled(self, request: operations.ProtocolSSHIpaliasIsenabledRequest) -> operations.ProtocolSSHIpaliasIsenabledResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHIpaliasIsenabledResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_ssh_ipalias_isenabled_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_ssh_ipalias_list(self, request: operations.ProtocolSSHIpaliasListRequest) -> operations.ProtocolSSHIpaliasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_ssh_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_ssh_set_trace(self, request: operations.ProtocolSSHSetTraceRequest) -> operations.ProtocolSSHSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSSHSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_ssh_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_syslog_get_args(self, request: operations.ProtocolSyslogGetArgsRequest) -> operations.ProtocolSyslogGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetAttrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_syslog_get_attr_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_syslog_get_config(self, request: operations.ProtocolSyslogGetConfigRequest) -> operations.ProtocolSyslogGetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/syslog/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSendResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_syslog_send_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_syslog_set_attr(self, request: operations.ProtocolSyslogSetAttrRequest) -> operations.ProtocolSyslogSetAttrResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSetAttrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_syslog_set_attr_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_syslog_set_config(self, request: operations.ProtocolSyslogSetConfigRequest) -> operations.ProtocolSyslogSetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_syslog_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_syslog_set_trace(self, request: operations.ProtocolSyslogSetTraceRequest) -> operations.ProtocolSyslogSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_syslog_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_telnet_connection_logon(self, request: operations.ProtocolTelnetConnectionLogonRequest) -> operations.ProtocolTelnetConnectionLogonResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/telnet/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasDisableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_telnet_ipalias_disable_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_telnet_ipalias_enable(self, request: operations.ProtocolTelnetIpaliasEnableRequest) -> operations.ProtocolTelnetIpaliasEnableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasEnableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_telnet_ipalias_enable_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_telnet_ipalias_isenabled(self, request: operations.ProtocolTelnetIpaliasIsenabledRequest) -> operations.ProtocolTelnetIpaliasIsenabledResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasIsenabledResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_telnet_ipalias_isenabled_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_telnet_ipalias_list(self, request: operations.ProtocolTelnetIpaliasListRequest) -> operations.ProtocolTelnetIpaliasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_telnet_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_telnet_set_trace(self, request: operations.ProtocolTelnetSetTraceRequest) -> operations.ProtocolTelnetSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_telnet_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_tftp_get_args(self, request: operations.ProtocolTftpGetArgsRequest) -> operations.ProtocolTftpGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/tftp/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionGetParameterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_tftp_session_get_parameter_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_tftp_session_read(self, request: operations.ProtocolTftpSessionReadRequest) -> operations.ProtocolTftpSessionReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionSetParameterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_tftp_session_set_parameter_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_tftp_session_start(self, request: operations.ProtocolTftpSessionStartRequest) -> operations.ProtocolTftpSessionStartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionStartResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_tftp_session_start_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_tftp_session_status(self, request: operations.ProtocolTftpSessionStatusRequest) -> operations.ProtocolTftpSessionStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionStatusResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_tftp_session_status_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_tftp_session_stop(self, request: operations.ProtocolTftpSessionStopRequest) -> operations.ProtocolTftpSessionStopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionStopResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_tftp_session_stop_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_tftp_session_write(self, request: operations.ProtocolTftpSessionWriteRequest) -> operations.ProtocolTftpSessionWriteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_tftp_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_tftp_set_trace(self, request: operations.ProtocolTftpSetTraceRequest) -> operations.ProtocolTftpSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_tftp_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_tod_get_args(self, request: operations.ProtocolTodGetArgsRequest) -> operations.ProtocolTodGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/tod/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_tod_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_tod_set_trace(self, request: operations.ProtocolTodSetTraceRequest) -> operations.ProtocolTodSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_tod_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_web_get_args(self, request: operations.ProtocolWebGetArgsRequest) -> operations.ProtocolWebGetArgsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/args", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/config", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/statistics", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/web/get/stats_hdr"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/trace", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortAddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_web_port_add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_web_port_exists(self, request: operations.ProtocolWebPortExistsRequest) -> operations.ProtocolWebPortExistsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortRemoveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_web_port_remove_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_web_port_set(self, request: operations.ProtocolWebPortSetRequest) -> operations.ProtocolWebPortSetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortSetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_web_port_set_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_web_port_start(self, request: operations.ProtocolWebPortStartRequest) -> operations.ProtocolWebPortStartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortStartResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_web_port_start_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_web_port_stop(self, request: operations.ProtocolWebPortStopRequest) -> operations.ProtocolWebPortStopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortStopResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_web_port_stop_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_web_set_config(self, request: operations.ProtocolWebSetConfigRequest) -> operations.ProtocolWebSetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebSetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_web_set_config_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def protocol_web_set_trace(self, request: operations.ProtocolWebSetTraceRequest) -> operations.ProtocolWebSetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebSetTraceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.protocol_web_set_trace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def reload(self, request: operations.ReloadRequest) -> operations.ReloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/reload", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.reload_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def remove(self, request: operations.RemoveRequest) -> operations.RemoveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/remove/{object}/{instance}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.remove_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def resume(self, request: operations.ResumeRequest) -> operations.ResumeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/resume", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResumeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.resume_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def save(self, request: operations.SaveRequest) -> operations.SaveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/save", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.save_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_delay(self, request: operations.SetDelayRequest) -> operations.SetDelayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/delay/{delay}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/drops/{drops}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/host/{host}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetHostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_host_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_inform_timeout(self, request: operations.SetInformTimeoutRequest) -> operations.SetInformTimeoutResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/interface/{interface}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_interface_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_log(self, request: operations.SetLogRequest) -> operations.SetLogResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/set/log"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetLogResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_log_200_application_json_string = out

        return res

    
    
    def set_mask(self, request: operations.SetMaskRequest) -> operations.SetMaskResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/mask/{mask}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetMaskResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_mask_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_mibs(self, request: operations.SetMibsRequest) -> operations.SetMibsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/mibs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetMibsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_mibs_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_netdev(self) -> operations.SetNetdevResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/set/netdev"
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetNetdevResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.set_netdev_200_application_json_object = out

        return res

    
    
    def set_oiddir(self, request: operations.SetOiddirRequest) -> operations.SetOiddirResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/oiddir/{oiddir}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetOiddirResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_oiddir_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_owner(self, request: operations.SetOwnerRequest) -> operations.SetOwnerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/owner/{owner}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetOwnerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_owner_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_pdusize(self, request: operations.SetPdusizeRequest) -> operations.SetPdusizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/pdusize/{pdusize}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/port/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPortResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_port_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_privdir(self, request: operations.SetPrivdirRequest) -> operations.SetPrivdirResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/privdir/{privdir}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPrivdirResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_privdir_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_protocols(self, request: operations.SetProtocolsRequest) -> operations.SetProtocolsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/protocol", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/read/{read}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetReadCommunityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_read_community_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_starttime(self, request: operations.SetStarttimeRequest) -> operations.SetStarttimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/start/{start}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetStarttimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_starttime_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_state(self, request: operations.SetStateRequest) -> operations.SetStateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/state/set/{object}/{state}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetStateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_state_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_trace(self, request: operations.SetTraceRequest) -> operations.SetTraceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/trace/{trace}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/validate/{validate}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetValueResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_value_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def set_write_community(self, request: operations.SetWriteCommunityRequest) -> operations.SetWriteCommunityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/write/{write}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetWriteCommunityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.set_write_community_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def split_oid(self, request: operations.SplitOidRequest) -> operations.SplitOidResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/split/{OID}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/start", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.start_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def start_all_agents(self) -> operations.StartAllAgentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/start"
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartAllAgentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.start_all_agents_200_application_json_object = out

        return res

    
    
    def start_ipalias(self, request: operations.StartIpaliasRequest) -> operations.StartIpaliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/start/{IP}/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartIpaliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.start_ipalias_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def status_ipalias(self, request: operations.StatusIpaliasRequest) -> operations.StatusIpaliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/status/{IP}/{port}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusIpaliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.status_ipalias_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def stop(self, request: operations.StopRequest) -> operations.StopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/stop", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.stop_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def stop_all_agents(self) -> operations.StopAllAgentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/stop"
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopAllAgentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.stop_all_agents_200_application_json_object = out

        return res

    
    
    def stop_ipalias(self, request: operations.StopIpaliasRequest) -> operations.StopIpaliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopIpaliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.stop_ipalias_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def store_exists(self, request: operations.StoreExistsRequest) -> operations.StoreExistsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/store/exists/{var}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreExistsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.store_exists_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def store_get(self, request: operations.StoreGetRequest) -> operations.StoreGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/store/get/{var}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.store_get_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def store_list(self) -> operations.StoreListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/store/list"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/store/lreplace/{var}/{index}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreLreplaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.store_lreplace_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def store_persists(self, request: operations.StorePersistsRequest) -> operations.StorePersistsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/store/persists/{var}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StorePersistsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.store_persists_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def store_save(self) -> operations.StoreSaveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/set/persistent"
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreSaveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.store_save_200_application_json_object = out

        return res

    
    
    def store_set(self, request: operations.StoreSetRequest) -> operations.StoreSetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/store/set/{var}/{persist}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreSetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.store_set_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def store_unset(self, request: operations.StoreUnsetRequest) -> operations.StoreUnsetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/store/unset/{var}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreUnsetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.store_unset_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def terminate(self) -> operations.TerminateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mimic/terminate"
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TerminateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.terminate_200_application_json_object = out

        return res

    
    
    def trap_config_add(self, request: operations.TrapConfigAddRequest) -> operations.TrapConfigAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/config/add/{IP}/{port}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapConfigAddResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.trap_config_add_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def trap_config_del(self, request: operations.TrapConfigDelRequest) -> operations.TrapConfigDelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapConfigDelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.trap_config_del_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    
    
    def trap_config_list(self, request: operations.TrapConfigListRequest) -> operations.TrapConfigListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/config/list", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/list", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.trap_list_200_application_json_strings = out

        return res

    
    
    def unset_value(self, request: operations.UnsetValueRequest) -> operations.UnsetValueResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsetValueResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[str])
                res.unset_value_200_application_json_string = out
        elif r.status_code == 400:
            pass

        return res

    