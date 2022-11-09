import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Adds/Overwrites the user entry in the access control database.
    **/
    AccessAdd(req: operations.AccessAddRequest, config?: AxiosRequestConfig): Promise<operations.AccessAddResponse>;
    /**
     * Using '*' for user clears all the users.
    **/
    AccessDel(req: operations.AccessDelRequest, config?: AxiosRequestConfig): Promise<operations.AccessDelResponse>;
    /**
     * If nothing is specified then this returns "".
    **/
    AccessGetAcldb(config?: AxiosRequestConfig): Promise<operations.AccessGetAcldbResponse>;
    /**
     * If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
    **/
    AccessGetAdmindir(config?: AxiosRequestConfig): Promise<operations.AccessGetAdmindirResponse>;
    /**
     * If nothing is specified in admin/settings.cfg then returns "".
    **/
    AccessGetAdminuser(config?: AxiosRequestConfig): Promise<operations.AccessGetAdminuserResponse>;
    /**
     * 0 indicates that it is disabled, 1 indicates it is enabled.
    **/
    AccessGetEnabled(config?: AxiosRequestConfig): Promise<operations.AccessGetEnabledResponse>;
    /**
     * Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
    **/
    AccessList(config?: AxiosRequestConfig): Promise<operations.AccessListResponse>;
    /**
     * If filename is not specified then the currently set 'acldb' parameter is used.
    **/
    AccessLoad(req: operations.AccessLoadRequest, config?: AxiosRequestConfig): Promise<operations.AccessLoadResponse>;
    /**
     * If filename is not specified then the currently set 'acldb' parameter is used.
    **/
    AccessSave(req: operations.AccessSaveRequest, config?: AxiosRequestConfig): Promise<operations.AccessSaveResponse>;
    /**
     * This will be used for subsequent load and save operations.
    **/
    AccessSetAcldb(req: operations.AccessSetAcldbRequest, config?: AxiosRequestConfig): Promise<operations.AccessSetAcldbResponse>;
    /**
     * 0 indicates disabled, 1 indicates enabled.
    **/
    AccessSetEnabled(req: operations.AccessSetEnabledRequest, config?: AxiosRequestConfig): Promise<operations.AccessSetEnabledResponse>;
    /**
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    Add(req: operations.AddRequest, config?: AxiosRequestConfig): Promise<operations.AddResponse>;
    /**
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
    **/
    AddDaemonTimerScript(req: operations.AddDaemonTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.AddDaemonTimerScriptResponse>;
    /**
     * port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
    **/
    AddIpalias(req: operations.AddIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.AddIpaliasResponse>;
    /**
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
    **/
    AddTimerScript(req: operations.AddTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.AddTimerScriptResponse>;
    /**
     * For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
    **/
    AgentRemove(req: operations.AgentRemoveRequest, config?: AxiosRequestConfig): Promise<operations.AgentRemoveResponse>;
    /**
     * This command copies the variable store from the other agent to this agent.
    **/
    AgentStoreCopy(req: operations.AgentStoreCopyRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreCopyResponse>;
    /**
     * It returns "1" if the variable exists, else "0".
    **/
    AgentStoreExists(req: operations.AgentStoreExistsRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreExistsResponse>;
    /**
     * The value will be returned as a string (like all Tcl values).
    **/
    AgentStoreGet(req: operations.AgentStoreGetRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreGetResponse>;
    /**
     * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
    **/
    AgentStoreList(req: operations.AgentStoreListRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreListResponse>;
    /**
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
    **/
    AgentStoreLreplace(req: operations.AgentStoreLreplaceRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreLreplaceResponse>;
    /**
     * It returns "1" if the variable is persistent, else "0".
    **/
    AgentStorePersists(req: operations.AgentStorePersistsRequest, config?: AxiosRequestConfig): Promise<operations.AgentStorePersistsResponse>;
    /**
     * The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
    **/
    AgentStoreSet(req: operations.AgentStoreSetRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreSetResponse>;
    /**
     * This will cleanup persistent variables if needed
    **/
    AgentStoreUnset(req: operations.AgentStoreUnsetRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreUnsetResponse>;
    /**
     * Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
    **/
    CfgLoad(req: operations.CfgLoadRequest, config?: AxiosRequestConfig): Promise<operations.CfgLoadResponse>;
    /**
     * Clear the lab configuration.
    **/
    CfgNew(req: operations.CfgNewRequest, config?: AxiosRequestConfig): Promise<operations.CfgNewResponse>;
    /**
     * Save the lab configuration.
    **/
    CfgSave(config?: AxiosRequestConfig): Promise<operations.CfgSaveResponse>;
    /**
     * Save the lab configuration in file.
    **/
    CfgSaveas(req: operations.CfgSaveasRequest, config?: AxiosRequestConfig): Promise<operations.CfgSaveasResponse>;
    /**
     * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
    **/
    DelDaemonTimerScript(req: operations.DelDaemonTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.DelDaemonTimerScriptResponse>;
    /**
     * port defaults to 161 if not specified.
    **/
    DelIpalias(req: operations.DelIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.DelIpaliasResponse>;
    /**
     * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
    **/
    DelTimerScript(req: operations.DelTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.DelTimerScriptResponse>;
    /**
     * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
    **/
    EvalValue(req: operations.EvalValueRequest, config?: AxiosRequestConfig): Promise<operations.EvalValueResponse>;
    /**
     * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
    **/
    FromAdd(req: operations.FromAddRequest, config?: AxiosRequestConfig): Promise<operations.FromAddResponse>;
    /**
     * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
    **/
    FromDel(req: operations.FromDelRequest, config?: AxiosRequestConfig): Promise<operations.FromDelResponse>;
    /**
     * This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
    **/
    FromList(req: operations.FromListRequest, config?: AxiosRequestConfig): Promise<operations.FromListResponse>;
    /**
     * This list is guaranteed to be sorted into increasing order.
    **/
    GetActiveDataList(config?: AxiosRequestConfig): Promise<operations.GetActiveDataListResponse>;
    /**
     * This list is guaranteed to be sorted into increasing order.
    **/
    GetActiveList(config?: AxiosRequestConfig): Promise<operations.GetActiveListResponse>;
    /**
     * 0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
    **/
    GetAgentState(req: operations.GetAgentStateRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentStateResponse>;
    /**
     * Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
    **/
    GetCfgFileChanged(config?: AxiosRequestConfig): Promise<operations.GetCfgFileChangedResponse>;
    /**
     * In the case of multi-user access this command returns a different configuration file loaded for each user.
    **/
    GetCfgfile(config?: AxiosRequestConfig): Promise<operations.GetCfgfileResponse>;
    /**
     * has the agent value space changed?
    **/
    GetChanged(req: operations.GetChangedRequest, config?: AxiosRequestConfig): Promise<operations.GetChangedResponse>;
    /**
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
    **/
    GetChangedConfigList(config?: AxiosRequestConfig): Promise<operations.GetChangedConfigListResponse>;
    /**
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
    **/
    GetChangedStateList(config?: AxiosRequestConfig): Promise<operations.GetChangedStateListResponse>;
    /**
     * The number of clients currently connected to the daemon.
    **/
    GetClients(config?: AxiosRequestConfig): Promise<operations.GetClientsResponse>;
    /**
     * has the lab configuration changed?
    **/
    GetConfigChanged(req: operations.GetConfigChangedRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigChangedResponse>;
    /**
     * This list is guaranteed to be sorted into increasing order.
    **/
    GetConfiguredList(config?: AxiosRequestConfig): Promise<operations.GetConfiguredListResponse>;
    /**
     * The set of protocols supported by the Simulator.
    **/
    GetDaemonProtocols(config?: AxiosRequestConfig): Promise<operations.GetDaemonProtocolsResponse>;
    /**
     * The minimum granularity is 10 msec.
    **/
    GetDelay(req: operations.GetDelayRequest, config?: AxiosRequestConfig): Promise<operations.GetDelayResponse>;
    /**
     * drop rate (every N-th PDU). 0 means no drops.
    **/
    GetDrops(req: operations.GetDropsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropsResponse>;
    /**
     * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
    **/
    GetHost(req: operations.GetHostRequest, config?: AxiosRequestConfig): Promise<operations.GetHostResponse>;
    /**
     * Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
    **/
    GetInfo(req: operations.GetInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetInfoResponse>;
    /**
     * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
    **/
    GetInformTimeout(req: operations.GetInformTimeoutRequest, config?: AxiosRequestConfig): Promise<operations.GetInformTimeoutResponse>;
    /**
     * This enables MIB browsing of the MIB on the current agent.
    **/
    GetInstances(req: operations.GetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesResponse>;
    /**
     * network interface card for the agent.
    **/
    GetInterface(req: operations.GetInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetInterfaceResponse>;
    /**
     * The set of network interfaces that can be used for simulations.
    **/
    GetInterfaces(config?: AxiosRequestConfig): Promise<operations.GetInterfacesResponse>;
    /**
     * The last configured agent instance.
    **/
    GetLast(config?: AxiosRequestConfig): Promise<operations.GetLastResponse>;
    /**
     * The current log file for the Simulator.
    **/
    GetLog(config?: AxiosRequestConfig): Promise<operations.GetLogResponse>;
    /**
     * subnet mask of the agent.
    **/
    GetMask(req: operations.GetMaskRequest, config?: AxiosRequestConfig): Promise<operations.GetMaskResponse>;
    /**
     * The maximum number of agent instances.
    **/
    GetMax(config?: AxiosRequestConfig): Promise<operations.GetMaxResponse>;
    /**
     * This will only return a MIB name if the object is unmistakeably defined in a MIB.
    **/
    GetMib(req: operations.GetMibRequest, config?: AxiosRequestConfig): Promise<operations.GetMibResponse>;
    /**
     * set of MIBs, simulations and scenarios
    **/
    GetMibs(req: operations.GetMibsRequest, config?: AxiosRequestConfig): Promise<operations.GetMibsResponse>;
    /**
     * Return the symbolic name of the specified object identifier.
    **/
    GetName(req: operations.GetNameRequest, config?: AxiosRequestConfig): Promise<operations.GetNameResponse>;
    /**
     * The network address of the host where the MIMIC simulator is running.
    **/
    GetNetaddr(config?: AxiosRequestConfig): Promise<operations.GetNetaddrResponse>;
    /**
     * The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
    **/
    GetNetdev(config?: AxiosRequestConfig): Promise<operations.GetNetdevResponse>;
    /**
     * This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
    **/
    GetNumberStarts(req: operations.GetNumberStartsRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberStartsResponse>;
    /**
     * This command is similar to the ls or dir operating system commands to list filesystem directories.
    **/
    GetObjects(req: operations.GetObjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsResponse>;
    /**
     * Return the numeric OID of the specified object.
    **/
    GetOid(req: operations.GetOidRequest, config?: AxiosRequestConfig): Promise<operations.GetOidResponse>;
    /**
     * MIB directory of the agent.
    **/
    GetOiddir(req: operations.GetOiddirRequest, config?: AxiosRequestConfig): Promise<operations.GetOiddirResponse>;
    /**
     * owner of the agent.
    **/
    GetOwner(req: operations.GetOwnerRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnerResponse>;
    /**
     * The limit for this configurable is 65536.
    **/
    GetPdusize(req: operations.GetPdusizeRequest, config?: AxiosRequestConfig): Promise<operations.GetPdusizeResponse>;
    /**
     * port number
    **/
    GetPort(req: operations.GetPortRequest, config?: AxiosRequestConfig): Promise<operations.GetPortResponse>;
    /**
     * private directory of the agent.
    **/
    GetPrivdir(req: operations.GetPrivdirRequest, config?: AxiosRequestConfig): Promise<operations.GetPrivdirResponse>;
    /**
     * The product number that is licensed.
    **/
    GetProduct(config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * protocols supported by agent as an array of strings
    **/
    GetProtocols(req: operations.GetProtocolsRequest, config?: AxiosRequestConfig): Promise<operations.GetProtocolsResponse>;
    /**
     * read community string
    **/
    GetReadCommunity(req: operations.GetReadCommunityRequest, config?: AxiosRequestConfig): Promise<operations.GetReadCommunityResponse>;
    /**
     * The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
    **/
    GetReturn(config?: AxiosRequestConfig): Promise<operations.GetReturnResponse>;
    /**
     * first scenario name
    **/
    GetScen(req: operations.GetScenRequest, config?: AxiosRequestConfig): Promise<operations.GetScenResponse>;
    /**
     * first simulation name
    **/
    GetSim(req: operations.GetSimRequest, config?: AxiosRequestConfig): Promise<operations.GetSimResponse>;
    /**
     * relative start time
    **/
    GetStarttime(req: operations.GetStarttimeRequest, config?: AxiosRequestConfig): Promise<operations.GetStarttimeResponse>;
    /**
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    GetState(req: operations.GetStateRequest, config?: AxiosRequestConfig): Promise<operations.GetStateResponse>;
    /**
     * has the agent state changed?
    **/
    GetStateChanged(req: operations.GetStateChangedRequest, config?: AxiosRequestConfig): Promise<operations.GetStateChangedResponse>;
    /**
     * The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
    **/
    GetStatistics(req: operations.GetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsResponse>;
    /**
     * SNMP PDU tracing
    **/
    GetTrace(req: operations.GetTraceRequest, config?: AxiosRequestConfig): Promise<operations.GetTraceResponse>;
    /**
     * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
    **/
    GetValidate(req: operations.GetValidateRequest, config?: AxiosRequestConfig): Promise<operations.GetValidateResponse>;
    /**
     * Get a variable in the Value Space.
    **/
    GetValue(req: operations.GetValueRequest, config?: AxiosRequestConfig): Promise<operations.GetValueResponse>;
    /**
     * This enables variable browsing of the MIB on the current agent.
    **/
    GetVariables(req: operations.GetVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetVariablesResponse>;
    /**
     * The version of the MIMIC command interface.
    **/
    GetVersion(config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * write community string
    **/
    GetWriteCommunity(req: operations.GetWriteCommunityRequest, config?: AxiosRequestConfig): Promise<operations.GetWriteCommunityResponse>;
    /**
     * Halt the current agent.
    **/
    Halt(req: operations.HaltRequest, config?: AxiosRequestConfig): Promise<operations.HaltResponse>;
    /**
     * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
    **/
    ListDaemonTimerScripts(config?: AxiosRequestConfig): Promise<operations.ListDaemonTimerScriptsResponse>;
    /**
     * The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
    **/
    ListIpaliases(req: operations.ListIpaliasesRequest, config?: AxiosRequestConfig): Promise<operations.ListIpaliasesResponse>;
    /**
     * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
    **/
    ListTimerScripts(req: operations.ListTimerScriptsRequest, config?: AxiosRequestConfig): Promise<operations.ListTimerScriptsResponse>;
    /**
     * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
    **/
    MgetInfo(req: operations.MgetInfoRequest, config?: AxiosRequestConfig): Promise<operations.MgetInfoResponse>;
    /**
     * This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
    **/
    MsetValue(req: operations.MsetValueRequest, config?: AxiosRequestConfig): Promise<operations.MsetValueResponse>;
    /**
     * This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
    **/
    MunsetValue(req: operations.MunsetValueRequest, config?: AxiosRequestConfig): Promise<operations.MunsetValueResponse>;
    /**
     * Add an agent.
    **/
    New(req: operations.NewRequest, config?: AxiosRequestConfig): Promise<operations.NewResponse>;
    /**
     * Pause the current agent.
    **/
    PauseNow(req: operations.PauseNowRequest, config?: AxiosRequestConfig): Promise<operations.PauseNowResponse>;
    /**
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolCoapGetArgs(req: operations.ProtocolCoapGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetArgsResponse>;
    /**
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolCoapGetConfig(req: operations.ProtocolCoapGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolCoapGetStatistics(req: operations.ProtocolCoapGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolCoapGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolCoapGetTrace(req: operations.ProtocolCoapGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetTraceResponse>;
    /**
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolCoapSetConfig(req: operations.ProtocolCoapSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolCoapSetTrace(req: operations.ProtocolCoapSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapSetTraceResponse>;
    /**
     * Agent's DHCP configuration particulars
    **/
    ProtocolDhcpGetArgs(req: operations.ProtocolDhcpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetArgsResponse>;
    /**
     * Agent's DHCP configuration hwaddr,classid,add_options,script
    **/
    ProtocolDhcpGetConfig(req: operations.ProtocolDhcpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolDhcpGetStatistics(req: operations.ProtocolDhcpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolDhcpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolDhcpGetTrace(req: operations.ProtocolDhcpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetTraceResponse>;
    /**
     * DHCP-OFFER message parameters
    **/
    ProtocolDhcpParams(req: operations.ProtocolDhcpParamsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpParamsResponse>;
    /**
     * Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolDhcpSetConfig(req: operations.ProtocolDhcpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolDhcpSetTrace(req: operations.ProtocolDhcpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpSetTraceResponse>;
    /**
     * Returns the protocol's configuration.
    **/
    ProtocolGetConfig(req: operations.ProtocolGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolGetConfigResponse>;
    /**
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolIpmiGetArgs(req: operations.ProtocolIpmiGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetArgsResponse>;
    /**
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    ProtocolIpmiGetAttr(req: operations.ProtocolIpmiGetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetAttrResponse>;
    /**
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolIpmiGetConfig(req: operations.ProtocolIpmiGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolIpmiGetStatistics(req: operations.ProtocolIpmiGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolIpmiGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolIpmiGetTrace(req: operations.ProtocolIpmiGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetTraceResponse>;
    /**
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    ProtocolIpmiSetAttr(req: operations.ProtocolIpmiSetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetAttrResponse>;
    /**
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolIpmiSetConfig(req: operations.ProtocolIpmiSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolIpmiSetTrace(req: operations.ProtocolIpmiSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetTraceResponse>;
    /**
     * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
    **/
    ProtocolMqttClientGetProtstate(req: operations.ProtocolMqttClientGetProtstateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientGetProtstateResponse>;
    /**
     * 0 means stopped, 1 means running
    **/
    ProtocolMqttClientGetState(req: operations.ProtocolMqttClientGetStateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientGetStateResponse>;
    /**
     * 0 or more
    **/
    ProtocolMqttClientMessageCard(req: operations.ProtocolMqttClientMessageCardRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageCardResponse>;
    /**
     * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
    **/
    ProtocolMqttClientMessageGet(req: operations.ProtocolMqttClientMessageGetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageGetResponse>;
    /**
     * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
    **/
    ProtocolMqttClientMessageSet(req: operations.ProtocolMqttClientMessageSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageSetResponse>;
    /**
     * Restarts a subscription
    **/
    ProtocolMqttClientResubscribe(req: operations.ProtocolMqttClientResubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientResubscribeResponse>;
    /**
     * Abort a connection
    **/
    ProtocolMqttClientRuntimeAbort(req: operations.ProtocolMqttClientRuntimeAbortRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeAbortResponse>;
    /**
     * Start a connection
    **/
    ProtocolMqttClientRuntimeConnect(req: operations.ProtocolMqttClientRuntimeConnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeConnectResponse>;
    /**
     * Graceful disconnect
    **/
    ProtocolMqttClientRuntimeDisconnect(req: operations.ProtocolMqttClientRuntimeDisconnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeDisconnectResponse>;
    /**
     * Broker IP address
    **/
    ProtocolMqttClientSetBroker(req: operations.ProtocolMqttClientSetBrokerRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetBrokerResponse>;
    /**
     * 1 for clean session , 0 not
    **/
    ProtocolMqttClientSetCleansession(req: operations.ProtocolMqttClientSetCleansessionRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetCleansessionResponse>;
    /**
     * MQTT client ID
    **/
    ProtocolMqttClientSetClientid(req: operations.ProtocolMqttClientSetClientidRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetClientidResponse>;
    /**
     * Keep alive the TCP connection
    **/
    ProtocolMqttClientSetKeepalive(req: operations.ProtocolMqttClientSetKeepaliveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetKeepaliveResponse>;
    /**
     * Action to take when MQTT session is disconnected
    **/
    ProtocolMqttClientSetOnDisconnect(req: operations.ProtocolMqttClientSetOnDisconnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetOnDisconnectResponse>;
    /**
     * Client password
    **/
    ProtocolMqttClientSetPassword(req: operations.ProtocolMqttClientSetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetPasswordResponse>;
    /**
     * target TCP port
    **/
    ProtocolMqttClientSetPort(req: operations.ProtocolMqttClientSetPortRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetPortResponse>;
    /**
     * Client username
    **/
    ProtocolMqttClientSetUsername(req: operations.ProtocolMqttClientSetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetUsernameResponse>;
    /**
     * Will message
    **/
    ProtocolMqttClientSetWillmsg(req: operations.ProtocolMqttClientSetWillmsgRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillmsgResponse>;
    /**
     * QOS field
    **/
    ProtocolMqttClientSetWillqos(req: operations.ProtocolMqttClientSetWillqosRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillqosResponse>;
    /**
     * Retaining will
    **/
    ProtocolMqttClientSetWillretain(req: operations.ProtocolMqttClientSetWillretainRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillretainResponse>;
    /**
     * Will topic for the will message
    **/
    ProtocolMqttClientSetWilltopic(req: operations.ProtocolMqttClientSetWilltopicRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWilltopicResponse>;
    /**
     * 0 or more
    **/
    ProtocolMqttClientSubscribeCard(req: operations.ProtocolMqttClientSubscribeCardRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeCardResponse>;
    /**
     * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
    **/
    ProtocolMqttClientSubscribeGet(req: operations.ProtocolMqttClientSubscribeGetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeGetResponse>;
    /**
     * Attribute can not be properties .
    **/
    ProtocolMqttClientSubscribeSet(req: operations.ProtocolMqttClientSubscribeSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeSetResponse>;
    /**
     * Stops a subscription
    **/
    ProtocolMqttClientUnsubscribe(req: operations.ProtocolMqttClientUnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientUnsubscribeResponse>;
    /**
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolMqttGetArgs(req: operations.ProtocolMqttGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetArgsResponse>;
    /**
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolMqttGetConfig(req: operations.ProtocolMqttGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolMqttGetStatistics(req: operations.ProtocolMqttGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolMqttGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolMqttGetTrace(req: operations.ProtocolMqttGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetTraceResponse>;
    /**
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolMqttSetConfig(req: operations.ProtocolMqttSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolMqttSetTrace(req: operations.ProtocolMqttSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttSetTraceResponse>;
    /**
     * Change attributes
    **/
    ProtocolNetflowChangeAttr(req: operations.ProtocolNetflowChangeAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeAttrResponse>;
    /**
     * Interval in msec .
    **/
    ProtocolNetflowChangeDfs(req: operations.ProtocolNetflowChangeDfsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeDfsResponse>;
    /**
     * Interval in msec .
    **/
    ProtocolNetflowChangeTfs(req: operations.ProtocolNetflowChangeTfsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeTfsResponse>;
    /**
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolNetflowGetArgs(req: operations.ProtocolNetflowGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetArgsResponse>;
    /**
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolNetflowGetConfig(req: operations.ProtocolNetflowGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolNetflowGetStatistics(req: operations.ProtocolNetflowGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolNetflowGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolNetflowGetTrace(req: operations.ProtocolNetflowGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetTraceResponse>;
    /**
     * Halt NETFLOW traffic
    **/
    ProtocolNetflowHalt(req: operations.ProtocolNetflowHaltRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowHaltResponse>;
    /**
     * Show list of NETFLOW exports
    **/
    ProtocolNetflowList(req: operations.ProtocolNetflowListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowListResponse>;
    /**
     * Reload NETFLOW configuration before resuming traffic
    **/
    ProtocolNetflowReload(req: operations.ProtocolNetflowReloadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowReloadResponse>;
    /**
     * Resuming traffic
    **/
    ProtocolNetflowResume(req: operations.ProtocolNetflowResumeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowResumeResponse>;
    /**
     * Allow changing collector without stopping agent
    **/
    ProtocolNetflowSetCollector(req: operations.ProtocolNetflowSetCollectorRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetCollectorResponse>;
    /**
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolNetflowSetConfig(req: operations.ProtocolNetflowSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetConfigResponse>;
    /**
     * Allow reloading the configuration file for an agent without stopping agent
    **/
    ProtocolNetflowSetFileName(req: operations.ProtocolNetflowSetFileNameRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetFileNameResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolNetflowSetTrace(req: operations.ProtocolNetflowSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetTraceResponse>;
    /**
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolProxyGetArgs(req: operations.ProtocolProxyGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetArgsResponse>;
    /**
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolProxyGetConfig(req: operations.ProtocolProxyGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolProxyGetStatistics(req: operations.ProtocolProxyGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolProxyGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolProxyGetTrace(req: operations.ProtocolProxyGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetTraceResponse>;
    /**
     * Additional proxy target
    **/
    ProtocolProxyPortAdd(req: operations.ProtocolProxyPortAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortAddResponse>;
    /**
     * Check individual target
    **/
    ProtocolProxyPortIsstarted(req: operations.ProtocolProxyPortIsstartedRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortIsstartedResponse>;
    ProtocolProxyPortList(req: operations.ProtocolProxyPortListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortListResponse>;
    /**
     * Remove proxy target
    **/
    ProtocolProxyPortRemove(req: operations.ProtocolProxyPortRemoveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortRemoveResponse>;
    /**
     * Start additional target
    **/
    ProtocolProxyPortStart(req: operations.ProtocolProxyPortStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortStartResponse>;
    /**
     * Stop additional target
    **/
    ProtocolProxyPortStop(req: operations.ProtocolProxyPortStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortStopResponse>;
    /**
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolProxySetConfig(req: operations.ProtocolProxySetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxySetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolProxySetTrace(req: operations.ProtocolProxySetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxySetTraceResponse>;
    /**
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSflowGetArgs(req: operations.ProtocolSflowGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetArgsResponse>;
    /**
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSflowGetConfig(req: operations.ProtocolSflowGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolSflowGetStatistics(req: operations.ProtocolSflowGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolSflowGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolSflowGetTrace(req: operations.ProtocolSflowGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetTraceResponse>;
    /**
     * Halt SFLOW traffic
    **/
    ProtocolSflowHalt(req: operations.ProtocolSflowHaltRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowHaltResponse>;
    /**
     * Reload SFLOW configuration before resuming traffic
    **/
    ProtocolSflowReload(req: operations.ProtocolSflowReloadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowReloadResponse>;
    /**
     * Resuming traffic
    **/
    ProtocolSflowResume(req: operations.ProtocolSflowResumeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowResumeResponse>;
    /**
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSflowSetConfig(req: operations.ProtocolSflowSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolSflowSetTrace(req: operations.ProtocolSflowSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowSetTraceResponse>;
    /**
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSnmptcpGetArgs(req: operations.ProtocolSnmptcpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetArgsResponse>;
    /**
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSnmptcpGetConfig(req: operations.ProtocolSnmptcpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolSnmptcpGetStatistics(req: operations.ProtocolSnmptcpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolSnmptcpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolSnmptcpGetTrace(req: operations.ProtocolSnmptcpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetTraceResponse>;
    /**
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolSnmptcpIpaliasDisable(req: operations.ProtocolSnmptcpIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasDisableResponse>;
    /**
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolSnmptcpIpaliasEnable(req: operations.ProtocolSnmptcpIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasEnableResponse>;
    /**
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolSnmptcpIpaliasIsenabled(req: operations.ProtocolSnmptcpIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasIsenabledResponse>;
    /**
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolSnmptcpIpaliasList(req: operations.ProtocolSnmptcpIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasListResponse>;
    /**
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSnmptcpSetConfig(req: operations.ProtocolSnmptcpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolSnmptcpSetTrace(req: operations.ProtocolSnmptcpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpSetTraceResponse>;
    /**
     * Adds a new access entry with the specified parameters.
    **/
    ProtocolSnmpv3AccessAdd(req: operations.ProtocolSnmpv3AccessAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3AccessAddResponse>;
    /**
     * Clears all access entries.
    **/
    ProtocolSnmpv3AccessClear(req: operations.ProtocolSnmpv3AccessClearRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3AccessClearResponse>;
    /**
     * Deletes the specified access entry.
    **/
    ProtocolSnmpv3AccessDel(req: operations.ProtocolSnmpv3AccessDelRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3AccessDelResponse>;
    /**
     * Returns the current acccess entries as an array of strings.
    **/
    ProtocolSnmpv3AccessList(req: operations.ProtocolSnmpv3AccessListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3AccessListResponse>;
    /**
     * Returns the SNMPv3 configuration.
    **/
    ProtocolSnmpv3GetConfig(req: operations.ProtocolSnmpv3GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetConfigResponse>;
    /**
     * Retrieves the contextEngineID for the agent instance.
    **/
    ProtocolSnmpv3GetContextEngineid(req: operations.ProtocolSnmpv3GetContextEngineidRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetContextEngineidResponse>;
    /**
     * Retrieves the number of times the agent has been restarted.
    **/
    ProtocolSnmpv3GetEngineboots(req: operations.ProtocolSnmpv3GetEnginebootsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetEnginebootsResponse>;
    /**
     * For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
    **/
    ProtocolSnmpv3GetEngineid(req: operations.ProtocolSnmpv3GetEngineidRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetEngineidResponse>;
    /**
     * Retrieves the time in seconds for which the agent has been running.
    **/
    ProtocolSnmpv3GetEnginetime(req: operations.ProtocolSnmpv3GetEnginetimeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetEnginetimeResponse>;
    /**
     * Adds a new group entry with the specified parameters.
    **/
    ProtocolSnmpv3GroupAdd(req: operations.ProtocolSnmpv3GroupAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GroupAddResponse>;
    /**
     * Clears all group entries.
    **/
    ProtocolSnmpv3GroupClear(req: operations.ProtocolSnmpv3GroupClearRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GroupClearResponse>;
    /**
     * Deletes the specified group entry.
    **/
    ProtocolSnmpv3GroupDel(req: operations.ProtocolSnmpv3GroupDelRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GroupDelResponse>;
    /**
     * Returns the current group entries as an array of strings.
    **/
    ProtocolSnmpv3GroupList(req: operations.ProtocolSnmpv3GroupListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GroupListResponse>;
    /**
     * Changes the SNMPv3 configuration.
    **/
    ProtocolSnmpv3SetConfig(req: operations.ProtocolSnmpv3SetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3SetConfigResponse>;
    /**
     * Adds a new user entry with the specified parameters.
    **/
    ProtocolSnmpv3UserAdd(req: operations.ProtocolSnmpv3UserAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UserAddResponse>;
    /**
     * Clears all user entries.
    **/
    ProtocolSnmpv3UserClear(req: operations.ProtocolSnmpv3UserClearRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UserClearResponse>;
    /**
     * Deletes the specified user entry.
    **/
    ProtocolSnmpv3UserDel(req: operations.ProtocolSnmpv3UserDelRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UserDelResponse>;
    /**
     * Returns the current user entries as a Tcl list.
    **/
    ProtocolSnmpv3UserList(req: operations.ProtocolSnmpv3UserListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UserListResponse>;
    /**
     * Saves current user settings in the currently loaded USM config file.
    **/
    ProtocolSnmpv3UsmSave(req: operations.ProtocolSnmpv3UsmSaveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UsmSaveResponse>;
    /**
     * Saves current user settings in the specified USM config file.
    **/
    ProtocolSnmpv3UsmSaveas(req: operations.ProtocolSnmpv3UsmSaveasRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UsmSaveasResponse>;
    /**
     * Saves current group, access, view settings in the currently loaded VACM config file.
    **/
    ProtocolSnmpv3VacmSave(req: operations.ProtocolSnmpv3VacmSaveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3VacmSaveResponse>;
    /**
     * Saves current group, access, view settings in the specified VACM config file.
    **/
    ProtocolSnmpv3VacmSaveas(req: operations.ProtocolSnmpv3VacmSaveasRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3VacmSaveasResponse>;
    /**
     * Adds a new view entry with the specified parameters.
    **/
    ProtocolSnmpv3ViewAdd(req: operations.ProtocolSnmpv3ViewAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3ViewAddResponse>;
    /**
     * Clears all view entries.
    **/
    ProtocolSnmpv3ViewClear(req: operations.ProtocolSnmpv3ViewClearRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3ViewClearResponse>;
    /**
     * Deletes the specified view entry.
    **/
    ProtocolSnmpv3ViewDel(req: operations.ProtocolSnmpv3ViewDelRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3ViewDelResponse>;
    /**
     * Returns the current view entries as an array of strings.
    **/
    ProtocolSnmpv3ViewList(req: operations.ProtocolSnmpv3ViewListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3ViewListResponse>;
    /**
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSshGetArgs(req: operations.ProtocolSshGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetArgsResponse>;
    /**
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSshGetConfig(req: operations.ProtocolSshGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolSshGetStatistics(req: operations.ProtocolSshGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolSshGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolSshGetTrace(req: operations.ProtocolSshGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetTraceResponse>;
    /**
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolSshIpaliasDisable(req: operations.ProtocolSshIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasDisableResponse>;
    /**
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolSshIpaliasEnable(req: operations.ProtocolSshIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasEnableResponse>;
    /**
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolSshIpaliasIsenabled(req: operations.ProtocolSshIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasIsenabledResponse>;
    /**
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolSshIpaliasList(req: operations.ProtocolSshIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasListResponse>;
    /**
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSshSetConfig(req: operations.ProtocolSshSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolSshSetTrace(req: operations.ProtocolSshSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshSetTraceResponse>;
    /**
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSyslogGetArgs(req: operations.ProtocolSyslogGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetArgsResponse>;
    /**
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    ProtocolSyslogGetAttr(req: operations.ProtocolSyslogGetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetAttrResponse>;
    /**
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSyslogGetConfig(req: operations.ProtocolSyslogGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolSyslogGetStatistics(req: operations.ProtocolSyslogGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolSyslogGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolSyslogGetTrace(req: operations.ProtocolSyslogGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetTraceResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolSyslogSend(req: operations.ProtocolSyslogSendRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSendResponse>;
    /**
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    ProtocolSyslogSetAttr(req: operations.ProtocolSyslogSetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetAttrResponse>;
    /**
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolSyslogSetConfig(req: operations.ProtocolSyslogSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolSyslogSetTrace(req: operations.ProtocolSyslogSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetTraceResponse>;
    /**
     * Logon change allows (hidden) commands for a different access mode to run.
    **/
    ProtocolTelnetConnectionLogon(req: operations.ProtocolTelnetConnectionLogonRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionLogonResponse>;
    /**
     * Equivalent of the command typed in by the user.
    **/
    ProtocolTelnetConnectionRequest(req: operations.ProtocolTelnetConnectionRequestRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionRequestResponse>;
    /**
     * Signal name is either connect or idle
    **/
    ProtocolTelnetConnectionSignal(req: operations.ProtocolTelnetConnectionSignalRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionSignalResponse>;
    /**
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolTelnetGetArgs(req: operations.ProtocolTelnetGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetArgsResponse>;
    /**
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolTelnetGetConfig(req: operations.ProtocolTelnetGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolTelnetGetStatistics(req: operations.ProtocolTelnetGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolTelnetGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolTelnetGetTrace(req: operations.ProtocolTelnetGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetTraceResponse>;
    /**
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolTelnetIpaliasDisable(req: operations.ProtocolTelnetIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasDisableResponse>;
    /**
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolTelnetIpaliasEnable(req: operations.ProtocolTelnetIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasEnableResponse>;
    /**
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolTelnetIpaliasIsenabled(req: operations.ProtocolTelnetIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasIsenabledResponse>;
    /**
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    ProtocolTelnetIpaliasList(req: operations.ProtocolTelnetIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasListResponse>;
    /**
     * IDs of all connected connections
    **/
    ProtocolTelnetServerGetConnections(req: operations.ProtocolTelnetServerGetConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetConnectionsResponse>;
    /**
     * Keymap file name
    **/
    ProtocolTelnetServerGetKeymap(req: operations.ProtocolTelnetServerGetKeymapRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetKeymapResponse>;
    /**
     * Rules db file name
    **/
    ProtocolTelnetServerGetRulesdb(req: operations.ProtocolTelnetServerGetRulesdbRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetRulesdbResponse>;
    /**
     * Return 1 means accepting connections, 0 not
    **/
    ProtocolTelnetServerGetState(req: operations.ProtocolTelnetServerGetStateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetStateResponse>;
    /**
     * User db file name
    **/
    ProtocolTelnetServerGetUserdb(req: operations.ProtocolTelnetServerGetUserdbRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetUserdbResponse>;
    /**
     * List of users
    **/
    ProtocolTelnetServerGetUsers(req: operations.ProtocolTelnetServerGetUsersRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetUsersResponse>;
    /**
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolTelnetSetConfig(req: operations.ProtocolTelnetSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolTelnetSetTrace(req: operations.ProtocolTelnetSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetSetTraceResponse>;
    /**
     * Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolTftpGetArgs(req: operations.ProtocolTftpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetArgsResponse>;
    /**
     * Agent's TFTP configuration
    **/
    ProtocolTftpGetConfig(req: operations.ProtocolTftpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolTftpGetStatistics(req: operations.ProtocolTftpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolTftpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolTftpGetTrace(req: operations.ProtocolTftpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetTraceResponse>;
    /**
     * Parameter is server , port , or dstfile
    **/
    ProtocolTftpSessionGetParameter(req: operations.ProtocolTftpSessionGetParameterRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionGetParameterResponse>;
    /**
     * Session ID is returned
    **/
    ProtocolTftpSessionRead(req: operations.ProtocolTftpSessionReadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionReadResponse>;
    /**
     * Parameter is server , port , or dstfile
    **/
    ProtocolTftpSessionSetParameter(req: operations.ProtocolTftpSessionSetParameterRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionSetParameterResponse>;
    /**
     * Start uploading or downloading the file
    **/
    ProtocolTftpSessionStart(req: operations.ProtocolTftpSessionStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStartResponse>;
    /**
     * Status includes running state, bytes transfered, and time elapsed
    **/
    ProtocolTftpSessionStatus(req: operations.ProtocolTftpSessionStatusRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStatusResponse>;
    /**
     * Stop uploading or downloading the file
    **/
    ProtocolTftpSessionStop(req: operations.ProtocolTftpSessionStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStopResponse>;
    /**
     * Session ID is returned
    **/
    ProtocolTftpSessionWrite(req: operations.ProtocolTftpSessionWriteRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionWriteResponse>;
    /**
     * Agent's TFTP configuration
    **/
    ProtocolTftpSetConfig(req: operations.ProtocolTftpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolTftpSetTrace(req: operations.ProtocolTftpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSetTraceResponse>;
    /**
     * Agent's TOD configuration
    **/
    ProtocolTodGetArgs(req: operations.ProtocolTodGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetArgsResponse>;
    /**
     * Agent's TOD configuration
    **/
    ProtocolTodGetConfig(req: operations.ProtocolTodGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolTodGetStatistics(req: operations.ProtocolTodGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolTodGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolTodGetTrace(req: operations.ProtocolTodGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetTraceResponse>;
    /**
     * Retrive time from server
    **/
    ProtocolTodGettime(req: operations.ProtocolTodGettimeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGettimeResponse>;
    /**
     * Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolTodSetConfig(req: operations.ProtocolTodSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolTodSetTrace(req: operations.ProtocolTodSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodSetTraceResponse>;
    /**
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolWebGetArgs(req: operations.ProtocolWebGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetArgsResponse>;
    /**
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolWebGetConfig(req: operations.ProtocolWebGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetConfigResponse>;
    /**
     * Statistics of fields indicated in the headers
    **/
    ProtocolWebGetStatistics(req: operations.ProtocolWebGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetStatisticsResponse>;
    /**
     * The headers of statistics fields
    **/
    ProtocolWebGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetStatsHdrResponse>;
    /**
     * Trace 1 means enabled, 0 means not
    **/
    ProtocolWebGetTrace(req: operations.ProtocolWebGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetTraceResponse>;
    /**
     * Add port
    **/
    ProtocolWebPortAdd(req: operations.ProtocolWebPortAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortAddResponse>;
    /**
     * Check the port. 1 means existing, 0 means not
    **/
    ProtocolWebPortExists(req: operations.ProtocolWebPortExistsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortExistsResponse>;
    /**
     * Remove port
    **/
    ProtocolWebPortRemove(req: operations.ProtocolWebPortRemoveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortRemoveResponse>;
    /**
     * Set port
    **/
    ProtocolWebPortSet(req: operations.ProtocolWebPortSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortSetResponse>;
    /**
     * Start port
    **/
    ProtocolWebPortStart(req: operations.ProtocolWebPortStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortStartResponse>;
    /**
     * Stop port
    **/
    ProtocolWebPortStop(req: operations.ProtocolWebPortStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortStopResponse>;
    /**
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    ProtocolWebSetConfig(req: operations.ProtocolWebSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebSetConfigResponse>;
    /**
     * 1 to enable, 0 to disable
    **/
    ProtocolWebSetTrace(req: operations.ProtocolWebSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebSetTraceResponse>;
    /**
     * This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
    **/
    Reload(req: operations.ReloadRequest, config?: AxiosRequestConfig): Promise<operations.ReloadResponse>;
    /**
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    Remove(req: operations.RemoveRequest, config?: AxiosRequestConfig): Promise<operations.RemoveResponse>;
    /**
     * Resume the current agent.
    **/
    Resume(req: operations.ResumeRequest, config?: AxiosRequestConfig): Promise<operations.ResumeResponse>;
    /**
     * Save agent MIB values.
    **/
    Save(req: operations.SaveRequest, config?: AxiosRequestConfig): Promise<operations.SaveResponse>;
    /**
     * The minimum granularity is 10 msec.
    **/
    SetDelay(req: operations.SetDelayRequest, config?: AxiosRequestConfig): Promise<operations.SetDelayResponse>;
    /**
     * 0 means no drops
    **/
    SetDrops(req: operations.SetDropsRequest, config?: AxiosRequestConfig): Promise<operations.SetDropsResponse>;
    /**
     * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
    **/
    SetHost(req: operations.SetHostRequest, config?: AxiosRequestConfig): Promise<operations.SetHostResponse>;
    /**
     * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
    **/
    SetInformTimeout(req: operations.SetInformTimeoutRequest, config?: AxiosRequestConfig): Promise<operations.SetInformTimeoutResponse>;
    /**
     * network interface card for the agent
    **/
    SetInterface(req: operations.SetInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.SetInterfaceResponse>;
    /**
     * The current log file for the Simulator.
    **/
    SetLog(req: operations.SetLogRequest, config?: AxiosRequestConfig): Promise<operations.SetLogResponse>;
    /**
     * subnet mask of the agent.
    **/
    SetMask(req: operations.SetMaskRequest, config?: AxiosRequestConfig): Promise<operations.SetMaskResponse>;
    /**
     * set of MIBs, simulations and scenarios
    **/
    SetMibs(req: operations.SetMibsRequest, config?: AxiosRequestConfig): Promise<operations.SetMibsResponse>;
    /**
     * The network address of the host where the MIMIC simulator is running.
    **/
    SetNetdev(config?: AxiosRequestConfig): Promise<operations.SetNetdevResponse>;
    /**
     * MIB directory of the agent.
    **/
    SetOiddir(req: operations.SetOiddirRequest, config?: AxiosRequestConfig): Promise<operations.SetOiddirResponse>;
    /**
     * owner of the agent
    **/
    SetOwner(req: operations.SetOwnerRequest, config?: AxiosRequestConfig): Promise<operations.SetOwnerResponse>;
    /**
     * The limit for this configurable is 65536
    **/
    SetPdusize(req: operations.SetPdusizeRequest, config?: AxiosRequestConfig): Promise<operations.SetPdusizeResponse>;
    /**
     * port number
    **/
    SetPort(req: operations.SetPortRequest, config?: AxiosRequestConfig): Promise<operations.SetPortResponse>;
    /**
     * private directory of the agent.
    **/
    SetPrivdir(req: operations.SetPrivdirRequest, config?: AxiosRequestConfig): Promise<operations.SetPrivdirResponse>;
    /**
     * protocols supported by agent as a comma-separated list
    **/
    SetProtocols(req: operations.SetProtocolsRequest, config?: AxiosRequestConfig): Promise<operations.SetProtocolsResponse>;
    /**
     * read community string
    **/
    SetReadCommunity(req: operations.SetReadCommunityRequest, config?: AxiosRequestConfig): Promise<operations.SetReadCommunityResponse>;
    /**
     * relative start time
    **/
    SetStarttime(req: operations.SetStarttimeRequest, config?: AxiosRequestConfig): Promise<operations.SetStarttimeResponse>;
    /**
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    SetState(req: operations.SetStateRequest, config?: AxiosRequestConfig): Promise<operations.SetStateResponse>;
    /**
     * SNMP PDU tracing
    **/
    SetTrace(req: operations.SetTraceRequest, config?: AxiosRequestConfig): Promise<operations.SetTraceResponse>;
    /**
     * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
    **/
    SetValidate(req: operations.SetValidateRequest, config?: AxiosRequestConfig): Promise<operations.SetValidateResponse>;
    /**
     * NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
    **/
    SetValue(req: operations.SetValueRequest, config?: AxiosRequestConfig): Promise<operations.SetValueResponse>;
    /**
     * write community string
    **/
    SetWriteCommunity(req: operations.SetWriteCommunityRequest, config?: AxiosRequestConfig): Promise<operations.SetWriteCommunityResponse>;
    /**
     * This is useful if you have an OID which is a combination of object and instance.
    **/
    SplitOid(req: operations.SplitOidRequest, config?: AxiosRequestConfig): Promise<operations.SplitOidResponse>;
    /**
     * For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
    **/
    Start(req: operations.StartRequest, config?: AxiosRequestConfig): Promise<operations.StartResponse>;
    /**
     * Start MIMIC.
    **/
    StartAllAgents(config?: AxiosRequestConfig): Promise<operations.StartAllAgentsResponse>;
    /**
     * port defaults to 161 if not specified.
    **/
    StartIpalias(req: operations.StartIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.StartIpaliasResponse>;
    /**
     * port defaults to 161 if not specified.
    **/
    StatusIpalias(req: operations.StatusIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.StatusIpaliasResponse>;
    /**
     * Agent primary IP address
    **/
    Stop(req: operations.StopRequest, config?: AxiosRequestConfig): Promise<operations.StopResponse>;
    /**
     * Stop MIMIC.
    **/
    StopAllAgents(config?: AxiosRequestConfig): Promise<operations.StopAllAgentsResponse>;
    /**
     * port defaults to 161 if not specified.
    **/
    StopIpalias(req: operations.StopIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.StopIpaliasResponse>;
    /**
     * It returns "1" if the variable exists, else "0".
    **/
    StoreExists(req: operations.StoreExistsRequest, config?: AxiosRequestConfig): Promise<operations.StoreExistsResponse>;
    /**
     * The value will be returned as a string (like all Tcl values).
    **/
    StoreGet(req: operations.StoreGetRequest, config?: AxiosRequestConfig): Promise<operations.StoreGetResponse>;
    /**
     * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
    **/
    StoreList(config?: AxiosRequestConfig): Promise<operations.StoreListResponse>;
    /**
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
    **/
    StoreLreplace(req: operations.StoreLreplaceRequest, config?: AxiosRequestConfig): Promise<operations.StoreLreplaceResponse>;
    /**
     * It returns "1" if the variable is persistent, else "0".
    **/
    StorePersists(req: operations.StorePersistsRequest, config?: AxiosRequestConfig): Promise<operations.StorePersistsResponse>;
    /**
     * The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
    **/
    StoreSave(config?: AxiosRequestConfig): Promise<operations.StoreSaveResponse>;
    /**
     * Persist 1 means persistent , 0 means non-persistent
    **/
    StoreSet(req: operations.StoreSetRequest, config?: AxiosRequestConfig): Promise<operations.StoreSetResponse>;
    /**
     * This will cleanup persistent variables if needed
    **/
    StoreUnset(req: operations.StoreUnsetRequest, config?: AxiosRequestConfig): Promise<operations.StoreUnsetResponse>;
    /**
     * Terminate the MIMIC daemon.
    **/
    Terminate(config?: AxiosRequestConfig): Promise<operations.TerminateResponse>;
    /**
     * Add a trap destination to the set of destinations.
    **/
    TrapConfigAdd(req: operations.TrapConfigAddRequest, config?: AxiosRequestConfig): Promise<operations.TrapConfigAddResponse>;
    /**
     * Remove a trap destination from the set of destinations.
    **/
    TrapConfigDel(req: operations.TrapConfigDelRequest, config?: AxiosRequestConfig): Promise<operations.TrapConfigDelResponse>;
    /**
     * Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
    **/
    TrapConfigList(req: operations.TrapConfigListRequest, config?: AxiosRequestConfig): Promise<operations.TrapConfigListResponse>;
    /**
     * List the outstanding asynchronous traps for this agent instance.
    **/
    TrapList(req: operations.TrapListRequest, config?: AxiosRequestConfig): Promise<operations.TrapListResponse>;
    /**
     * Only variables that have previously been set can be unset.
    **/
    UnsetValue(req: operations.UnsetValueRequest, config?: AxiosRequestConfig): Promise<operations.UnsetValueResponse>;
}
export {};
