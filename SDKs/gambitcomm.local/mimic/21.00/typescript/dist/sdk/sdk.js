var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import axios from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";
var Servers = [
    "http://gambitcomm.local",
    "http://127.0.0.1",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk.serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk.defaultClient = client;
    };
}
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk.security = security;
    };
}
// SDK Documentation: https://www.gambitcomm.com/site/about.php - Find out more about Gambit
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        opts.forEach(function (o) { return o(_this); });
        if (this.serverURL == "") {
            this.serverURL = Servers[0];
        }
        if (!this.defaultClient) {
            this.defaultClient = axios.create({ baseURL: this.serverURL });
        }
        if (!this.securityClient) {
            if (this.security) {
                this.securityClient = CreateSecurityClient(this.defaultClient, this.security);
            }
            else {
                this.securityClient = this.defaultClient;
            }
        }
    }
    // AccessAdd - Adds/Overwrites the user entry in the access control database.
    /**
     * Adds/Overwrites the user entry in the access control database.
    **/
    SDK.prototype.AccessAdd = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccessAddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/access/add/{user}/{agents}/{mask}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessAdd200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessDel - Clears a users entry from access control database.
    /**
     * Using '*' for user clears all the users.
    **/
    SDK.prototype.AccessDel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccessDelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/access/del/{user}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDel200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessGetAcldb - Returns the current access control database in use.
    /**
     * If nothing is specified then this returns "".
    **/
    SDK.prototype.AccessGetAcldb = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/access/get/acldb";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessGetAcldb200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessGetAdmindir - Returns the current admin directory.
    /**
     * If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
    **/
    SDK.prototype.AccessGetAdmindir = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/access/get/admindir";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessGetAdmindir200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessGetAdminuser - Returns the current administrator.
    /**
     * If nothing is specified in admin/settings.cfg then returns "".
    **/
    SDK.prototype.AccessGetAdminuser = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/access/get/adminuser";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessGetAdminuser200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessGetEnabled - Returns the state of access control checking.
    /**
     * 0 indicates that it is disabled, 1 indicates it is enabled.
    **/
    SDK.prototype.AccessGetEnabled = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/access/get/enabled";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessGetEnabled200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessList - Returns an array of entries.
    /**
     * Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
    **/
    SDK.prototype.AccessList = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/access/list";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessEntries = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessLoad - Loads the specified file for access control data.
    /**
     * If filename is not specified then the currently set 'acldb' parameter is used.
    **/
    SDK.prototype.AccessLoad = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccessLoadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/access/load/{filename}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessLoad200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessSave - Saves current access control data in specified file.
    /**
     * If filename is not specified then the currently set 'acldb' parameter is used.
    **/
    SDK.prototype.AccessSave = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccessSaveRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/access/save/{filename}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessSave200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessSetAcldb - Allows setting the name of the current access control database.
    /**
     * This will be used for subsequent load and save operations.
    **/
    SDK.prototype.AccessSetAcldb = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccessSetAcldbRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/access/set/acldb/{databaseName}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessSetAcldb200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AccessSetEnabled - Allows the user to enable/disable the access control check.
    /**
     * 0 indicates disabled, 1 indicates enabled.
    **/
    SDK.prototype.AccessSetEnabled = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccessSetEnabledRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/access/set/enabled/{enabledOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessSetEnabled200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Add - Add an entry to a table.
    /**
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    SDK.prototype.Add = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/add/{object}/{instance}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.add200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AddDaemonTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
    /**
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
    **/
    SDK.prototype.AddDaemonTimerScript = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddDaemonTimerScriptRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/timer/script/add/{script}/{interval}/{arg}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.addDaemonTimerScript200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AddIpalias - Adds a new ipalias for the agent.
    /**
     * port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
    **/
    SDK.prototype.AddIpalias = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddIpaliasRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.addIpalias200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AddTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
    /**
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
    **/
    SDK.prototype.AddTimerScript = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddTimerScriptRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.addTimerScript200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AgentRemove - Remove the current agent.
    /**
     * For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
    **/
    SDK.prototype.AgentRemove = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AgentRemoveRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/remove", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentRemove200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AgentStoreCopy - This command copies the variable store from the other agent to this agent.
    /**
     * This command copies the variable store from the other agent to this agent.
    **/
    SDK.prototype.AgentStoreCopy = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AgentStoreCopyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/copy/{otherAgent}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentStoreCopy200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AgentStoreExists - This command can be used as a predicate to ascertain the existence of a given variable.
    /**
     * It returns "1" if the variable exists, else "0".
    **/
    SDK.prototype.AgentStoreExists = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AgentStoreExistsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/exists/{var}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentStoreExists200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AgentStoreGet - Fetches the value associated with a variable.
    /**
     * The value will be returned as a string (like all Tcl values).
    **/
    SDK.prototype.AgentStoreGet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AgentStoreGetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/get/{var}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentStoreGet200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AgentStoreList - This command will return the list of variables in the said scope.
    /**
     * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
    **/
    SDK.prototype.AgentStoreList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AgentStoreListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentStoreList200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AgentStoreLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
    /**
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
    **/
    SDK.prototype.AgentStoreLreplace = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AgentStoreLreplaceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/lreplace/{var}/{index}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentStoreLreplace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AgentStorePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
    /**
     * It returns "1" if the variable is persistent, else "0".
    **/
    SDK.prototype.AgentStorePersists = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AgentStorePersistsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/persists/{var}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentStorePersists200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AgentStoreSet - These commands allow the creation of a new variable, or changing an existing value.
    /**
     * The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
    **/
    SDK.prototype.AgentStoreSet = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AgentStoreSetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/set/{var}/{persist}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentStoreSet200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // AgentStoreUnset - Deletes a variable which is currently defined.
    /**
     * This will cleanup persistent variables if needed
    **/
    SDK.prototype.AgentStoreUnset = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AgentStoreUnsetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/unset/{var}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentStoreUnset200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CfgLoad - Load the lab configuration file file.
    /**
     * Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
    **/
    SDK.prototype.CfgLoad = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CfgLoadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.cfgLoad200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CfgNew - Clear the lab configuration.
    /**
     * Clear the lab configuration.
    **/
    SDK.prototype.CfgNew = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CfgNewRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/clear/{firstAgentNum}/{lastAgentNum}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.cfgNew200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CfgSave - Save the lab configuration.
    /**
     * Save the lab configuration.
    **/
    SDK.prototype.CfgSave = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/save";
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.cfgSave200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CfgSaveas - Save the lab configuration in file.
    /**
     * Save the lab configuration in file.
    **/
    SDK.prototype.CfgSaveas = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CfgSaveasRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.cfgSaveas200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DelDaemonTimerScript - Remove a timer script from the execution list.
    /**
     * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
    **/
    SDK.prototype.DelDaemonTimerScript = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DelDaemonTimerScriptRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/timer/script/delete/{script}/{interval}/{arg}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.delDaemonTimerScript200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DelIpalias - Deletes an existing ipalias from the agent.
    /**
     * port defaults to 161 if not specified.
    **/
    SDK.prototype.DelIpalias = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DelIpaliasRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.delIpalias200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DelTimerScript - Remove a timer script from the execution list.
    /**
     * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
    **/
    SDK.prototype.DelTimerScript = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DelTimerScriptRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.delTimerScript200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // EvalValue - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
    /**
     * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
    **/
    SDK.prototype.EvalValue = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EvalValueRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/eval/{object}/{instance}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.evalValue200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // FromAdd - Add a source address that the agent will accept messages from.
    /**
     * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
    **/
    SDK.prototype.FromAdd = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FromAddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/from/add/{IP}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.fromAdd200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // FromDel - delete a source address that the agent will accept messages from.
    /**
     * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
    **/
    SDK.prototype.FromDel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FromDelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/from/delete/{IP}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.fromDel200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // FromList - List the source addresses that the agent will accept messages from.
    /**
     * This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
    **/
    SDK.prototype.FromList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FromListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/from/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.ipSources = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetActiveDataList - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
    /**
     * This list is guaranteed to be sorted into increasing order.
    **/
    SDK.prototype.GetActiveDataList = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/active_data_list";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getActiveDataList200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetActiveList - The list of {agentnum} that are currently active (running or paused).
    /**
     * This list is guaranteed to be sorted into increasing order.
    **/
    SDK.prototype.GetActiveList = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/active_list";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getActiveList200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAgentState - current running state of the agent
    /**
     * 0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
    **/
    SDK.prototype.GetAgentState = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAgentStateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/state", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getAgentState200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetCfgFileChanged - This predicate indicates if the currently loaded agent configuration file has changed.
    /**
     * Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
    **/
    SDK.prototype.GetCfgFileChanged = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/cfgfile_changed";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getCfgFileChanged200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetCfgfile - The currently loaded lab configuration file for the particular user.
    /**
     * In the case of multi-user access this command returns a different configuration file loaded for each user.
    **/
    SDK.prototype.GetCfgfile = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/cfgfile";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getCfgfile200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetChanged - has the agent value space changed?
    /**
     * has the agent value space changed?
    **/
    SDK.prototype.GetChanged = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetChangedRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/changed", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getChanged200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetChangedConfigList - The list of {agentnum} for which a configurable parameter changed.
    /**
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
    **/
    SDK.prototype.GetChangedConfigList = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/changed_config_list";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getChangedConfigList200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetChangedStateList - The list of {agentnum state} for which the state changed.
    /**
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
    **/
    SDK.prototype.GetChangedStateList = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/changed_state_list";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agentStates = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetClients - The number of clients currently connected to the daemon.
    /**
     * The number of clients currently connected to the daemon.
    **/
    SDK.prototype.GetClients = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/clients";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getClients200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetConfigChanged - has the lab configuration changed?
    /**
     * has the lab configuration changed?
    **/
    SDK.prototype.GetConfigChanged = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConfigChangedRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/config_changed", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getConfigChanged200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetConfiguredList - The list of {agentnum} that are currently configured.
    /**
     * This list is guaranteed to be sorted into increasing order.
    **/
    SDK.prototype.GetConfiguredList = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/configured_list";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getConfiguredList200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetDaemonProtocols - The set of protocols supported by the Simulator.
    /**
     * The set of protocols supported by the Simulator.
    **/
    SDK.prototype.GetDaemonProtocols = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/protocols";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getDaemonProtocols200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetDelay - one-way transit delay in msec.
    /**
     * The minimum granularity is 10 msec.
    **/
    SDK.prototype.GetDelay = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDelayRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/delay", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getDelay200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetDrops - drop rate (every N-th PDU). 0 means no drops.
    /**
     * drop rate (every N-th PDU). 0 means no drops.
    **/
    SDK.prototype.GetDrops = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDropsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/drops", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getDrops200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetHost - host address of the agent.
    /**
     * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
    **/
    SDK.prototype.GetHost = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetHostRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/host", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getHost200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetInfo - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
    /**
     * Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
    **/
    SDK.prototype.GetInfo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetInfoRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/info/{object}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getInfo200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetInformTimeout - timeout in seconds for retransmitting INFORM PDUs.
    /**
     * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
    **/
    SDK.prototype.GetInformTimeout = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetInformTimeoutRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/inform_timeout", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getInformTimeout200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetInstances - Display the MIB object instances for the specified object.
    /**
     * This enables MIB browsing of the MIB on the current agent.
    **/
    SDK.prototype.GetInstances = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetInstancesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/instances/{object}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getInstances200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetInterface - network interface card for the agent.
    /**
     * network interface card for the agent.
    **/
    SDK.prototype.GetInterface = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetInterfaceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/interface", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getInterface200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetInterfaces - The set of network interfaces that can be used for simulations.
    /**
     * The set of network interfaces that can be used for simulations.
    **/
    SDK.prototype.GetInterfaces = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/interfaces";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getInterfaces200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetLast - The last configured agent instance.
    /**
     * The last configured agent instance.
    **/
    SDK.prototype.GetLast = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/last";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getLast200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetLog - The current log file for the Simulator.
    /**
     * The current log file for the Simulator.
    **/
    SDK.prototype.GetLog = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/log";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getLog200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetMask - subnet mask of the agent.
    /**
     * subnet mask of the agent.
    **/
    SDK.prototype.GetMask = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMaskRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/mask", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getMask200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetMax - The maximum number of agent instances.
    /**
     * The maximum number of agent instances.
    **/
    SDK.prototype.GetMax = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/max";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getMax200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetMib - Return the MIB that defines the specified object.
    /**
     * This will only return a MIB name if the object is unmistakeably defined in a MIB.
    **/
    SDK.prototype.GetMib = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMibRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/mib/{object}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getMib200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetMibs - set of MIBs, simulations and scenarios
    /**
     * set of MIBs, simulations and scenarios
    **/
    SDK.prototype.GetMibs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMibsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/mibs", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.triplets = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetName - Return the symbolic name of the specified object identifier.
    /**
     * Return the symbolic name of the specified object identifier.
    **/
    SDK.prototype.GetName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetNameRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/name/{OID}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getName200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetNetaddr - The network address of the host where the MIMIC simulator is running.
    /**
     * The network address of the host where the MIMIC simulator is running.
    **/
    SDK.prototype.GetNetaddr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/netaddr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getNetaddr200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetNetdev - The default network device to be used for agent addresses.
    /**
     * The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
    **/
    SDK.prototype.GetNetdev = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/netdev";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getNetdev200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetNumberStarts - number of starts for the agent.
    /**
     * This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
    **/
    SDK.prototype.GetNumberStarts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetNumberStartsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/num_starts", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getNumberStarts200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetObjects - Display the MIB objects below the current position
    /**
     * This command is similar to the ls or dir operating system commands to list filesystem directories.
    **/
    SDK.prototype.GetObjects = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetObjectsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/list/{OID}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getObjects200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetOid - Return the numeric OID of the specified object.
    /**
     * Return the numeric OID of the specified object.
    **/
    SDK.prototype.GetOid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOidRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/oid/{object}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getOid200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetOiddir - MIB directory of the agent.
    /**
     * MIB directory of the agent.
    **/
    SDK.prototype.GetOiddir = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOiddirRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/oiddir", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getOiddir200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetOwner - owner of the agent.
    /**
     * owner of the agent.
    **/
    SDK.prototype.GetOwner = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOwnerRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/owner", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getOwner200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetPdusize - maximum PDU size.
    /**
     * The limit for this configurable is 65536.
    **/
    SDK.prototype.GetPdusize = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPdusizeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/pdusize", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getPdusize200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetPort - port number
    /**
     * port number
    **/
    SDK.prototype.GetPort = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPortRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/port", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getPort200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetPrivdir - private directory of the agent.
    /**
     * private directory of the agent.
    **/
    SDK.prototype.GetPrivdir = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPrivdirRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/privdir", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getPrivdir200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetProduct - The product number that is licensed.
    /**
     * The product number that is licensed.
    **/
    SDK.prototype.GetProduct = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/product";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getProduct200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetProtocols - protocols supported by agent
    /**
     * protocols supported by agent as an array of strings
    **/
    SDK.prototype.GetProtocols = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetProtocolsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/protocol", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getProtocols200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetReadCommunity - read community string
    /**
     * read community string
    **/
    SDK.prototype.GetReadCommunity = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetReadCommunityRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/read", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getReadCommunity200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetReturn - The return mode.
    /**
     * The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
    **/
    SDK.prototype.GetReturn = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/return";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getReturn200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetScen - first scenario name
    /**
     * first scenario name
    **/
    SDK.prototype.GetScen = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetScenRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/scen", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getScen200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSim - first simulation name
    /**
     * first simulation name
    **/
    SDK.prototype.GetSim = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSimRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/sim", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getSim200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetStarttime - relative start time
    /**
     * relative start time
    **/
    SDK.prototype.GetStarttime = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetStarttimeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/start", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getStarttime200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetState - Get the state of a MIB object object.
    /**
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    SDK.prototype.GetState = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetStateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/state/get/{object}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getState200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetStateChanged - has the agent state changed?
    /**
     * has the agent state changed?
    **/
    SDK.prototype.GetStateChanged = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetStateChangedRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/state_changed", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getStateChanged200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetStatistics - current statistics of the agent instance
    /**
     * The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
    **/
    SDK.prototype.GetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetTrace - SNMP PDU tracing
    /**
     * SNMP PDU tracing
    **/
    SDK.prototype.GetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getTrace200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetValidate - SNMP SET validation policy.
    /**
     * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
    **/
    SDK.prototype.GetValidate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetValidateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/validate", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getValidate200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetValue - Get a variable in the Value Space.
    /**
     * Get a variable in the Value Space.
    **/
    SDK.prototype.GetValue = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetValueRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getValue200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetVariables - Display the variables for the specified instance instance for the specified MIB object object
    /**
     * This enables variable browsing of the MIB on the current agent.
    **/
    SDK.prototype.GetVariables = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetVariablesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/variables/{object}/{instance}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getVariables200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetVersion - The version of the MIMIC command interface.
    /**
     * The version of the MIMIC command interface.
    **/
    SDK.prototype.GetVersion = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/get/version";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getVersion200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetWriteCommunity - write community string
    /**
     * write community string
    **/
    SDK.prototype.GetWriteCommunity = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWriteCommunityRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/write", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getWriteCommunity200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Halt - Halt the current agent.
    /**
     * Halt the current agent.
    **/
    SDK.prototype.Halt = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.HaltRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/halt", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.halt200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListDaemonTimerScripts - List the timer scripts currently running along with the their intervals.
    /**
     * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
    **/
    SDK.prototype.ListDaemonTimerScripts = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/timer/script/list";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.timerScripts = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListIpaliases - Lists all the additional ipaliases configured for the agent.
    /**
     * The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
    **/
    SDK.prototype.ListIpaliases = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListIpaliasesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.ipAliases = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListTimerScripts - List the timer scripts currently running along with the their intervals.
    /**
     * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
    **/
    SDK.prototype.ListTimerScripts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListTimerScriptsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/timer/script/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.timerScripts = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // MgetInfo - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
    /**
     * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
    **/
    SDK.prototype.MgetInfo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MgetInfoRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/mget/{infoArray}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mgetInfo200ApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // MsetValue - Set multiple variables in the Value Space.
    /**
     * This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
    **/
    SDK.prototype.MsetValue = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MsetValueRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/mset", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.msetValue200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // MunsetValue - Unset multiple variables in the Value Space
    /**
     * This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
    **/
    SDK.prototype.MunsetValue = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MunsetValueRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/munset", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.munsetValue200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // New - Add an agent.
    /**
     * Add an agent.
    **/
    SDK.prototype.New = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.NewRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/add/{IP}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.new200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PauseNow - Pause the current agent.
    /**
     * Pause the current agent.
    **/
    SDK.prototype.PauseNow = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PauseNowRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/pause", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.pauseNow200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolCoapGetArgs - Show the agent's COAP argument structure
    /**
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolCoapGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolCoapGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolCoapGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolCoapGetConfig - Show the agent's COAP configuration
    /**
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolCoapGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolCoapGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configCoap = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolCoapGetStatistics - Show the agent's COAP statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolCoapGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolCoapGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolCoapGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolCoapGetStatsHdr - Show the COAP statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolCoapGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/coap/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolCoapGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolCoapGetTrace - Show the agent's COAP traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolCoapGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolCoapGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configCoap = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolCoapSetConfig - Set the agent's COAP configuration
    /**
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolCoapSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolCoapSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolCoapSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolCoapSetTrace - Set the agent's COAP traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolCoapSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolCoapSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolCoapSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolDhcpGetArgs - Show the agent's DHCP argument structure
    /**
     * Agent's DHCP configuration particulars
    **/
    SDK.prototype.ProtocolDhcpGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolDhcpGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolDhcpGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolDhcpGetConfig - Show the agent's DHCP configuration
    /**
     * Agent's DHCP configuration hwaddr,classid,add_options,script
    **/
    SDK.prototype.ProtocolDhcpGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolDhcpGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configDhcp = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolDhcpGetStatistics - Show the agent's DHCP statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolDhcpGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolDhcpGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolDhcpGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolDhcpGetStatsHdr - Show the DHCP statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolDhcpGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/dhcp/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolDhcpGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolDhcpGetTrace - Show the agent's DHCP traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolDhcpGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolDhcpGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configDhcp = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolDhcpParams - Show the parameters configured by the server in its DHCP-OFFER message
    /**
     * DHCP-OFFER message parameters
    **/
    SDK.prototype.ProtocolDhcpParams = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolDhcpParamsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/params", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolDhcpParams200ApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolDhcpSetConfig - Set the agent's DHCP configuration
    /**
     * Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolDhcpSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolDhcpSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolDhcpSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolDhcpSetTrace - Set the agent's DHCP traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolDhcpSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolDhcpSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolDhcpSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolGetConfig - Returns the protocol's configuration.
    /**
     * Returns the protocol's configuration.
    **/
    SDK.prototype.ProtocolGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/{prot}/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolGetConfig200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolIpmiGetArgs - Show the agent's IPMI argument structure
    /**
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolIpmiGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolIpmiGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolIpmiGetAttr - Show the outgoing message's attributes
    /**
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    SDK.prototype.ProtocolIpmiGetAttr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetAttrRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolIpmiGetAttr200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolIpmiGetConfig - Show the agent's IPMI configuration
    /**
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolIpmiGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configIpmi = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolIpmiGetStatistics - Show the agent's IPMI statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolIpmiGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolIpmiGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolIpmiGetStatsHdr - Show the IPMI statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolIpmiGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/ipmi/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolIpmiGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolIpmiGetTrace - Show the agent's IPMI traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolIpmiGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configIpmi = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolIpmiSetAttr - Set the outgoing message's attributes
    /**
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    SDK.prototype.ProtocolIpmiSetAttr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiSetAttrRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolIpmiSetAttr200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolIpmiSetConfig - Set the agent's IPMI configuration
    /**
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolIpmiSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolIpmiSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolIpmiSetTrace - Set the agent's IPMI traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolIpmiSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolIpmiSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientGetProtstate - Show the agent's MQTT TCP connection state
    /**
     * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
    **/
    SDK.prototype.ProtocolMqttClientGetProtstate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientGetProtstateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientGetProtstate200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientGetState - Show the agent's MQTT state
    /**
     * 0 means stopped, 1 means running
    **/
    SDK.prototype.ProtocolMqttClientGetState = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientGetStateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientGetState200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientMessageCard - Show the agent's current messages' cardinality
    /**
     * 0 or more
    **/
    SDK.prototype.ProtocolMqttClientMessageCard = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientMessageCardRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientMessageCard200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientMessageGet - Show the agent's message attributes
    /**
     * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
    **/
    SDK.prototype.ProtocolMqttClientMessageGet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientMessageGetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientMessageGet200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientMessageSet - Set the agent's message attributes
    /**
     * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
    **/
    SDK.prototype.ProtocolMqttClientMessageSet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientMessageSetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientMessageSet200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientResubscribe - Restart receiving messages from a subcription of the agent
    /**
     * Restarts a subscription
    **/
    SDK.prototype.ProtocolMqttClientResubscribe = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientResubscribeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientResubscribe200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientRuntimeAbort - Abort agent's MQTT TCP session without sending DISCONNECT command
    /**
     * Abort a connection
    **/
    SDK.prototype.ProtocolMqttClientRuntimeAbort = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientRuntimeAbortRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientRuntimeAbort200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientRuntimeConnect - Start agent's MQTT TCP session
    /**
     * Start a connection
    **/
    SDK.prototype.ProtocolMqttClientRuntimeConnect = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientRuntimeConnectRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientRuntimeConnect200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientRuntimeDisconnect - Disconnect agent's MQTT TCP session by sending DISCONNECT command
    /**
     * Graceful disconnect
    **/
    SDK.prototype.ProtocolMqttClientRuntimeDisconnect = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientRuntimeDisconnectRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientRuntimeDisconnect200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetBroker - Set the agent's MQTT TCP connection target broker
    /**
     * Broker IP address
    **/
    SDK.prototype.ProtocolMqttClientSetBroker = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetBrokerRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetBroker200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetCleansession - Set the agent's MQTT session
    /**
     * 1 for clean session , 0 not
    **/
    SDK.prototype.ProtocolMqttClientSetCleansession = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetCleansessionRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetCleansession200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetClientid - Set the agent's MQTT client ID
    /**
     * MQTT client ID
    **/
    SDK.prototype.ProtocolMqttClientSetClientid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetClientidRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetClientid200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetKeepalive - Set the agent's MQTT TCP keepalive
    /**
     * Keep alive the TCP connection
    **/
    SDK.prototype.ProtocolMqttClientSetKeepalive = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetKeepaliveRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetKeepalive200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetOnDisconnect - Set the agent's MQTT disconnection action
    /**
     * Action to take when MQTT session is disconnected
    **/
    SDK.prototype.ProtocolMqttClientSetOnDisconnect = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetOnDisconnectRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetOnDisconnect200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetPassword - Set the agent's MQTT client password
    /**
     * Client password
    **/
    SDK.prototype.ProtocolMqttClientSetPassword = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetPasswordRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetPassword200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetPort - Set the agent's MQTT TCP connection target port
    /**
     * target TCP port
    **/
    SDK.prototype.ProtocolMqttClientSetPort = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetPortRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetPort200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetUsername - Set the agent's MQTT client username
    /**
     * Client username
    **/
    SDK.prototype.ProtocolMqttClientSetUsername = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetUsernameRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetUsername200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetWillmsg - Set the agent's MQTT client's will
    /**
     * Will message
    **/
    SDK.prototype.ProtocolMqttClientSetWillmsg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetWillmsgRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetWillmsg200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetWillqos - Set the agent's MQTT will message's QOS field
    /**
     * QOS field
    **/
    SDK.prototype.ProtocolMqttClientSetWillqos = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetWillqosRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetWillqos200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetWillretain - Set the agent's MQTT retained will
    /**
     * Retaining will
    **/
    SDK.prototype.ProtocolMqttClientSetWillretain = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetWillretainRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetWillretain200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSetWilltopic - Set the agent's MQTT client will's topic
    /**
     * Will topic for the will message
    **/
    SDK.prototype.ProtocolMqttClientSetWilltopic = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetWilltopicRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSetWilltopic200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSubscribeCard - Show the agent's current subscriptions' cardinality
    /**
     * 0 or more
    **/
    SDK.prototype.ProtocolMqttClientSubscribeCard = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSubscribeCardRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSubscribeCard200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSubscribeGet - Show the agent's subscription attributes
    /**
     * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
    **/
    SDK.prototype.ProtocolMqttClientSubscribeGet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSubscribeGetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSubscribeGet200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientSubscribeSet - Set the agent's subscribe attributes
    /**
     * Attribute can not be properties .
    **/
    SDK.prototype.ProtocolMqttClientSubscribeSet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSubscribeSetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientSubscribeSet200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttClientUnsubscribe - Stops receiving messages from a subcription of the agent
    /**
     * Stops a subscription
    **/
    SDK.prototype.ProtocolMqttClientUnsubscribe = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientUnsubscribeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttClientUnsubscribe200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttGetArgs - Show the agent's MQTT argument structure
    /**
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolMqttGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttGetConfig - Show the agent's MQTT configuration
    /**
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolMqttGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configMqtt = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttGetStatistics - Show the agent's MQTT statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolMqttGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttGetStatsHdr - Show the MQTT statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolMqttGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/mqtt/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttGetTrace - Show the agent's MQTT traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolMqttGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configMqtt = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttSetConfig - Set the agent's MQTT configuration
    /**
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolMqttSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolMqttSetTrace - Set the agent's MQTT traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolMqttSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolMqttSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowChangeAttr - Change NETFLOW export attributes
    /**
     * Change attributes
    **/
    SDK.prototype.ProtocolNetflowChangeAttr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowChangeAttrRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowChangeAttr200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowChangeDfs - Change NETFLOW data export interval
    /**
     * Interval in msec .
    **/
    SDK.prototype.ProtocolNetflowChangeDfs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowChangeDfsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowChangeDfs200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowChangeTfs - Change NETFLOW template export interval
    /**
     * Interval in msec .
    **/
    SDK.prototype.ProtocolNetflowChangeTfs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowChangeTfsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowChangeTfs200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowGetArgs - Show the agent's NETFLOW argument structure
    /**
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolNetflowGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowGetConfig - Show the agent's NETFLOW configuration
    /**
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolNetflowGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configNetflow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowGetStatistics - Show the agent's NETFLOW statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolNetflowGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowGetStatsHdr - Show the NETFLOW statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolNetflowGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/netflow/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowGetTrace - Show the agent's NETFLOW traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolNetflowGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configNetflow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowHalt - Halt NETFLOW traffic
    /**
     * Halt NETFLOW traffic
    **/
    SDK.prototype.ProtocolNetflowHalt = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowHaltRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/halt", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowHalt200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowList - Show list of NETFLOW exports
    /**
     * Show list of NETFLOW exports
    **/
    SDK.prototype.ProtocolNetflowList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowList200ApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowReload - Reload NETFLOW configuration before resuming traffic
    /**
     * Reload NETFLOW configuration before resuming traffic
    **/
    SDK.prototype.ProtocolNetflowReload = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowReloadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/reload", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowReload200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowResume - Resuming traffic
    /**
     * Resuming traffic
    **/
    SDK.prototype.ProtocolNetflowResume = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowResumeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/resume", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowResume200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowSetCollector - Swap NETFLOW collector
    /**
     * Allow changing collector without stopping agent
    **/
    SDK.prototype.ProtocolNetflowSetCollector = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowSetCollectorRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowSetCollector200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowSetConfig - Set the agent's NETFLOW configuration
    /**
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolNetflowSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowSetFileName - Swap NETFLOW configuration file
    /**
     * Allow reloading the configuration file for an agent without stopping agent
    **/
    SDK.prototype.ProtocolNetflowSetFileName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowSetFileNameRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowSetFileName200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolNetflowSetTrace - Set the agent's NETFLOW traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolNetflowSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolNetflowSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolNetflowSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyGetArgs - Show the agent's PROXY argument structure
    /**
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolProxyGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxyGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyGetConfig - Show the agent's PROXY configuration
    /**
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolProxyGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configProxy = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyGetStatistics - Show the agent's PROXY statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolProxyGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxyGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyGetStatsHdr - Show the PROXY statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolProxyGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/proxy/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxyGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyGetTrace - Show the agent's PROXY traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolProxyGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configProxy = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyPortAdd - Add individual proxy target on the agent and the simulator host
    /**
     * Additional proxy target
    **/
    SDK.prototype.ProtocolProxyPortAdd = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyPortAddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxyPortAdd200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyPortIsstarted - Check individual target
    /**
     * Check individual target
    **/
    SDK.prototype.ProtocolProxyPortIsstarted = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyPortIsstartedRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxyPortIsstarted200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyPortList - List all proxy targets
    SDK.prototype.ProtocolProxyPortList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyPortListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxyPortList200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyPortRemove - Remove individual proxy target on the agent and the simulator host
    /**
     * Remove proxy target
    **/
    SDK.prototype.ProtocolProxyPortRemove = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyPortRemoveRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxyPortRemove200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyPortStart - Start additional target
    /**
     * Start additional target
    **/
    SDK.prototype.ProtocolProxyPortStart = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyPortStartRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxyPortStart200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxyPortStop - Stop additional target
    /**
     * Stop additional target
    **/
    SDK.prototype.ProtocolProxyPortStop = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxyPortStopRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxyPortStop200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxySetConfig - Set the agent's PROXY configuration
    /**
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolProxySetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxySetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxySetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolProxySetTrace - Set the agent's PROXY traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolProxySetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolProxySetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolProxySetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowGetArgs - Show the agent's SFLOW argument structure
    /**
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSflowGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSflowGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSflowGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowGetConfig - Show the agent's SFLOW configuration
    /**
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSflowGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSflowGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSflow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowGetStatistics - Show the agent's SFLOW statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolSflowGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSflowGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSflowGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowGetStatsHdr - Show the SFLOW statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolSflowGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/sflow/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSflowGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowGetTrace - Show the agent's SFLOW traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolSflowGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSflowGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSflow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowHalt - Halt SFLOW traffic
    /**
     * Halt SFLOW traffic
    **/
    SDK.prototype.ProtocolSflowHalt = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSflowHaltRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/halt", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSflowHalt200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowReload - Reload SFLOW configuration before resuming traffic
    /**
     * Reload SFLOW configuration before resuming traffic
    **/
    SDK.prototype.ProtocolSflowReload = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSflowReloadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/reload", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSflowReload200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowResume - Resuming traffic
    /**
     * Resuming traffic
    **/
    SDK.prototype.ProtocolSflowResume = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSflowResumeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/resume", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSflowResume200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowSetConfig - Set the agent's SFLOW configuration
    /**
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSflowSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSflowSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSflowSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSflowSetTrace - Set the agent's SFLOW traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolSflowSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSflowSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSflowSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpGetArgs - Show the agent's SNMPTCP argument structure
    /**
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSnmptcpGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmptcpGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpGetConfig - Show the agent's SNMPTCP configuration
    /**
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSnmptcpGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSnmptcp = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpGetStatistics - Show the agent's SNMPTCP statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolSnmptcpGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmptcpGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpGetStatsHdr - Show the SNMPTCP statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolSnmptcpGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/snmptcp/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmptcpGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpGetTrace - Show the agent's SNMPTCP traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolSnmptcpGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSnmptcp = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolSnmptcpIpaliasDisable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpIpaliasDisableRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmptcpIpaliasDisable200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolSnmptcpIpaliasEnable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpIpaliasEnableRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmptcpIpaliasEnable200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolSnmptcpIpaliasIsenabled = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpIpaliasIsenabledRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmptcpIpaliasIsenabled200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpIpaliasList - List all IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolSnmptcpIpaliasList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpIpaliasListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.ipAliases = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpSetConfig - Set the agent's SNMPTCP configuration
    /**
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSnmptcpSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmptcpSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmptcpSetTrace - Set the agent's SNMPTCP traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolSnmptcpSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmptcpSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmptcpSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3AccessAdd - Adds a new access entry with the specified parameters.
    /**
     * Adds a new access entry with the specified parameters.
    **/
    SDK.prototype.ProtocolSnmpv3AccessAdd = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3AccessAddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3AccessAdd200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3AccessClear - Clears all access entries.
    /**
     * Clears all access entries.
    **/
    SDK.prototype.ProtocolSnmpv3AccessClear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3AccessClearRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3AccessClear200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3AccessDel - Deletes the specified access entry.
    /**
     * Deletes the specified access entry.
    **/
    SDK.prototype.ProtocolSnmpv3AccessDel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3AccessDelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3AccessDel200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3AccessList - Returns the current acccess entries as an array of strings.
    /**
     * Returns the current acccess entries as an array of strings.
    **/
    SDK.prototype.ProtocolSnmpv3AccessList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3AccessListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3AccessList200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3GetConfig - Returns the SNMPv3 configuration.
    /**
     * Returns the SNMPv3 configuration.
    **/
    SDK.prototype.ProtocolSnmpv3GetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3GetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSnmPv3 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3GetContextEngineid - Retrieves the contextEngineID for the agent instance.
    /**
     * Retrieves the contextEngineID for the agent instance.
    **/
    SDK.prototype.ProtocolSnmpv3GetContextEngineid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3GetContextEngineidRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3GetContextEngineid200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3GetEngineboots - Retrieves the number of times the agent has been restarted.
    /**
     * Retrieves the number of times the agent has been restarted.
    **/
    SDK.prototype.ProtocolSnmpv3GetEngineboots = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3GetEnginebootsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3GetEngineboots200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3GetEngineid - For started agents, retrieves the current engineID in use by the snmpv3 module.
    /**
     * For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
    **/
    SDK.prototype.ProtocolSnmpv3GetEngineid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3GetEngineidRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3GetEngineid200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3GetEnginetime - Retrieves the time in seconds for which the agent has been running.
    /**
     * Retrieves the time in seconds for which the agent has been running.
    **/
    SDK.prototype.ProtocolSnmpv3GetEnginetime = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3GetEnginetimeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3GetEnginetime200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3GroupAdd - Adds a new group entry with the specified parameters.
    /**
     * Adds a new group entry with the specified parameters.
    **/
    SDK.prototype.ProtocolSnmpv3GroupAdd = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3GroupAddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3GroupAdd200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3GroupClear - Clears all group entries.
    /**
     * Clears all group entries.
    **/
    SDK.prototype.ProtocolSnmpv3GroupClear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3GroupClearRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3GroupClear200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3GroupDel - Deletes the specified group entry.
    /**
     * Deletes the specified group entry.
    **/
    SDK.prototype.ProtocolSnmpv3GroupDel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3GroupDelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3GroupDel200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3GroupList - Returns the current group entries as an array of strings.
    /**
     * Returns the current group entries as an array of strings.
    **/
    SDK.prototype.ProtocolSnmpv3GroupList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3GroupListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3GroupList200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3SetConfig - Changes the SNMPv3 configuration.
    /**
     * Changes the SNMPv3 configuration.
    **/
    SDK.prototype.ProtocolSnmpv3SetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3SetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3SetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3UserAdd - Adds a new user entry with the specified parameters.
    /**
     * Adds a new user entry with the specified parameters.
    **/
    SDK.prototype.ProtocolSnmpv3UserAdd = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3UserAddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3UserAdd200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3UserClear - Clears all user entries.
    /**
     * Clears all user entries.
    **/
    SDK.prototype.ProtocolSnmpv3UserClear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3UserClearRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3UserClear200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3UserDel - Deletes the specified user entry.
    /**
     * Deletes the specified user entry.
    **/
    SDK.prototype.ProtocolSnmpv3UserDel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3UserDelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3UserDel200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3UserList - Returns the current user entries as a Tcl list.
    /**
     * Returns the current user entries as a Tcl list.
    **/
    SDK.prototype.ProtocolSnmpv3UserList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3UserListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3UserList200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3UsmSave - Saves current user settings in the currently loaded USM config file.
    /**
     * Saves current user settings in the currently loaded USM config file.
    **/
    SDK.prototype.ProtocolSnmpv3UsmSave = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3UsmSaveRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3UsmSave200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3UsmSaveas - Saves current user settings in the specified USM config file.
    /**
     * Saves current user settings in the specified USM config file.
    **/
    SDK.prototype.ProtocolSnmpv3UsmSaveas = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3UsmSaveasRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3UsmSaveas200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3VacmSave - Saves current group, access, view settings in the currently loaded VACM config file.
    /**
     * Saves current group, access, view settings in the currently loaded VACM config file.
    **/
    SDK.prototype.ProtocolSnmpv3VacmSave = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3VacmSaveRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3VacmSave200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3VacmSaveas - Saves current group, access, view settings in the specified VACM config file.
    /**
     * Saves current group, access, view settings in the specified VACM config file.
    **/
    SDK.prototype.ProtocolSnmpv3VacmSaveas = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3VacmSaveasRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3VacmSaveas200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3ViewAdd - Adds a new view entry with the specified parameters.
    /**
     * Adds a new view entry with the specified parameters.
    **/
    SDK.prototype.ProtocolSnmpv3ViewAdd = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3ViewAddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3ViewAdd200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3ViewClear - Clears all view entries.
    /**
     * Clears all view entries.
    **/
    SDK.prototype.ProtocolSnmpv3ViewClear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3ViewClearRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3ViewClear200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3ViewDel - Deletes the specified view entry.
    /**
     * Deletes the specified view entry.
    **/
    SDK.prototype.ProtocolSnmpv3ViewDel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3ViewDelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3ViewDel200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSnmpv3ViewList - Returns the current view entries as an array of strings.
    /**
     * Returns the current view entries as an array of strings.
    **/
    SDK.prototype.ProtocolSnmpv3ViewList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSnmpv3ViewListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSnmpv3ViewList200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshGetArgs - Show the agent's SSH argument structure
    /**
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSshGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSshGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshGetConfig - Show the agent's SSH configuration
    /**
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSshGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSsh = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshGetStatistics - Show the agent's SSH statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolSshGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSshGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshGetStatsHdr - Show the SSH statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolSshGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/ssh/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSshGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshGetTrace - Show the agent's SSH traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolSshGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSsh = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolSshIpaliasDisable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshIpaliasDisableRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSshIpaliasDisable200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolSshIpaliasEnable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshIpaliasEnableRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSshIpaliasEnable200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolSshIpaliasIsenabled = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshIpaliasIsenabledRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSshIpaliasIsenabled200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshIpaliasList - List all IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolSshIpaliasList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshIpaliasListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.ipAliases = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshSetConfig - Set the agent's SSH configuration
    /**
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSshSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSshSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSshSetTrace - Set the agent's SSH traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolSshSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSshSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSshSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogGetArgs - Show the agent's SYSLOG argument structure
    /**
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSyslogGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSyslogGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSyslogGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogGetAttr - Show the outgoing message's attributes
    /**
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    SDK.prototype.ProtocolSyslogGetAttr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSyslogGetAttrRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSyslogGetAttr200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogGetConfig - Show the agent's SYSLOG configuration
    /**
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSyslogGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSyslogGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSyslog = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogGetStatistics - Show the agent's SYSLOG statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolSyslogGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSyslogGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSyslogGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogGetStatsHdr - Show the SYSLOG statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolSyslogGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/syslog/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSyslogGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogGetTrace - Show the agent's SYSLOG traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolSyslogGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSyslogGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSyslog = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogSend - Set the agent's SYSLOG traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolSyslogSend = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSyslogSendRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSyslogSend200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogSetAttr - Set the outgoing message's attributes
    /**
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    SDK.prototype.ProtocolSyslogSetAttr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSyslogSetAttrRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSyslogSetAttr200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogSetConfig - Set the agent's SYSLOG configuration
    /**
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolSyslogSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSyslogSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSyslogSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolSyslogSetTrace - Set the agent's SYSLOG traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolSyslogSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolSyslogSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolSyslogSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetConnectionLogon - Changes the connection's current logon.
    /**
     * Logon change allows (hidden) commands for a different access mode to run.
    **/
    SDK.prototype.ProtocolTelnetConnectionLogon = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetConnectionLogonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetConnectionLogon200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetConnectionRequest - Executes the command asynchronously .
    /**
     * Equivalent of the command typed in by the user.
    **/
    SDK.prototype.ProtocolTelnetConnectionRequest = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetConnectionRequestRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetConnectionRequest200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetConnectionSignal - Triggers the asynchronous signal event with the specified signal name
    /**
     * Signal name is either connect or idle
    **/
    SDK.prototype.ProtocolTelnetConnectionSignal = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetConnectionSignalRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetConnectionSignal200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetGetArgs - Show the agent's TELNET argument structure
    /**
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolTelnetGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetGetConfig - Show the agent's TELNET configuration
    /**
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolTelnetGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configTelnet = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetGetStatistics - Show the agent's TELNET statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolTelnetGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetGetStatsHdr - Show the TELNET statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolTelnetGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/telnet/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetGetTrace - Show the agent's TELNET traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolTelnetGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configTelnet = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolTelnetIpaliasDisable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetIpaliasDisableRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetIpaliasDisable200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolTelnetIpaliasEnable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetIpaliasEnableRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetIpaliasEnable200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolTelnetIpaliasIsenabled = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetIpaliasIsenabledRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetIpaliasIsenabled200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetIpaliasList - List all IP aliases on the agent and the simulator host
    /**
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    SDK.prototype.ProtocolTelnetIpaliasList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetIpaliasListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.ipAliases = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetServerGetConnections - Show the agent's TELNET connections
    /**
     * IDs of all connected connections
    **/
    SDK.prototype.ProtocolTelnetServerGetConnections = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetServerGetConnectionsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetServerGetConnections200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetServerGetKeymap - Show the agent's TELNET keymap file name
    /**
     * Keymap file name
    **/
    SDK.prototype.ProtocolTelnetServerGetKeymap = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetServerGetKeymapRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetServerGetKeymap200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetServerGetRulesdb - Show the agent's TELNET rules db file name
    /**
     * Rules db file name
    **/
    SDK.prototype.ProtocolTelnetServerGetRulesdb = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetServerGetRulesdbRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetServerGetRulesdb200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetServerGetState - Show the agent's TELNET server state
    /**
     * Return 1 means accepting connections, 0 not
    **/
    SDK.prototype.ProtocolTelnetServerGetState = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetServerGetStateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetServerGetState200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetServerGetUserdb - Show the agent's TELNET user db file name
    /**
     * User db file name
    **/
    SDK.prototype.ProtocolTelnetServerGetUserdb = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetServerGetUserdbRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetServerGetUserdb200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetServerGetUsers - Show the agent's TELNET users
    /**
     * List of users
    **/
    SDK.prototype.ProtocolTelnetServerGetUsers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetServerGetUsersRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.telnetUsers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetSetConfig - Set the agent's TELNET configuration
    /**
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolTelnetSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTelnetSetTrace - Set the agent's TELNET traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolTelnetSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTelnetSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTelnetSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpGetArgs - Show the agent's TFTP argument structure
    /**
     * Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolTftpGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpGetConfig - Show the agent's TFTP configuration
    /**
     * Agent's TFTP configuration
    **/
    SDK.prototype.ProtocolTftpGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configTftp = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpGetStatistics - Show the agent's TFTP statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolTftpGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpGetStatsHdr - Show the TFTP statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolTftpGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/tftp/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpGetTrace - Show the agent's TFTP traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolTftpGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configTftp = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpSessionGetParameter - Show a parameter of a TFTP sesssion
    /**
     * Parameter is server , port , or dstfile
    **/
    SDK.prototype.ProtocolTftpSessionGetParameter = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpSessionGetParameterRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpSessionGetParameter200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpSessionRead - Create a read session to download srcfile from server
    /**
     * Session ID is returned
    **/
    SDK.prototype.ProtocolTftpSessionRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpSessionReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpSessionRead200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpSessionSetParameter - Set a parameter of a TFTP sesssion
    /**
     * Parameter is server , port , or dstfile
    **/
    SDK.prototype.ProtocolTftpSessionSetParameter = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpSessionSetParameterRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpSessionSetParameter200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpSessionStart - Start a TFTP sesssion
    /**
     * Start uploading or downloading the file
    **/
    SDK.prototype.ProtocolTftpSessionStart = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpSessionStartRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpSessionStart200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpSessionStatus - Check a TFTP sesssion's status
    /**
     * Status includes running state, bytes transfered, and time elapsed
    **/
    SDK.prototype.ProtocolTftpSessionStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpSessionStatusRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpSessionStatus200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpSessionStop - Stop a TFTP sesssion
    /**
     * Stop uploading or downloading the file
    **/
    SDK.prototype.ProtocolTftpSessionStop = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpSessionStopRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpSessionStop200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpSessionWrite - Create a read session to upload srcfile to server
    /**
     * Session ID is returned
    **/
    SDK.prototype.ProtocolTftpSessionWrite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpSessionWriteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpSessionWrite200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpSetConfig - Set the agent's TFTP configuration
    /**
     * Agent's TFTP configuration
    **/
    SDK.prototype.ProtocolTftpSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTftpSetTrace - Set the agent's TFTP traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolTftpSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTftpSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTftpSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTodGetArgs - Show the agent's TOD argument structure
    /**
     * Agent's TOD configuration
    **/
    SDK.prototype.ProtocolTodGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTodGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTodGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTodGetConfig - Show the agent's TOD configuration
    /**
     * Agent's TOD configuration
    **/
    SDK.prototype.ProtocolTodGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTodGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configTod = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTodGetStatistics - Show the agent's TOD statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolTodGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTodGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTodGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTodGetStatsHdr - Show the TOD statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolTodGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/tod/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTodGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTodGetTrace - Show the agent's TOD traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolTodGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTodGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configTod = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTodGettime - Retrieve TOD time
    /**
     * Retrive time from server
    **/
    SDK.prototype.ProtocolTodGettime = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTodGettimeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTodGettime200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTodSetConfig - Set the agent's TOD configuration
    /**
     * Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolTodSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTodSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTodSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolTodSetTrace - Set the agent's TOD traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolTodSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolTodSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolTodSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebGetArgs - Show the agent's WEB argument structure
    /**
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolWebGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebGetArgsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/args", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebGetArgs200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebGetConfig - Show the agent's WEB configuration
    /**
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolWebGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebGetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/config", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configWeb = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebGetStatistics - Show the agent's WEB statistics
    /**
     * Statistics of fields indicated in the headers
    **/
    SDK.prototype.ProtocolWebGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebGetStatisticsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/statistics", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebGetStatistics200ApplicationJsonInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebGetStatsHdr - Show the WEB statistics headers
    /**
     * The headers of statistics fields
    **/
    SDK.prototype.ProtocolWebGetStatsHdr = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/web/get/stats_hdr";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebGetStatsHdr200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebGetTrace - Show the agent's WEB traffic tracing
    /**
     * Trace 1 means enabled, 0 means not
    **/
    SDK.prototype.ProtocolWebGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebGetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/trace", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.configWeb = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebPortAdd - Add the agent's WEB port
    /**
     * Add port
    **/
    SDK.prototype.ProtocolWebPortAdd = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebPortAddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebPortAdd200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebPortExists - Show the agent's WEB port
    /**
     * Check the port. 1 means existing, 0 means not
    **/
    SDK.prototype.ProtocolWebPortExists = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebPortExistsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebPortExists200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebPortRemove - Remove the agent's WEB port
    /**
     * Remove port
    **/
    SDK.prototype.ProtocolWebPortRemove = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebPortRemoveRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebPortRemove200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebPortSet - Set the agent's WEB port attribute
    /**
     * Set port
    **/
    SDK.prototype.ProtocolWebPortSet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebPortSetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebPortSet200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebPortStart - Start the agent's WEB port
    /**
     * Start port
    **/
    SDK.prototype.ProtocolWebPortStart = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebPortStartRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebPortStart200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebPortStop - Stop the agent's WEB port
    /**
     * Stop port
    **/
    SDK.prototype.ProtocolWebPortStop = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebPortStopRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebPortStop200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebSetConfig - Set the agent's WEB configuration
    /**
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    SDK.prototype.ProtocolWebSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebSetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebSetConfig200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProtocolWebSetTrace - Set the agent's WEB traffic tracing
    /**
     * 1 to enable, 0 to disable
    **/
    SDK.prototype.ProtocolWebSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolWebSetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.protocolWebSetTrace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Reload - Reload the current agent.
    /**
     * This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
    **/
    SDK.prototype.Reload = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReloadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/reload", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.reload200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Remove - Remove an entry from a table.
    /**
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    SDK.prototype.Remove = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/remove/{object}/{instance}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.remove200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Resume - Resume the current agent.
    /**
     * Resume the current agent.
    **/
    SDK.prototype.Resume = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ResumeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/resume", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resume200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Save - Save agent MIB values.
    /**
     * Save agent MIB values.
    **/
    SDK.prototype.Save = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SaveRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/save", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.save200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetDelay - one-way transit delay in msec
    /**
     * The minimum granularity is 10 msec.
    **/
    SDK.prototype.SetDelay = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetDelayRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/delay/{delay}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setDelay200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetDrops - drop rate (every N-th PDU)
    /**
     * 0 means no drops
    **/
    SDK.prototype.SetDrops = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetDropsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/drops/{drops}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setDrops200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetHost - host address of the agent.
    /**
     * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
    **/
    SDK.prototype.SetHost = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetHostRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/host/{host}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setHost200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetInformTimeout - timeout in seconds for retransmitting INFORM PDUs
    /**
     * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
    **/
    SDK.prototype.SetInformTimeout = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetInformTimeoutRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setInformTimeout200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetInterface - network interface card for the agent
    /**
     * network interface card for the agent
    **/
    SDK.prototype.SetInterface = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetInterfaceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/interface/{interface}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setInterface200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetLog - The current log file for the Simulator.
    /**
     * The current log file for the Simulator.
    **/
    SDK.prototype.SetLog = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetLogRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/set/log";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setLog200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetMask - subnet mask of the agent.
    /**
     * subnet mask of the agent.
    **/
    SDK.prototype.SetMask = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetMaskRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/mask/{mask}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setMask200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetMibs - set of MIBs, simulations and scenarios
    /**
     * set of MIBs, simulations and scenarios
    **/
    SDK.prototype.SetMibs = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetMibsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/mibs", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setMibs200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetNetdev - The network address of the host where the MIMIC simulator is running.
    /**
     * The network address of the host where the MIMIC simulator is running.
    **/
    SDK.prototype.SetNetdev = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/set/netdev";
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setNetdev200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetOiddir - MIB directory of the agent.
    /**
     * MIB directory of the agent.
    **/
    SDK.prototype.SetOiddir = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetOiddirRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/oiddir/{oiddir}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setOiddir200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetOwner - owner of the agent
    /**
     * owner of the agent
    **/
    SDK.prototype.SetOwner = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetOwnerRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/owner/{owner}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setOwner200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetPdusize - maximum PDU size
    /**
     * The limit for this configurable is 65536
    **/
    SDK.prototype.SetPdusize = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetPdusizeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/pdusize/{pdusize}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setPdusize200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetPort - port number
    /**
     * port number
    **/
    SDK.prototype.SetPort = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetPortRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/port/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setPort200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetPrivdir - private directory of the agent.
    /**
     * private directory of the agent.
    **/
    SDK.prototype.SetPrivdir = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetPrivdirRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/privdir/{privdir}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setPrivdir200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetProtocols - protocols supported by agent as a comma-separated list
    /**
     * protocols supported by agent as a comma-separated list
    **/
    SDK.prototype.SetProtocols = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetProtocolsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/protocol", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setProtocols200ApplicationJsonStringIntegers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetReadCommunity - read community string
    /**
     * read community string
    **/
    SDK.prototype.SetReadCommunity = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetReadCommunityRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/read/{read}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setReadCommunity200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetStarttime - relative start time
    /**
     * relative start time
    **/
    SDK.prototype.SetStarttime = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetStarttimeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/start/{start}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setStarttime200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetState - Set the state of a MIB object object
    /**
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    SDK.prototype.SetState = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetStateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/state/set/{object}/{state}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setState200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetTrace - SNMP PDU tracing
    /**
     * SNMP PDU tracing
    **/
    SDK.prototype.SetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetTraceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/trace/{trace}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setTrace200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetValidate - SNMP SET validation policy
    /**
     * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
    **/
    SDK.prototype.SetValidate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetValidateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/validate/{validate}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setValidate200ApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetValue - Set a variable in the Value Space.
    /**
     * NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
    **/
    SDK.prototype.SetValue = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetValueRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setValue200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SetWriteCommunity - write community string
    /**
     * write community string
    **/
    SDK.prototype.SetWriteCommunity = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetWriteCommunityRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/write/{write}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.setWriteCommunity200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SplitOid - Split the numerical OID into the object OID and instance OID.
    /**
     * This is useful if you have an OID which is a combination of object and instance.
    **/
    SDK.prototype.SplitOid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SplitOidRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/split/{OID}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.splitOid200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Start - Start the current agent.
    /**
     * For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
    **/
    SDK.prototype.Start = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/start", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.start200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StartAllAgents - Start MIMIC.
    /**
     * Start MIMIC.
    **/
    SDK.prototype.StartAllAgents = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/start";
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.startAllAgents200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StartIpalias - Starts an existing ipalias for the agent.
    /**
     * port defaults to 161 if not specified.
    **/
    SDK.prototype.StartIpalias = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartIpaliasRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/start/{IP}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.startIpalias200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StatusIpalias - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
    /**
     * port defaults to 161 if not specified.
    **/
    SDK.prototype.StatusIpalias = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StatusIpaliasRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/status/{IP}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.statusIpalias200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Stop - Show the agent's primary IP address
    /**
     * Agent primary IP address
    **/
    SDK.prototype.Stop = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StopRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/stop", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.stop200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StopAllAgents - Stop MIMIC.
    /**
     * Stop MIMIC.
    **/
    SDK.prototype.StopAllAgents = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/stop";
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.stopAllAgents200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StopIpalias - Stops an existing ipalias for the agent.
    /**
     * port defaults to 161 if not specified.
    **/
    SDK.prototype.StopIpalias = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StopIpaliasRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.stopIpalias200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StoreExists - This command can be used as a predicate to ascertain the existence of a given variable.
    /**
     * It returns "1" if the variable exists, else "0".
    **/
    SDK.prototype.StoreExists = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StoreExistsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/store/exists/{var}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.storeExists200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StoreGet - Fetches the value associated with a variable.
    /**
     * The value will be returned as a string (like all Tcl values).
    **/
    SDK.prototype.StoreGet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StoreGetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/store/get/{var}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.storeGet200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StoreList - This command will return the list of variables in the said scope.
    /**
     * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
    **/
    SDK.prototype.StoreList = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/store/list";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.storeList200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StoreLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
    /**
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
    **/
    SDK.prototype.StoreLreplace = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StoreLreplaceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/store/lreplace/{var}/{index}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.storeLreplace200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StorePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
    /**
     * It returns "1" if the variable is persistent, else "0".
    **/
    SDK.prototype.StorePersists = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StorePersistsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/store/persists/{var}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.storePersists200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StoreSave - This operation flushes all global objects which need to be made persistent to disk.
    /**
     * The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
    **/
    SDK.prototype.StoreSave = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/set/persistent";
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.storeSave200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StoreSet - Set the variable store for the global storage
    /**
     * Persist 1 means persistent , 0 means non-persistent
    **/
    SDK.prototype.StoreSet = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StoreSetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/store/set/{var}/{persist}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.storeSet200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StoreUnset - Deletes a variable which is currently defined.
    /**
     * This will cleanup persistent variables if needed
    **/
    SDK.prototype.StoreUnset = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StoreUnsetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/store/unset/{var}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.storeUnset200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Terminate - Terminate the MIMIC daemon.
    /**
     * Terminate the MIMIC daemon.
    **/
    SDK.prototype.Terminate = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/terminate";
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.terminate200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // TrapConfigAdd - Add a trap destination to the set of destinations.
    /**
     * Add a trap destination to the set of destinations.
    **/
    SDK.prototype.TrapConfigAdd = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TrapConfigAddRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/config/add/{IP}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.trapConfigAdd200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // TrapConfigDel - Remove a trap destination from the set of destinations.
    /**
     * Remove a trap destination from the set of destinations.
    **/
    SDK.prototype.TrapConfigDel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TrapConfigDelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.trapConfigDel200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // TrapConfigList - List the set of trap destinations for this agent instance.
    /**
     * Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
    **/
    SDK.prototype.TrapConfigList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TrapConfigListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/config/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.trapDests = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // TrapList - List the outstanding asynchronous traps for this agent instance.
    /**
     * List the outstanding asynchronous traps for this agent instance.
    **/
    SDK.prototype.TrapList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TrapListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/list", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.trapList200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UnsetValue - Unset a variable in the Value Space in order to free its memory.
    /**
     * Only variables that have previously been set can be unset.
    **/
    SDK.prototype.UnsetValue = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UnsetValueRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unsetValue200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
