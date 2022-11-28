import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://gambitcomm.local", "http://127.0.0.1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * accessAdd - Adds/Overwrites the user entry in the access control database.
     *
     * Adds/Overwrites the user entry in the access control database.
    **/
    accessAdd(req: operations.AccessAddRequest, config?: AxiosRequestConfig): Promise<operations.AccessAddResponse>;
    /**
     * accessDel - Clears a users entry from access control database.
     *
     * Using '*' for user clears all the users.
    **/
    accessDel(req: operations.AccessDelRequest, config?: AxiosRequestConfig): Promise<operations.AccessDelResponse>;
    /**
     * accessGetAcldb - Returns the current access control database in use.
     *
     * If nothing is specified then this returns "".
    **/
    accessGetAcldb(config?: AxiosRequestConfig): Promise<operations.AccessGetAcldbResponse>;
    /**
     * accessGetAdmindir - Returns the current admin directory.
     *
     * If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
    **/
    accessGetAdmindir(config?: AxiosRequestConfig): Promise<operations.AccessGetAdmindirResponse>;
    /**
     * accessGetAdminuser - Returns the current administrator.
     *
     * If nothing is specified in admin/settings.cfg then returns "".
    **/
    accessGetAdminuser(config?: AxiosRequestConfig): Promise<operations.AccessGetAdminuserResponse>;
    /**
     * accessGetEnabled - Returns the state of access control checking.
     *
     * 0 indicates that it is disabled, 1 indicates it is enabled.
    **/
    accessGetEnabled(config?: AxiosRequestConfig): Promise<operations.AccessGetEnabledResponse>;
    /**
     * accessList - Returns an array of entries.
     *
     * Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
    **/
    accessList(config?: AxiosRequestConfig): Promise<operations.AccessListResponse>;
    /**
     * accessLoad - Loads the specified file for access control data.
     *
     * If filename is not specified then the currently set 'acldb' parameter is used.
    **/
    accessLoad(req: operations.AccessLoadRequest, config?: AxiosRequestConfig): Promise<operations.AccessLoadResponse>;
    /**
     * accessSave - Saves current access control data in specified file.
     *
     * If filename is not specified then the currently set 'acldb' parameter is used.
    **/
    accessSave(req: operations.AccessSaveRequest, config?: AxiosRequestConfig): Promise<operations.AccessSaveResponse>;
    /**
     * accessSetAcldb - Allows setting the name of the current access control database.
     *
     * This will be used for subsequent load and save operations.
    **/
    accessSetAcldb(req: operations.AccessSetAcldbRequest, config?: AxiosRequestConfig): Promise<operations.AccessSetAcldbResponse>;
    /**
     * accessSetEnabled - Allows the user to enable/disable the access control check.
     *
     * 0 indicates disabled, 1 indicates enabled.
    **/
    accessSetEnabled(req: operations.AccessSetEnabledRequest, config?: AxiosRequestConfig): Promise<operations.AccessSetEnabledResponse>;
    /**
     * add - Add an entry to a table.
     *
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    add(req: operations.AddRequest, config?: AxiosRequestConfig): Promise<operations.AddResponse>;
    /**
     * addDaemonTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
     *
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
    **/
    addDaemonTimerScript(req: operations.AddDaemonTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.AddDaemonTimerScriptResponse>;
    /**
     * addIpalias - Adds a new ipalias for the agent.
     *
     * port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
    **/
    addIpalias(req: operations.AddIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.AddIpaliasResponse>;
    /**
     * addTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
     *
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
    **/
    addTimerScript(req: operations.AddTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.AddTimerScriptResponse>;
    /**
     * agentRemove - Remove the current agent.
     *
     * For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
    **/
    agentRemove(req: operations.AgentRemoveRequest, config?: AxiosRequestConfig): Promise<operations.AgentRemoveResponse>;
    /**
     * agentStoreCopy - This command copies the variable store from the other agent to this agent.
     *
     * This command copies the variable store from the other agent to this agent.
    **/
    agentStoreCopy(req: operations.AgentStoreCopyRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreCopyResponse>;
    /**
     * agentStoreExists - This command can be used as a predicate to ascertain the existence of a given variable.
     *
     * It returns "1" if the variable exists, else "0".
    **/
    agentStoreExists(req: operations.AgentStoreExistsRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreExistsResponse>;
    /**
     * agentStoreGet - Fetches the value associated with a variable.
     *
     * The value will be returned as a string (like all Tcl values).
    **/
    agentStoreGet(req: operations.AgentStoreGetRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreGetResponse>;
    /**
     * agentStoreList - This command will return the list of variables in the said scope.
     *
     * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
    **/
    agentStoreList(req: operations.AgentStoreListRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreListResponse>;
    /**
     * agentStoreLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
     *
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
    **/
    agentStoreLreplace(req: operations.AgentStoreLreplaceRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreLreplaceResponse>;
    /**
     * agentStorePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
     *
     * It returns "1" if the variable is persistent, else "0".
    **/
    agentStorePersists(req: operations.AgentStorePersistsRequest, config?: AxiosRequestConfig): Promise<operations.AgentStorePersistsResponse>;
    /**
     * agentStoreSet - These commands allow the creation of a new variable, or changing an existing value.
     *
     * The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
    **/
    agentStoreSet(req: operations.AgentStoreSetRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreSetResponse>;
    /**
     * agentStoreUnset - Deletes a variable which is currently defined.
     *
     * This will cleanup persistent variables if needed
    **/
    agentStoreUnset(req: operations.AgentStoreUnsetRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreUnsetResponse>;
    /**
     * cfgLoad - Load the lab configuration file file.
     *
     * Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
    **/
    cfgLoad(req: operations.CfgLoadRequest, config?: AxiosRequestConfig): Promise<operations.CfgLoadResponse>;
    /**
     * cfgNew - Clear the lab configuration.
     *
     * Clear the lab configuration.
    **/
    cfgNew(req: operations.CfgNewRequest, config?: AxiosRequestConfig): Promise<operations.CfgNewResponse>;
    /**
     * cfgSave - Save the lab configuration.
     *
     * Save the lab configuration.
    **/
    cfgSave(config?: AxiosRequestConfig): Promise<operations.CfgSaveResponse>;
    /**
     * cfgSaveas - Save the lab configuration in file.
     *
     * Save the lab configuration in file.
    **/
    cfgSaveas(req: operations.CfgSaveasRequest, config?: AxiosRequestConfig): Promise<operations.CfgSaveasResponse>;
    /**
     * delDaemonTimerScript - Remove a timer script from the execution list.
     *
     * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
    **/
    delDaemonTimerScript(req: operations.DelDaemonTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.DelDaemonTimerScriptResponse>;
    /**
     * delIpalias - Deletes an existing ipalias from the agent.
     *
     * port defaults to 161 if not specified.
    **/
    delIpalias(req: operations.DelIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.DelIpaliasResponse>;
    /**
     * delTimerScript - Remove a timer script from the execution list.
     *
     * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
    **/
    delTimerScript(req: operations.DelTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.DelTimerScriptResponse>;
    /**
     * evalValue - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
     *
     * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
    **/
    evalValue(req: operations.EvalValueRequest, config?: AxiosRequestConfig): Promise<operations.EvalValueResponse>;
    /**
     * fromAdd - Add a source address that the agent will accept messages from.
     *
     * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
    **/
    fromAdd(req: operations.FromAddRequest, config?: AxiosRequestConfig): Promise<operations.FromAddResponse>;
    /**
     * fromDel - delete a source address that the agent will accept messages from.
     *
     * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
    **/
    fromDel(req: operations.FromDelRequest, config?: AxiosRequestConfig): Promise<operations.FromDelResponse>;
    /**
     * fromList - List the source addresses that the agent will accept messages from.
     *
     * This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
    **/
    fromList(req: operations.FromListRequest, config?: AxiosRequestConfig): Promise<operations.FromListResponse>;
    /**
     * getActiveDataList - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
     *
     * This list is guaranteed to be sorted into increasing order.
    **/
    getActiveDataList(config?: AxiosRequestConfig): Promise<operations.GetActiveDataListResponse>;
    /**
     * getActiveList - The list of {agentnum} that are currently active (running or paused).
     *
     * This list is guaranteed to be sorted into increasing order.
    **/
    getActiveList(config?: AxiosRequestConfig): Promise<operations.GetActiveListResponse>;
    /**
     * getAgentState - current running state of the agent
     *
     * 0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
    **/
    getAgentState(req: operations.GetAgentStateRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentStateResponse>;
    /**
     * getCfgFileChanged - This predicate indicates if the currently loaded agent configuration file has changed.
     *
     * Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
    **/
    getCfgFileChanged(config?: AxiosRequestConfig): Promise<operations.GetCfgFileChangedResponse>;
    /**
     * getCfgfile - The currently loaded lab configuration file for the particular user.
     *
     * In the case of multi-user access this command returns a different configuration file loaded for each user.
    **/
    getCfgfile(config?: AxiosRequestConfig): Promise<operations.GetCfgfileResponse>;
    /**
     * getChanged - has the agent value space changed?
     *
     * has the agent value space changed?
    **/
    getChanged(req: operations.GetChangedRequest, config?: AxiosRequestConfig): Promise<operations.GetChangedResponse>;
    /**
     * getChangedConfigList - The list of {agentnum} for which a configurable parameter changed.
     *
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
    **/
    getChangedConfigList(config?: AxiosRequestConfig): Promise<operations.GetChangedConfigListResponse>;
    /**
     * getChangedStateList - The list of {agentnum state} for which the state changed.
     *
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
    **/
    getChangedStateList(config?: AxiosRequestConfig): Promise<operations.GetChangedStateListResponse>;
    /**
     * getClients - The number of clients currently connected to the daemon.
     *
     * The number of clients currently connected to the daemon.
    **/
    getClients(config?: AxiosRequestConfig): Promise<operations.GetClientsResponse>;
    /**
     * getConfigChanged - has the lab configuration changed?
     *
     * has the lab configuration changed?
    **/
    getConfigChanged(req: operations.GetConfigChangedRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigChangedResponse>;
    /**
     * getConfiguredList - The list of {agentnum} that are currently configured.
     *
     * This list is guaranteed to be sorted into increasing order.
    **/
    getConfiguredList(config?: AxiosRequestConfig): Promise<operations.GetConfiguredListResponse>;
    /**
     * getDaemonProtocols - The set of protocols supported by the Simulator.
     *
     * The set of protocols supported by the Simulator.
    **/
    getDaemonProtocols(config?: AxiosRequestConfig): Promise<operations.GetDaemonProtocolsResponse>;
    /**
     * getDelay - one-way transit delay in msec.
     *
     * The minimum granularity is 10 msec.
    **/
    getDelay(req: operations.GetDelayRequest, config?: AxiosRequestConfig): Promise<operations.GetDelayResponse>;
    /**
     * getDrops - drop rate (every N-th PDU). 0 means no drops.
     *
     * drop rate (every N-th PDU). 0 means no drops.
    **/
    getDrops(req: operations.GetDropsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropsResponse>;
    /**
     * getHost - host address of the agent.
     *
     * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
    **/
    getHost(req: operations.GetHostRequest, config?: AxiosRequestConfig): Promise<operations.GetHostResponse>;
    /**
     * getInfo - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
     *
     * Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
    **/
    getInfo(req: operations.GetInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetInfoResponse>;
    /**
     * getInformTimeout - timeout in seconds for retransmitting INFORM PDUs.
     *
     * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
    **/
    getInformTimeout(req: operations.GetInformTimeoutRequest, config?: AxiosRequestConfig): Promise<operations.GetInformTimeoutResponse>;
    /**
     * getInstances - Display the MIB object instances for the specified object.
     *
     * This enables MIB browsing of the MIB on the current agent.
    **/
    getInstances(req: operations.GetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesResponse>;
    /**
     * getInterface - network interface card for the agent.
     *
     * network interface card for the agent.
    **/
    getInterface(req: operations.GetInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetInterfaceResponse>;
    /**
     * getInterfaces - The set of network interfaces that can be used for simulations.
     *
     * The set of network interfaces that can be used for simulations.
    **/
    getInterfaces(config?: AxiosRequestConfig): Promise<operations.GetInterfacesResponse>;
    /**
     * getLast - The last configured agent instance.
     *
     * The last configured agent instance.
    **/
    getLast(config?: AxiosRequestConfig): Promise<operations.GetLastResponse>;
    /**
     * getLog - The current log file for the Simulator.
     *
     * The current log file for the Simulator.
    **/
    getLog(config?: AxiosRequestConfig): Promise<operations.GetLogResponse>;
    /**
     * getMask - subnet mask of the agent.
     *
     * subnet mask of the agent.
    **/
    getMask(req: operations.GetMaskRequest, config?: AxiosRequestConfig): Promise<operations.GetMaskResponse>;
    /**
     * getMax - The maximum number of agent instances.
     *
     * The maximum number of agent instances.
    **/
    getMax(config?: AxiosRequestConfig): Promise<operations.GetMaxResponse>;
    /**
     * getMib - Return the MIB that defines the specified object.
     *
     * This will only return a MIB name if the object is unmistakeably defined in a MIB.
    **/
    getMib(req: operations.GetMibRequest, config?: AxiosRequestConfig): Promise<operations.GetMibResponse>;
    /**
     * getMibs - set of MIBs, simulations and scenarios
     *
     * set of MIBs, simulations and scenarios
    **/
    getMibs(req: operations.GetMibsRequest, config?: AxiosRequestConfig): Promise<operations.GetMibsResponse>;
    /**
     * getName - Return the symbolic name of the specified object identifier.
     *
     * Return the symbolic name of the specified object identifier.
    **/
    getName(req: operations.GetNameRequest, config?: AxiosRequestConfig): Promise<operations.GetNameResponse>;
    /**
     * getNetaddr - The network address of the host where the MIMIC simulator is running.
     *
     * The network address of the host where the MIMIC simulator is running.
    **/
    getNetaddr(config?: AxiosRequestConfig): Promise<operations.GetNetaddrResponse>;
    /**
     * getNetdev - The default network device to be used for agent addresses.
     *
     * The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
    **/
    getNetdev(config?: AxiosRequestConfig): Promise<operations.GetNetdevResponse>;
    /**
     * getNumberStarts - number of starts for the agent.
     *
     * This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
    **/
    getNumberStarts(req: operations.GetNumberStartsRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberStartsResponse>;
    /**
     * getObjects - Display the MIB objects below the current position
     *
     * This command is similar to the ls or dir operating system commands to list filesystem directories.
    **/
    getObjects(req: operations.GetObjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsResponse>;
    /**
     * getOid - Return the numeric OID of the specified object.
     *
     * Return the numeric OID of the specified object.
    **/
    getOid(req: operations.GetOidRequest, config?: AxiosRequestConfig): Promise<operations.GetOidResponse>;
    /**
     * getOiddir - MIB directory of the agent.
     *
     * MIB directory of the agent.
    **/
    getOiddir(req: operations.GetOiddirRequest, config?: AxiosRequestConfig): Promise<operations.GetOiddirResponse>;
    /**
     * getOwner - owner of the agent.
     *
     * owner of the agent.
    **/
    getOwner(req: operations.GetOwnerRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnerResponse>;
    /**
     * getPdusize - maximum PDU size.
     *
     * The limit for this configurable is 65536.
    **/
    getPdusize(req: operations.GetPdusizeRequest, config?: AxiosRequestConfig): Promise<operations.GetPdusizeResponse>;
    /**
     * getPort - port number
     *
     * port number
    **/
    getPort(req: operations.GetPortRequest, config?: AxiosRequestConfig): Promise<operations.GetPortResponse>;
    /**
     * getPrivdir - private directory of the agent.
     *
     * private directory of the agent.
    **/
    getPrivdir(req: operations.GetPrivdirRequest, config?: AxiosRequestConfig): Promise<operations.GetPrivdirResponse>;
    /**
     * getProduct - The product number that is licensed.
     *
     * The product number that is licensed.
    **/
    getProduct(config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * getProtocols - protocols supported by agent
     *
     * protocols supported by agent as an array of strings
    **/
    getProtocols(req: operations.GetProtocolsRequest, config?: AxiosRequestConfig): Promise<operations.GetProtocolsResponse>;
    /**
     * getReadCommunity - read community string
     *
     * read community string
    **/
    getReadCommunity(req: operations.GetReadCommunityRequest, config?: AxiosRequestConfig): Promise<operations.GetReadCommunityResponse>;
    /**
     * getReturn - The return mode.
     *
     * The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
    **/
    getReturn(config?: AxiosRequestConfig): Promise<operations.GetReturnResponse>;
    /**
     * getScen - first scenario name
     *
     * first scenario name
    **/
    getScen(req: operations.GetScenRequest, config?: AxiosRequestConfig): Promise<operations.GetScenResponse>;
    /**
     * getSim - first simulation name
     *
     * first simulation name
    **/
    getSim(req: operations.GetSimRequest, config?: AxiosRequestConfig): Promise<operations.GetSimResponse>;
    /**
     * getStarttime - relative start time
     *
     * relative start time
    **/
    getStarttime(req: operations.GetStarttimeRequest, config?: AxiosRequestConfig): Promise<operations.GetStarttimeResponse>;
    /**
     * getState - Get the state of a MIB object object.
     *
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    getState(req: operations.GetStateRequest, config?: AxiosRequestConfig): Promise<operations.GetStateResponse>;
    /**
     * getStateChanged - has the agent state changed?
     *
     * has the agent state changed?
    **/
    getStateChanged(req: operations.GetStateChangedRequest, config?: AxiosRequestConfig): Promise<operations.GetStateChangedResponse>;
    /**
     * getStatistics - current statistics of the agent instance
     *
     * The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
    **/
    getStatistics(req: operations.GetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsResponse>;
    /**
     * getTrace - SNMP PDU tracing
     *
     * SNMP PDU tracing
    **/
    getTrace(req: operations.GetTraceRequest, config?: AxiosRequestConfig): Promise<operations.GetTraceResponse>;
    /**
     * getValidate - SNMP SET validation policy.
     *
     * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
    **/
    getValidate(req: operations.GetValidateRequest, config?: AxiosRequestConfig): Promise<operations.GetValidateResponse>;
    /**
     * getValue - Get a variable in the Value Space.
     *
     * Get a variable in the Value Space.
    **/
    getValue(req: operations.GetValueRequest, config?: AxiosRequestConfig): Promise<operations.GetValueResponse>;
    /**
     * getVariables - Display the variables for the specified instance instance for the specified MIB object object
     *
     * This enables variable browsing of the MIB on the current agent.
    **/
    getVariables(req: operations.GetVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetVariablesResponse>;
    /**
     * getVersion - The version of the MIMIC command interface.
     *
     * The version of the MIMIC command interface.
    **/
    getVersion(config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * getWriteCommunity - write community string
     *
     * write community string
    **/
    getWriteCommunity(req: operations.GetWriteCommunityRequest, config?: AxiosRequestConfig): Promise<operations.GetWriteCommunityResponse>;
    /**
     * halt - Halt the current agent.
     *
     * Halt the current agent.
    **/
    halt(req: operations.HaltRequest, config?: AxiosRequestConfig): Promise<operations.HaltResponse>;
    /**
     * listDaemonTimerScripts - List the timer scripts currently running along with the their intervals.
     *
     * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
    **/
    listDaemonTimerScripts(config?: AxiosRequestConfig): Promise<operations.ListDaemonTimerScriptsResponse>;
    /**
     * listIpaliases - Lists all the additional ipaliases configured for the agent.
     *
     * The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
    **/
    listIpaliases(req: operations.ListIpaliasesRequest, config?: AxiosRequestConfig): Promise<operations.ListIpaliasesResponse>;
    /**
     * listTimerScripts - List the timer scripts currently running along with the their intervals.
     *
     * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
    **/
    listTimerScripts(req: operations.ListTimerScriptsRequest, config?: AxiosRequestConfig): Promise<operations.ListTimerScriptsResponse>;
    /**
     * mgetInfo - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
     *
     * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
    **/
    mgetInfo(req: operations.MgetInfoRequest, config?: AxiosRequestConfig): Promise<operations.MgetInfoResponse>;
    /**
     * msetValue - Set multiple variables in the Value Space.
     *
     * This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
    **/
    msetValue(req: operations.MsetValueRequest, config?: AxiosRequestConfig): Promise<operations.MsetValueResponse>;
    /**
     * munsetValue - Unset multiple variables in the Value Space
     *
     * This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
    **/
    munsetValue(req: operations.MunsetValueRequest, config?: AxiosRequestConfig): Promise<operations.MunsetValueResponse>;
    /**
     * new - Add an agent.
     *
     * Add an agent.
    **/
    new(req: operations.NewRequest, config?: AxiosRequestConfig): Promise<operations.NewResponse>;
    /**
     * pauseNow - Pause the current agent.
     *
     * Pause the current agent.
    **/
    pauseNow(req: operations.PauseNowRequest, config?: AxiosRequestConfig): Promise<operations.PauseNowResponse>;
    /**
     * protocolCoapGetArgs - Show the agent's COAP argument structure
     *
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolCoapGetArgs(req: operations.ProtocolCoapGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetArgsResponse>;
    /**
     * protocolCoapGetConfig - Show the agent's COAP configuration
     *
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolCoapGetConfig(req: operations.ProtocolCoapGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetConfigResponse>;
    /**
     * protocolCoapGetStatistics - Show the agent's COAP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolCoapGetStatistics(req: operations.ProtocolCoapGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetStatisticsResponse>;
    /**
     * protocolCoapGetStatsHdr - Show the COAP statistics headers
     *
     * The headers of statistics fields
    **/
    protocolCoapGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetStatsHdrResponse>;
    /**
     * protocolCoapGetTrace - Show the agent's COAP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolCoapGetTrace(req: operations.ProtocolCoapGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetTraceResponse>;
    /**
     * protocolCoapSetConfig - Set the agent's COAP configuration
     *
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolCoapSetConfig(req: operations.ProtocolCoapSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapSetConfigResponse>;
    /**
     * protocolCoapSetTrace - Set the agent's COAP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolCoapSetTrace(req: operations.ProtocolCoapSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapSetTraceResponse>;
    /**
     * protocolDhcpGetArgs - Show the agent's DHCP argument structure
     *
     * Agent's DHCP configuration particulars
    **/
    protocolDhcpGetArgs(req: operations.ProtocolDhcpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetArgsResponse>;
    /**
     * protocolDhcpGetConfig - Show the agent's DHCP configuration
     *
     * Agent's DHCP configuration hwaddr,classid,add_options,script
    **/
    protocolDhcpGetConfig(req: operations.ProtocolDhcpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetConfigResponse>;
    /**
     * protocolDhcpGetStatistics - Show the agent's DHCP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolDhcpGetStatistics(req: operations.ProtocolDhcpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetStatisticsResponse>;
    /**
     * protocolDhcpGetStatsHdr - Show the DHCP statistics headers
     *
     * The headers of statistics fields
    **/
    protocolDhcpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetStatsHdrResponse>;
    /**
     * protocolDhcpGetTrace - Show the agent's DHCP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolDhcpGetTrace(req: operations.ProtocolDhcpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetTraceResponse>;
    /**
     * protocolDhcpParams - Show the parameters configured by the server in its DHCP-OFFER message
     *
     * DHCP-OFFER message parameters
    **/
    protocolDhcpParams(req: operations.ProtocolDhcpParamsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpParamsResponse>;
    /**
     * protocolDhcpSetConfig - Set the agent's DHCP configuration
     *
     * Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolDhcpSetConfig(req: operations.ProtocolDhcpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpSetConfigResponse>;
    /**
     * protocolDhcpSetTrace - Set the agent's DHCP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolDhcpSetTrace(req: operations.ProtocolDhcpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpSetTraceResponse>;
    /**
     * protocolGetConfig - Returns the protocol's configuration.
     *
     * Returns the protocol's configuration.
    **/
    protocolGetConfig(req: operations.ProtocolGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolGetConfigResponse>;
    /**
     * protocolIpmiGetArgs - Show the agent's IPMI argument structure
     *
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolIpmiGetArgs(req: operations.ProtocolIpmiGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetArgsResponse>;
    /**
     * protocolIpmiGetAttr - Show the outgoing message's attributes
     *
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    protocolIpmiGetAttr(req: operations.ProtocolIpmiGetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetAttrResponse>;
    /**
     * protocolIpmiGetConfig - Show the agent's IPMI configuration
     *
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolIpmiGetConfig(req: operations.ProtocolIpmiGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetConfigResponse>;
    /**
     * protocolIpmiGetStatistics - Show the agent's IPMI statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolIpmiGetStatistics(req: operations.ProtocolIpmiGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetStatisticsResponse>;
    /**
     * protocolIpmiGetStatsHdr - Show the IPMI statistics headers
     *
     * The headers of statistics fields
    **/
    protocolIpmiGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetStatsHdrResponse>;
    /**
     * protocolIpmiGetTrace - Show the agent's IPMI traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolIpmiGetTrace(req: operations.ProtocolIpmiGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetTraceResponse>;
    /**
     * protocolIpmiSetAttr - Set the outgoing message's attributes
     *
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    protocolIpmiSetAttr(req: operations.ProtocolIpmiSetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetAttrResponse>;
    /**
     * protocolIpmiSetConfig - Set the agent's IPMI configuration
     *
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolIpmiSetConfig(req: operations.ProtocolIpmiSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetConfigResponse>;
    /**
     * protocolIpmiSetTrace - Set the agent's IPMI traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolIpmiSetTrace(req: operations.ProtocolIpmiSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetTraceResponse>;
    /**
     * protocolMqttClientGetProtstate - Show the agent's MQTT TCP connection state
     *
     * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
    **/
    protocolMqttClientGetProtstate(req: operations.ProtocolMqttClientGetProtstateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientGetProtstateResponse>;
    /**
     * protocolMqttClientGetState - Show the agent's MQTT state
     *
     * 0 means stopped, 1 means running
    **/
    protocolMqttClientGetState(req: operations.ProtocolMqttClientGetStateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientGetStateResponse>;
    /**
     * protocolMqttClientMessageCard - Show the agent's current messages' cardinality
     *
     * 0 or more
    **/
    protocolMqttClientMessageCard(req: operations.ProtocolMqttClientMessageCardRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageCardResponse>;
    /**
     * protocolMqttClientMessageGet - Show the agent's message attributes
     *
     * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
    **/
    protocolMqttClientMessageGet(req: operations.ProtocolMqttClientMessageGetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageGetResponse>;
    /**
     * protocolMqttClientMessageSet - Set the agent's message attributes
     *
     * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
    **/
    protocolMqttClientMessageSet(req: operations.ProtocolMqttClientMessageSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageSetResponse>;
    /**
     * protocolMqttClientResubscribe - Restart receiving messages from a subcription of the agent
     *
     * Restarts a subscription
    **/
    protocolMqttClientResubscribe(req: operations.ProtocolMqttClientResubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientResubscribeResponse>;
    /**
     * protocolMqttClientRuntimeAbort - Abort agent's MQTT TCP session without sending DISCONNECT command
     *
     * Abort a connection
    **/
    protocolMqttClientRuntimeAbort(req: operations.ProtocolMqttClientRuntimeAbortRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeAbortResponse>;
    /**
     * protocolMqttClientRuntimeConnect - Start agent's MQTT TCP session
     *
     * Start a connection
    **/
    protocolMqttClientRuntimeConnect(req: operations.ProtocolMqttClientRuntimeConnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeConnectResponse>;
    /**
     * protocolMqttClientRuntimeDisconnect - Disconnect agent's MQTT TCP session by sending DISCONNECT command
     *
     * Graceful disconnect
    **/
    protocolMqttClientRuntimeDisconnect(req: operations.ProtocolMqttClientRuntimeDisconnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeDisconnectResponse>;
    /**
     * protocolMqttClientSetBroker - Set the agent's MQTT TCP connection target broker
     *
     * Broker IP address
    **/
    protocolMqttClientSetBroker(req: operations.ProtocolMqttClientSetBrokerRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetBrokerResponse>;
    /**
     * protocolMqttClientSetCleansession - Set the agent's MQTT session
     *
     * 1 for clean session , 0 not
    **/
    protocolMqttClientSetCleansession(req: operations.ProtocolMqttClientSetCleansessionRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetCleansessionResponse>;
    /**
     * protocolMqttClientSetClientid - Set the agent's MQTT client ID
     *
     * MQTT client ID
    **/
    protocolMqttClientSetClientid(req: operations.ProtocolMqttClientSetClientidRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetClientidResponse>;
    /**
     * protocolMqttClientSetKeepalive - Set the agent's MQTT TCP keepalive
     *
     * Keep alive the TCP connection
    **/
    protocolMqttClientSetKeepalive(req: operations.ProtocolMqttClientSetKeepaliveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetKeepaliveResponse>;
    /**
     * protocolMqttClientSetOnDisconnect - Set the agent's MQTT disconnection action
     *
     * Action to take when MQTT session is disconnected
    **/
    protocolMqttClientSetOnDisconnect(req: operations.ProtocolMqttClientSetOnDisconnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetOnDisconnectResponse>;
    /**
     * protocolMqttClientSetPassword - Set the agent's MQTT client password
     *
     * Client password
    **/
    protocolMqttClientSetPassword(req: operations.ProtocolMqttClientSetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetPasswordResponse>;
    /**
     * protocolMqttClientSetPort - Set the agent's MQTT TCP connection target port
     *
     * target TCP port
    **/
    protocolMqttClientSetPort(req: operations.ProtocolMqttClientSetPortRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetPortResponse>;
    /**
     * protocolMqttClientSetUsername - Set the agent's MQTT client username
     *
     * Client username
    **/
    protocolMqttClientSetUsername(req: operations.ProtocolMqttClientSetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetUsernameResponse>;
    /**
     * protocolMqttClientSetWillmsg - Set the agent's MQTT client's will
     *
     * Will message
    **/
    protocolMqttClientSetWillmsg(req: operations.ProtocolMqttClientSetWillmsgRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillmsgResponse>;
    /**
     * protocolMqttClientSetWillqos - Set the agent's MQTT will message's QOS field
     *
     * QOS field
    **/
    protocolMqttClientSetWillqos(req: operations.ProtocolMqttClientSetWillqosRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillqosResponse>;
    /**
     * protocolMqttClientSetWillretain - Set the agent's MQTT retained will
     *
     * Retaining will
    **/
    protocolMqttClientSetWillretain(req: operations.ProtocolMqttClientSetWillretainRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillretainResponse>;
    /**
     * protocolMqttClientSetWilltopic - Set the agent's MQTT client will's topic
     *
     * Will topic for the will message
    **/
    protocolMqttClientSetWilltopic(req: operations.ProtocolMqttClientSetWilltopicRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWilltopicResponse>;
    /**
     * protocolMqttClientSubscribeCard - Show the agent's current subscriptions' cardinality
     *
     * 0 or more
    **/
    protocolMqttClientSubscribeCard(req: operations.ProtocolMqttClientSubscribeCardRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeCardResponse>;
    /**
     * protocolMqttClientSubscribeGet - Show the agent's subscription attributes
     *
     * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
    **/
    protocolMqttClientSubscribeGet(req: operations.ProtocolMqttClientSubscribeGetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeGetResponse>;
    /**
     * protocolMqttClientSubscribeSet - Set the agent's subscribe attributes
     *
     * Attribute can not be properties .
    **/
    protocolMqttClientSubscribeSet(req: operations.ProtocolMqttClientSubscribeSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeSetResponse>;
    /**
     * protocolMqttClientUnsubscribe - Stops receiving messages from a subcription of the agent
     *
     * Stops a subscription
    **/
    protocolMqttClientUnsubscribe(req: operations.ProtocolMqttClientUnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientUnsubscribeResponse>;
    /**
     * protocolMqttGetArgs - Show the agent's MQTT argument structure
     *
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolMqttGetArgs(req: operations.ProtocolMqttGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetArgsResponse>;
    /**
     * protocolMqttGetConfig - Show the agent's MQTT configuration
     *
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolMqttGetConfig(req: operations.ProtocolMqttGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetConfigResponse>;
    /**
     * protocolMqttGetStatistics - Show the agent's MQTT statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolMqttGetStatistics(req: operations.ProtocolMqttGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetStatisticsResponse>;
    /**
     * protocolMqttGetStatsHdr - Show the MQTT statistics headers
     *
     * The headers of statistics fields
    **/
    protocolMqttGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetStatsHdrResponse>;
    /**
     * protocolMqttGetTrace - Show the agent's MQTT traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolMqttGetTrace(req: operations.ProtocolMqttGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetTraceResponse>;
    /**
     * protocolMqttSetConfig - Set the agent's MQTT configuration
     *
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolMqttSetConfig(req: operations.ProtocolMqttSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttSetConfigResponse>;
    /**
     * protocolMqttSetTrace - Set the agent's MQTT traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolMqttSetTrace(req: operations.ProtocolMqttSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttSetTraceResponse>;
    /**
     * protocolNetflowChangeAttr - Change NETFLOW export attributes
     *
     * Change attributes
    **/
    protocolNetflowChangeAttr(req: operations.ProtocolNetflowChangeAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeAttrResponse>;
    /**
     * protocolNetflowChangeDfs - Change NETFLOW data export interval
     *
     * Interval in msec .
    **/
    protocolNetflowChangeDfs(req: operations.ProtocolNetflowChangeDfsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeDfsResponse>;
    /**
     * protocolNetflowChangeTfs - Change NETFLOW template export interval
     *
     * Interval in msec .
    **/
    protocolNetflowChangeTfs(req: operations.ProtocolNetflowChangeTfsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeTfsResponse>;
    /**
     * protocolNetflowGetArgs - Show the agent's NETFLOW argument structure
     *
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolNetflowGetArgs(req: operations.ProtocolNetflowGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetArgsResponse>;
    /**
     * protocolNetflowGetConfig - Show the agent's NETFLOW configuration
     *
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolNetflowGetConfig(req: operations.ProtocolNetflowGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetConfigResponse>;
    /**
     * protocolNetflowGetStatistics - Show the agent's NETFLOW statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolNetflowGetStatistics(req: operations.ProtocolNetflowGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetStatisticsResponse>;
    /**
     * protocolNetflowGetStatsHdr - Show the NETFLOW statistics headers
     *
     * The headers of statistics fields
    **/
    protocolNetflowGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetStatsHdrResponse>;
    /**
     * protocolNetflowGetTrace - Show the agent's NETFLOW traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolNetflowGetTrace(req: operations.ProtocolNetflowGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetTraceResponse>;
    /**
     * protocolNetflowHalt - Halt NETFLOW traffic
     *
     * Halt NETFLOW traffic
    **/
    protocolNetflowHalt(req: operations.ProtocolNetflowHaltRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowHaltResponse>;
    /**
     * protocolNetflowList - Show list of NETFLOW exports
     *
     * Show list of NETFLOW exports
    **/
    protocolNetflowList(req: operations.ProtocolNetflowListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowListResponse>;
    /**
     * protocolNetflowReload - Reload NETFLOW configuration before resuming traffic
     *
     * Reload NETFLOW configuration before resuming traffic
    **/
    protocolNetflowReload(req: operations.ProtocolNetflowReloadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowReloadResponse>;
    /**
     * protocolNetflowResume - Resuming traffic
     *
     * Resuming traffic
    **/
    protocolNetflowResume(req: operations.ProtocolNetflowResumeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowResumeResponse>;
    /**
     * protocolNetflowSetCollector - Swap NETFLOW collector
     *
     * Allow changing collector without stopping agent
    **/
    protocolNetflowSetCollector(req: operations.ProtocolNetflowSetCollectorRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetCollectorResponse>;
    /**
     * protocolNetflowSetConfig - Set the agent's NETFLOW configuration
     *
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolNetflowSetConfig(req: operations.ProtocolNetflowSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetConfigResponse>;
    /**
     * protocolNetflowSetFileName - Swap NETFLOW configuration file
     *
     * Allow reloading the configuration file for an agent without stopping agent
    **/
    protocolNetflowSetFileName(req: operations.ProtocolNetflowSetFileNameRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetFileNameResponse>;
    /**
     * protocolNetflowSetTrace - Set the agent's NETFLOW traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolNetflowSetTrace(req: operations.ProtocolNetflowSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetTraceResponse>;
    /**
     * protocolProxyGetArgs - Show the agent's PROXY argument structure
     *
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolProxyGetArgs(req: operations.ProtocolProxyGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetArgsResponse>;
    /**
     * protocolProxyGetConfig - Show the agent's PROXY configuration
     *
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolProxyGetConfig(req: operations.ProtocolProxyGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetConfigResponse>;
    /**
     * protocolProxyGetStatistics - Show the agent's PROXY statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolProxyGetStatistics(req: operations.ProtocolProxyGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetStatisticsResponse>;
    /**
     * protocolProxyGetStatsHdr - Show the PROXY statistics headers
     *
     * The headers of statistics fields
    **/
    protocolProxyGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetStatsHdrResponse>;
    /**
     * protocolProxyGetTrace - Show the agent's PROXY traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolProxyGetTrace(req: operations.ProtocolProxyGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetTraceResponse>;
    /**
     * protocolProxyPortAdd - Add individual proxy target on the agent and the simulator host
     *
     * Additional proxy target
    **/
    protocolProxyPortAdd(req: operations.ProtocolProxyPortAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortAddResponse>;
    /**
     * protocolProxyPortIsstarted - Check individual target
     *
     * Check individual target
    **/
    protocolProxyPortIsstarted(req: operations.ProtocolProxyPortIsstartedRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortIsstartedResponse>;
    /**
     * protocolProxyPortList - List all proxy targets
    **/
    protocolProxyPortList(req: operations.ProtocolProxyPortListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortListResponse>;
    /**
     * protocolProxyPortRemove - Remove individual proxy target on the agent and the simulator host
     *
     * Remove proxy target
    **/
    protocolProxyPortRemove(req: operations.ProtocolProxyPortRemoveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortRemoveResponse>;
    /**
     * protocolProxyPortStart - Start additional target
     *
     * Start additional target
    **/
    protocolProxyPortStart(req: operations.ProtocolProxyPortStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortStartResponse>;
    /**
     * protocolProxyPortStop - Stop additional target
     *
     * Stop additional target
    **/
    protocolProxyPortStop(req: operations.ProtocolProxyPortStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortStopResponse>;
    /**
     * protocolProxySetConfig - Set the agent's PROXY configuration
     *
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolProxySetConfig(req: operations.ProtocolProxySetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxySetConfigResponse>;
    /**
     * protocolProxySetTrace - Set the agent's PROXY traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolProxySetTrace(req: operations.ProtocolProxySetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxySetTraceResponse>;
    /**
     * protocolSflowGetArgs - Show the agent's SFLOW argument structure
     *
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSflowGetArgs(req: operations.ProtocolSflowGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetArgsResponse>;
    /**
     * protocolSflowGetConfig - Show the agent's SFLOW configuration
     *
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSflowGetConfig(req: operations.ProtocolSflowGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetConfigResponse>;
    /**
     * protocolSflowGetStatistics - Show the agent's SFLOW statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolSflowGetStatistics(req: operations.ProtocolSflowGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetStatisticsResponse>;
    /**
     * protocolSflowGetStatsHdr - Show the SFLOW statistics headers
     *
     * The headers of statistics fields
    **/
    protocolSflowGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetStatsHdrResponse>;
    /**
     * protocolSflowGetTrace - Show the agent's SFLOW traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolSflowGetTrace(req: operations.ProtocolSflowGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetTraceResponse>;
    /**
     * protocolSflowHalt - Halt SFLOW traffic
     *
     * Halt SFLOW traffic
    **/
    protocolSflowHalt(req: operations.ProtocolSflowHaltRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowHaltResponse>;
    /**
     * protocolSflowReload - Reload SFLOW configuration before resuming traffic
     *
     * Reload SFLOW configuration before resuming traffic
    **/
    protocolSflowReload(req: operations.ProtocolSflowReloadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowReloadResponse>;
    /**
     * protocolSflowResume - Resuming traffic
     *
     * Resuming traffic
    **/
    protocolSflowResume(req: operations.ProtocolSflowResumeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowResumeResponse>;
    /**
     * protocolSflowSetConfig - Set the agent's SFLOW configuration
     *
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSflowSetConfig(req: operations.ProtocolSflowSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowSetConfigResponse>;
    /**
     * protocolSflowSetTrace - Set the agent's SFLOW traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSflowSetTrace(req: operations.ProtocolSflowSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowSetTraceResponse>;
    /**
     * protocolSnmptcpGetArgs - Show the agent's SNMPTCP argument structure
     *
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSnmptcpGetArgs(req: operations.ProtocolSnmptcpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetArgsResponse>;
    /**
     * protocolSnmptcpGetConfig - Show the agent's SNMPTCP configuration
     *
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSnmptcpGetConfig(req: operations.ProtocolSnmptcpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetConfigResponse>;
    /**
     * protocolSnmptcpGetStatistics - Show the agent's SNMPTCP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolSnmptcpGetStatistics(req: operations.ProtocolSnmptcpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetStatisticsResponse>;
    /**
     * protocolSnmptcpGetStatsHdr - Show the SNMPTCP statistics headers
     *
     * The headers of statistics fields
    **/
    protocolSnmptcpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetStatsHdrResponse>;
    /**
     * protocolSnmptcpGetTrace - Show the agent's SNMPTCP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolSnmptcpGetTrace(req: operations.ProtocolSnmptcpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetTraceResponse>;
    /**
     * protocolSnmptcpIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSnmptcpIpaliasDisable(req: operations.ProtocolSnmptcpIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasDisableResponse>;
    /**
     * protocolSnmptcpIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSnmptcpIpaliasEnable(req: operations.ProtocolSnmptcpIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasEnableResponse>;
    /**
     * protocolSnmptcpIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSnmptcpIpaliasIsenabled(req: operations.ProtocolSnmptcpIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasIsenabledResponse>;
    /**
     * protocolSnmptcpIpaliasList - List all IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSnmptcpIpaliasList(req: operations.ProtocolSnmptcpIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasListResponse>;
    /**
     * protocolSnmptcpSetConfig - Set the agent's SNMPTCP configuration
     *
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSnmptcpSetConfig(req: operations.ProtocolSnmptcpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpSetConfigResponse>;
    /**
     * protocolSnmptcpSetTrace - Set the agent's SNMPTCP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSnmptcpSetTrace(req: operations.ProtocolSnmptcpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpSetTraceResponse>;
    /**
     * protocolSnmpv3AccessAdd - Adds a new access entry with the specified parameters.
     *
     * Adds a new access entry with the specified parameters.
    **/
    protocolSnmpv3AccessAdd(req: operations.ProtocolSnmpv3AccessAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3AccessAddResponse>;
    /**
     * protocolSnmpv3AccessClear - Clears all access entries.
     *
     * Clears all access entries.
    **/
    protocolSnmpv3AccessClear(req: operations.ProtocolSnmpv3AccessClearRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3AccessClearResponse>;
    /**
     * protocolSnmpv3AccessDel - Deletes the specified access entry.
     *
     * Deletes the specified access entry.
    **/
    protocolSnmpv3AccessDel(req: operations.ProtocolSnmpv3AccessDelRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3AccessDelResponse>;
    /**
     * protocolSnmpv3AccessList - Returns the current acccess entries as an array of strings.
     *
     * Returns the current acccess entries as an array of strings.
    **/
    protocolSnmpv3AccessList(req: operations.ProtocolSnmpv3AccessListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3AccessListResponse>;
    /**
     * protocolSnmpv3GetConfig - Returns the SNMPv3 configuration.
     *
     * Returns the SNMPv3 configuration.
    **/
    protocolSnmpv3GetConfig(req: operations.ProtocolSnmpv3GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetConfigResponse>;
    /**
     * protocolSnmpv3GetContextEngineid - Retrieves the contextEngineID for the agent instance.
     *
     * Retrieves the contextEngineID for the agent instance.
    **/
    protocolSnmpv3GetContextEngineid(req: operations.ProtocolSnmpv3GetContextEngineidRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetContextEngineidResponse>;
    /**
     * protocolSnmpv3GetEngineboots - Retrieves the number of times the agent has been restarted.
     *
     * Retrieves the number of times the agent has been restarted.
    **/
    protocolSnmpv3GetEngineboots(req: operations.ProtocolSnmpv3GetEnginebootsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetEnginebootsResponse>;
    /**
     * protocolSnmpv3GetEngineid - For started agents, retrieves the current engineID in use by the snmpv3 module.
     *
     * For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
    **/
    protocolSnmpv3GetEngineid(req: operations.ProtocolSnmpv3GetEngineidRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetEngineidResponse>;
    /**
     * protocolSnmpv3GetEnginetime - Retrieves the time in seconds for which the agent has been running.
     *
     * Retrieves the time in seconds for which the agent has been running.
    **/
    protocolSnmpv3GetEnginetime(req: operations.ProtocolSnmpv3GetEnginetimeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GetEnginetimeResponse>;
    /**
     * protocolSnmpv3GroupAdd - Adds a new group entry with the specified parameters.
     *
     * Adds a new group entry with the specified parameters.
    **/
    protocolSnmpv3GroupAdd(req: operations.ProtocolSnmpv3GroupAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GroupAddResponse>;
    /**
     * protocolSnmpv3GroupClear - Clears all group entries.
     *
     * Clears all group entries.
    **/
    protocolSnmpv3GroupClear(req: operations.ProtocolSnmpv3GroupClearRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GroupClearResponse>;
    /**
     * protocolSnmpv3GroupDel - Deletes the specified group entry.
     *
     * Deletes the specified group entry.
    **/
    protocolSnmpv3GroupDel(req: operations.ProtocolSnmpv3GroupDelRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GroupDelResponse>;
    /**
     * protocolSnmpv3GroupList - Returns the current group entries as an array of strings.
     *
     * Returns the current group entries as an array of strings.
    **/
    protocolSnmpv3GroupList(req: operations.ProtocolSnmpv3GroupListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3GroupListResponse>;
    /**
     * protocolSnmpv3SetConfig - Changes the SNMPv3 configuration.
     *
     * Changes the SNMPv3 configuration.
    **/
    protocolSnmpv3SetConfig(req: operations.ProtocolSnmpv3SetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3SetConfigResponse>;
    /**
     * protocolSnmpv3UserAdd - Adds a new user entry with the specified parameters.
     *
     * Adds a new user entry with the specified parameters.
    **/
    protocolSnmpv3UserAdd(req: operations.ProtocolSnmpv3UserAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UserAddResponse>;
    /**
     * protocolSnmpv3UserClear - Clears all user entries.
     *
     * Clears all user entries.
    **/
    protocolSnmpv3UserClear(req: operations.ProtocolSnmpv3UserClearRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UserClearResponse>;
    /**
     * protocolSnmpv3UserDel - Deletes the specified user entry.
     *
     * Deletes the specified user entry.
    **/
    protocolSnmpv3UserDel(req: operations.ProtocolSnmpv3UserDelRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UserDelResponse>;
    /**
     * protocolSnmpv3UserList - Returns the current user entries as a Tcl list.
     *
     * Returns the current user entries as a Tcl list.
    **/
    protocolSnmpv3UserList(req: operations.ProtocolSnmpv3UserListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UserListResponse>;
    /**
     * protocolSnmpv3UsmSave - Saves current user settings in the currently loaded USM config file.
     *
     * Saves current user settings in the currently loaded USM config file.
    **/
    protocolSnmpv3UsmSave(req: operations.ProtocolSnmpv3UsmSaveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UsmSaveResponse>;
    /**
     * protocolSnmpv3UsmSaveas - Saves current user settings in the specified USM config file.
     *
     * Saves current user settings in the specified USM config file.
    **/
    protocolSnmpv3UsmSaveas(req: operations.ProtocolSnmpv3UsmSaveasRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3UsmSaveasResponse>;
    /**
     * protocolSnmpv3VacmSave - Saves current group, access, view settings in the currently loaded VACM config file.
     *
     * Saves current group, access, view settings in the currently loaded VACM config file.
    **/
    protocolSnmpv3VacmSave(req: operations.ProtocolSnmpv3VacmSaveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3VacmSaveResponse>;
    /**
     * protocolSnmpv3VacmSaveas - Saves current group, access, view settings in the specified VACM config file.
     *
     * Saves current group, access, view settings in the specified VACM config file.
    **/
    protocolSnmpv3VacmSaveas(req: operations.ProtocolSnmpv3VacmSaveasRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3VacmSaveasResponse>;
    /**
     * protocolSnmpv3ViewAdd - Adds a new view entry with the specified parameters.
     *
     * Adds a new view entry with the specified parameters.
    **/
    protocolSnmpv3ViewAdd(req: operations.ProtocolSnmpv3ViewAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3ViewAddResponse>;
    /**
     * protocolSnmpv3ViewClear - Clears all view entries.
     *
     * Clears all view entries.
    **/
    protocolSnmpv3ViewClear(req: operations.ProtocolSnmpv3ViewClearRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3ViewClearResponse>;
    /**
     * protocolSnmpv3ViewDel - Deletes the specified view entry.
     *
     * Deletes the specified view entry.
    **/
    protocolSnmpv3ViewDel(req: operations.ProtocolSnmpv3ViewDelRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3ViewDelResponse>;
    /**
     * protocolSnmpv3ViewList - Returns the current view entries as an array of strings.
     *
     * Returns the current view entries as an array of strings.
    **/
    protocolSnmpv3ViewList(req: operations.ProtocolSnmpv3ViewListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmpv3ViewListResponse>;
    /**
     * protocolSshGetArgs - Show the agent's SSH argument structure
     *
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSshGetArgs(req: operations.ProtocolSshGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetArgsResponse>;
    /**
     * protocolSshGetConfig - Show the agent's SSH configuration
     *
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSshGetConfig(req: operations.ProtocolSshGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetConfigResponse>;
    /**
     * protocolSshGetStatistics - Show the agent's SSH statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolSshGetStatistics(req: operations.ProtocolSshGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetStatisticsResponse>;
    /**
     * protocolSshGetStatsHdr - Show the SSH statistics headers
     *
     * The headers of statistics fields
    **/
    protocolSshGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetStatsHdrResponse>;
    /**
     * protocolSshGetTrace - Show the agent's SSH traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolSshGetTrace(req: operations.ProtocolSshGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetTraceResponse>;
    /**
     * protocolSshIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSshIpaliasDisable(req: operations.ProtocolSshIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasDisableResponse>;
    /**
     * protocolSshIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSshIpaliasEnable(req: operations.ProtocolSshIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasEnableResponse>;
    /**
     * protocolSshIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSshIpaliasIsenabled(req: operations.ProtocolSshIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasIsenabledResponse>;
    /**
     * protocolSshIpaliasList - List all IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSshIpaliasList(req: operations.ProtocolSshIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasListResponse>;
    /**
     * protocolSshSetConfig - Set the agent's SSH configuration
     *
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSshSetConfig(req: operations.ProtocolSshSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshSetConfigResponse>;
    /**
     * protocolSshSetTrace - Set the agent's SSH traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSshSetTrace(req: operations.ProtocolSshSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshSetTraceResponse>;
    /**
     * protocolSyslogGetArgs - Show the agent's SYSLOG argument structure
     *
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSyslogGetArgs(req: operations.ProtocolSyslogGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetArgsResponse>;
    /**
     * protocolSyslogGetAttr - Show the outgoing message's attributes
     *
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    protocolSyslogGetAttr(req: operations.ProtocolSyslogGetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetAttrResponse>;
    /**
     * protocolSyslogGetConfig - Show the agent's SYSLOG configuration
     *
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSyslogGetConfig(req: operations.ProtocolSyslogGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetConfigResponse>;
    /**
     * protocolSyslogGetStatistics - Show the agent's SYSLOG statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolSyslogGetStatistics(req: operations.ProtocolSyslogGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetStatisticsResponse>;
    /**
     * protocolSyslogGetStatsHdr - Show the SYSLOG statistics headers
     *
     * The headers of statistics fields
    **/
    protocolSyslogGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetStatsHdrResponse>;
    /**
     * protocolSyslogGetTrace - Show the agent's SYSLOG traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolSyslogGetTrace(req: operations.ProtocolSyslogGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetTraceResponse>;
    /**
     * protocolSyslogSend - Set the agent's SYSLOG traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSyslogSend(req: operations.ProtocolSyslogSendRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSendResponse>;
    /**
     * protocolSyslogSetAttr - Set the outgoing message's attributes
     *
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    protocolSyslogSetAttr(req: operations.ProtocolSyslogSetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetAttrResponse>;
    /**
     * protocolSyslogSetConfig - Set the agent's SYSLOG configuration
     *
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSyslogSetConfig(req: operations.ProtocolSyslogSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetConfigResponse>;
    /**
     * protocolSyslogSetTrace - Set the agent's SYSLOG traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSyslogSetTrace(req: operations.ProtocolSyslogSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetTraceResponse>;
    /**
     * protocolTelnetConnectionLogon - Changes the connection's current logon.
     *
     * Logon change allows (hidden) commands for a different access mode to run.
    **/
    protocolTelnetConnectionLogon(req: operations.ProtocolTelnetConnectionLogonRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionLogonResponse>;
    /**
     * protocolTelnetConnectionRequest - Executes the command asynchronously .
     *
     * Equivalent of the command typed in by the user.
    **/
    protocolTelnetConnectionRequest(req: operations.ProtocolTelnetConnectionRequestRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionRequestResponse>;
    /**
     * protocolTelnetConnectionSignal - Triggers the asynchronous signal event with the specified signal name
     *
     * Signal name is either connect or idle
    **/
    protocolTelnetConnectionSignal(req: operations.ProtocolTelnetConnectionSignalRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionSignalResponse>;
    /**
     * protocolTelnetGetArgs - Show the agent's TELNET argument structure
     *
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTelnetGetArgs(req: operations.ProtocolTelnetGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetArgsResponse>;
    /**
     * protocolTelnetGetConfig - Show the agent's TELNET configuration
     *
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTelnetGetConfig(req: operations.ProtocolTelnetGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetConfigResponse>;
    /**
     * protocolTelnetGetStatistics - Show the agent's TELNET statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolTelnetGetStatistics(req: operations.ProtocolTelnetGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetStatisticsResponse>;
    /**
     * protocolTelnetGetStatsHdr - Show the TELNET statistics headers
     *
     * The headers of statistics fields
    **/
    protocolTelnetGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetStatsHdrResponse>;
    /**
     * protocolTelnetGetTrace - Show the agent's TELNET traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolTelnetGetTrace(req: operations.ProtocolTelnetGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetTraceResponse>;
    /**
     * protocolTelnetIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolTelnetIpaliasDisable(req: operations.ProtocolTelnetIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasDisableResponse>;
    /**
     * protocolTelnetIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolTelnetIpaliasEnable(req: operations.ProtocolTelnetIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasEnableResponse>;
    /**
     * protocolTelnetIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolTelnetIpaliasIsenabled(req: operations.ProtocolTelnetIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasIsenabledResponse>;
    /**
     * protocolTelnetIpaliasList - List all IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolTelnetIpaliasList(req: operations.ProtocolTelnetIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasListResponse>;
    /**
     * protocolTelnetServerGetConnections - Show the agent's TELNET connections
     *
     * IDs of all connected connections
    **/
    protocolTelnetServerGetConnections(req: operations.ProtocolTelnetServerGetConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetConnectionsResponse>;
    /**
     * protocolTelnetServerGetKeymap - Show the agent's TELNET keymap file name
     *
     * Keymap file name
    **/
    protocolTelnetServerGetKeymap(req: operations.ProtocolTelnetServerGetKeymapRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetKeymapResponse>;
    /**
     * protocolTelnetServerGetRulesdb - Show the agent's TELNET rules db file name
     *
     * Rules db file name
    **/
    protocolTelnetServerGetRulesdb(req: operations.ProtocolTelnetServerGetRulesdbRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetRulesdbResponse>;
    /**
     * protocolTelnetServerGetState - Show the agent's TELNET server state
     *
     * Return 1 means accepting connections, 0 not
    **/
    protocolTelnetServerGetState(req: operations.ProtocolTelnetServerGetStateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetStateResponse>;
    /**
     * protocolTelnetServerGetUserdb - Show the agent's TELNET user db file name
     *
     * User db file name
    **/
    protocolTelnetServerGetUserdb(req: operations.ProtocolTelnetServerGetUserdbRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetUserdbResponse>;
    /**
     * protocolTelnetServerGetUsers - Show the agent's TELNET users
     *
     * List of users
    **/
    protocolTelnetServerGetUsers(req: operations.ProtocolTelnetServerGetUsersRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetUsersResponse>;
    /**
     * protocolTelnetSetConfig - Set the agent's TELNET configuration
     *
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTelnetSetConfig(req: operations.ProtocolTelnetSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetSetConfigResponse>;
    /**
     * protocolTelnetSetTrace - Set the agent's TELNET traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolTelnetSetTrace(req: operations.ProtocolTelnetSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetSetTraceResponse>;
    /**
     * protocolTftpGetArgs - Show the agent's TFTP argument structure
     *
     * Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTftpGetArgs(req: operations.ProtocolTftpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetArgsResponse>;
    /**
     * protocolTftpGetConfig - Show the agent's TFTP configuration
     *
     * Agent's TFTP configuration
    **/
    protocolTftpGetConfig(req: operations.ProtocolTftpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetConfigResponse>;
    /**
     * protocolTftpGetStatistics - Show the agent's TFTP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolTftpGetStatistics(req: operations.ProtocolTftpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetStatisticsResponse>;
    /**
     * protocolTftpGetStatsHdr - Show the TFTP statistics headers
     *
     * The headers of statistics fields
    **/
    protocolTftpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetStatsHdrResponse>;
    /**
     * protocolTftpGetTrace - Show the agent's TFTP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolTftpGetTrace(req: operations.ProtocolTftpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetTraceResponse>;
    /**
     * protocolTftpSessionGetParameter - Show a parameter of a TFTP sesssion
     *
     * Parameter is server , port , or dstfile
    **/
    protocolTftpSessionGetParameter(req: operations.ProtocolTftpSessionGetParameterRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionGetParameterResponse>;
    /**
     * protocolTftpSessionRead - Create a read session to download srcfile from server
     *
     * Session ID is returned
    **/
    protocolTftpSessionRead(req: operations.ProtocolTftpSessionReadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionReadResponse>;
    /**
     * protocolTftpSessionSetParameter - Set a parameter of a TFTP sesssion
     *
     * Parameter is server , port , or dstfile
    **/
    protocolTftpSessionSetParameter(req: operations.ProtocolTftpSessionSetParameterRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionSetParameterResponse>;
    /**
     * protocolTftpSessionStart - Start a TFTP sesssion
     *
     * Start uploading or downloading the file
    **/
    protocolTftpSessionStart(req: operations.ProtocolTftpSessionStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStartResponse>;
    /**
     * protocolTftpSessionStatus - Check a TFTP sesssion's status
     *
     * Status includes running state, bytes transfered, and time elapsed
    **/
    protocolTftpSessionStatus(req: operations.ProtocolTftpSessionStatusRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStatusResponse>;
    /**
     * protocolTftpSessionStop - Stop a TFTP sesssion
     *
     * Stop uploading or downloading the file
    **/
    protocolTftpSessionStop(req: operations.ProtocolTftpSessionStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStopResponse>;
    /**
     * protocolTftpSessionWrite - Create a read session to upload srcfile to server
     *
     * Session ID is returned
    **/
    protocolTftpSessionWrite(req: operations.ProtocolTftpSessionWriteRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionWriteResponse>;
    /**
     * protocolTftpSetConfig - Set the agent's TFTP configuration
     *
     * Agent's TFTP configuration
    **/
    protocolTftpSetConfig(req: operations.ProtocolTftpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSetConfigResponse>;
    /**
     * protocolTftpSetTrace - Set the agent's TFTP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolTftpSetTrace(req: operations.ProtocolTftpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSetTraceResponse>;
    /**
     * protocolTodGetArgs - Show the agent's TOD argument structure
     *
     * Agent's TOD configuration
    **/
    protocolTodGetArgs(req: operations.ProtocolTodGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetArgsResponse>;
    /**
     * protocolTodGetConfig - Show the agent's TOD configuration
     *
     * Agent's TOD configuration
    **/
    protocolTodGetConfig(req: operations.ProtocolTodGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetConfigResponse>;
    /**
     * protocolTodGetStatistics - Show the agent's TOD statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolTodGetStatistics(req: operations.ProtocolTodGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetStatisticsResponse>;
    /**
     * protocolTodGetStatsHdr - Show the TOD statistics headers
     *
     * The headers of statistics fields
    **/
    protocolTodGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetStatsHdrResponse>;
    /**
     * protocolTodGetTrace - Show the agent's TOD traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolTodGetTrace(req: operations.ProtocolTodGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetTraceResponse>;
    /**
     * protocolTodGettime - Retrieve TOD time
     *
     * Retrive time from server
    **/
    protocolTodGettime(req: operations.ProtocolTodGettimeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGettimeResponse>;
    /**
     * protocolTodSetConfig - Set the agent's TOD configuration
     *
     * Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTodSetConfig(req: operations.ProtocolTodSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodSetConfigResponse>;
    /**
     * protocolTodSetTrace - Set the agent's TOD traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolTodSetTrace(req: operations.ProtocolTodSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodSetTraceResponse>;
    /**
     * protocolWebGetArgs - Show the agent's WEB argument structure
     *
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolWebGetArgs(req: operations.ProtocolWebGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetArgsResponse>;
    /**
     * protocolWebGetConfig - Show the agent's WEB configuration
     *
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolWebGetConfig(req: operations.ProtocolWebGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetConfigResponse>;
    /**
     * protocolWebGetStatistics - Show the agent's WEB statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolWebGetStatistics(req: operations.ProtocolWebGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetStatisticsResponse>;
    /**
     * protocolWebGetStatsHdr - Show the WEB statistics headers
     *
     * The headers of statistics fields
    **/
    protocolWebGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetStatsHdrResponse>;
    /**
     * protocolWebGetTrace - Show the agent's WEB traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolWebGetTrace(req: operations.ProtocolWebGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetTraceResponse>;
    /**
     * protocolWebPortAdd - Add the agent's WEB port
     *
     * Add port
    **/
    protocolWebPortAdd(req: operations.ProtocolWebPortAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortAddResponse>;
    /**
     * protocolWebPortExists - Show the agent's WEB port
     *
     * Check the port. 1 means existing, 0 means not
    **/
    protocolWebPortExists(req: operations.ProtocolWebPortExistsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortExistsResponse>;
    /**
     * protocolWebPortRemove - Remove the agent's WEB port
     *
     * Remove port
    **/
    protocolWebPortRemove(req: operations.ProtocolWebPortRemoveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortRemoveResponse>;
    /**
     * protocolWebPortSet - Set the agent's WEB port attribute
     *
     * Set port
    **/
    protocolWebPortSet(req: operations.ProtocolWebPortSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortSetResponse>;
    /**
     * protocolWebPortStart - Start the agent's WEB port
     *
     * Start port
    **/
    protocolWebPortStart(req: operations.ProtocolWebPortStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortStartResponse>;
    /**
     * protocolWebPortStop - Stop the agent's WEB port
     *
     * Stop port
    **/
    protocolWebPortStop(req: operations.ProtocolWebPortStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortStopResponse>;
    /**
     * protocolWebSetConfig - Set the agent's WEB configuration
     *
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolWebSetConfig(req: operations.ProtocolWebSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebSetConfigResponse>;
    /**
     * protocolWebSetTrace - Set the agent's WEB traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolWebSetTrace(req: operations.ProtocolWebSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebSetTraceResponse>;
    /**
     * reload - Reload the current agent.
     *
     * This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
    **/
    reload(req: operations.ReloadRequest, config?: AxiosRequestConfig): Promise<operations.ReloadResponse>;
    /**
     * remove - Remove an entry from a table.
     *
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    remove(req: operations.RemoveRequest, config?: AxiosRequestConfig): Promise<operations.RemoveResponse>;
    /**
     * resume - Resume the current agent.
     *
     * Resume the current agent.
    **/
    resume(req: operations.ResumeRequest, config?: AxiosRequestConfig): Promise<operations.ResumeResponse>;
    /**
     * save - Save agent MIB values.
     *
     * Save agent MIB values.
    **/
    save(req: operations.SaveRequest, config?: AxiosRequestConfig): Promise<operations.SaveResponse>;
    /**
     * setDelay - one-way transit delay in msec
     *
     * The minimum granularity is 10 msec.
    **/
    setDelay(req: operations.SetDelayRequest, config?: AxiosRequestConfig): Promise<operations.SetDelayResponse>;
    /**
     * setDrops - drop rate (every N-th PDU)
     *
     * 0 means no drops
    **/
    setDrops(req: operations.SetDropsRequest, config?: AxiosRequestConfig): Promise<operations.SetDropsResponse>;
    /**
     * setHost - host address of the agent.
     *
     * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
    **/
    setHost(req: operations.SetHostRequest, config?: AxiosRequestConfig): Promise<operations.SetHostResponse>;
    /**
     * setInformTimeout - timeout in seconds for retransmitting INFORM PDUs
     *
     * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
    **/
    setInformTimeout(req: operations.SetInformTimeoutRequest, config?: AxiosRequestConfig): Promise<operations.SetInformTimeoutResponse>;
    /**
     * setInterface - network interface card for the agent
     *
     * network interface card for the agent
    **/
    setInterface(req: operations.SetInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.SetInterfaceResponse>;
    /**
     * setLog - The current log file for the Simulator.
     *
     * The current log file for the Simulator.
    **/
    setLog(req: operations.SetLogRequest, config?: AxiosRequestConfig): Promise<operations.SetLogResponse>;
    /**
     * setMask - subnet mask of the agent.
     *
     * subnet mask of the agent.
    **/
    setMask(req: operations.SetMaskRequest, config?: AxiosRequestConfig): Promise<operations.SetMaskResponse>;
    /**
     * setMibs - set of MIBs, simulations and scenarios
     *
     * set of MIBs, simulations and scenarios
    **/
    setMibs(req: operations.SetMibsRequest, config?: AxiosRequestConfig): Promise<operations.SetMibsResponse>;
    /**
     * setNetdev - The network address of the host where the MIMIC simulator is running.
     *
     * The network address of the host where the MIMIC simulator is running.
    **/
    setNetdev(config?: AxiosRequestConfig): Promise<operations.SetNetdevResponse>;
    /**
     * setOiddir - MIB directory of the agent.
     *
     * MIB directory of the agent.
    **/
    setOiddir(req: operations.SetOiddirRequest, config?: AxiosRequestConfig): Promise<operations.SetOiddirResponse>;
    /**
     * setOwner - owner of the agent
     *
     * owner of the agent
    **/
    setOwner(req: operations.SetOwnerRequest, config?: AxiosRequestConfig): Promise<operations.SetOwnerResponse>;
    /**
     * setPdusize - maximum PDU size
     *
     * The limit for this configurable is 65536
    **/
    setPdusize(req: operations.SetPdusizeRequest, config?: AxiosRequestConfig): Promise<operations.SetPdusizeResponse>;
    /**
     * setPort - port number
     *
     * port number
    **/
    setPort(req: operations.SetPortRequest, config?: AxiosRequestConfig): Promise<operations.SetPortResponse>;
    /**
     * setPrivdir - private directory of the agent.
     *
     * private directory of the agent.
    **/
    setPrivdir(req: operations.SetPrivdirRequest, config?: AxiosRequestConfig): Promise<operations.SetPrivdirResponse>;
    /**
     * setProtocols - protocols supported by agent as a comma-separated list
     *
     * protocols supported by agent as a comma-separated list
    **/
    setProtocols(req: operations.SetProtocolsRequest, config?: AxiosRequestConfig): Promise<operations.SetProtocolsResponse>;
    /**
     * setReadCommunity - read community string
     *
     * read community string
    **/
    setReadCommunity(req: operations.SetReadCommunityRequest, config?: AxiosRequestConfig): Promise<operations.SetReadCommunityResponse>;
    /**
     * setStarttime - relative start time
     *
     * relative start time
    **/
    setStarttime(req: operations.SetStarttimeRequest, config?: AxiosRequestConfig): Promise<operations.SetStarttimeResponse>;
    /**
     * setState - Set the state of a MIB object object
     *
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    setState(req: operations.SetStateRequest, config?: AxiosRequestConfig): Promise<operations.SetStateResponse>;
    /**
     * setTrace - SNMP PDU tracing
     *
     * SNMP PDU tracing
    **/
    setTrace(req: operations.SetTraceRequest, config?: AxiosRequestConfig): Promise<operations.SetTraceResponse>;
    /**
     * setValidate - SNMP SET validation policy
     *
     * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
    **/
    setValidate(req: operations.SetValidateRequest, config?: AxiosRequestConfig): Promise<operations.SetValidateResponse>;
    /**
     * setValue - Set a variable in the Value Space.
     *
     * NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
    **/
    setValue(req: operations.SetValueRequest, config?: AxiosRequestConfig): Promise<operations.SetValueResponse>;
    /**
     * setWriteCommunity - write community string
     *
     * write community string
    **/
    setWriteCommunity(req: operations.SetWriteCommunityRequest, config?: AxiosRequestConfig): Promise<operations.SetWriteCommunityResponse>;
    /**
     * splitOid - Split the numerical OID into the object OID and instance OID.
     *
     * This is useful if you have an OID which is a combination of object and instance.
    **/
    splitOid(req: operations.SplitOidRequest, config?: AxiosRequestConfig): Promise<operations.SplitOidResponse>;
    /**
     * start - Start the current agent.
     *
     * For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
    **/
    start(req: operations.StartRequest, config?: AxiosRequestConfig): Promise<operations.StartResponse>;
    /**
     * startAllAgents - Start MIMIC.
     *
     * Start MIMIC.
    **/
    startAllAgents(config?: AxiosRequestConfig): Promise<operations.StartAllAgentsResponse>;
    /**
     * startIpalias - Starts an existing ipalias for the agent.
     *
     * port defaults to 161 if not specified.
    **/
    startIpalias(req: operations.StartIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.StartIpaliasResponse>;
    /**
     * statusIpalias - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
     *
     * port defaults to 161 if not specified.
    **/
    statusIpalias(req: operations.StatusIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.StatusIpaliasResponse>;
    /**
     * stop - Show the agent's primary IP address
     *
     * Agent primary IP address
    **/
    stop(req: operations.StopRequest, config?: AxiosRequestConfig): Promise<operations.StopResponse>;
    /**
     * stopAllAgents - Stop MIMIC.
     *
     * Stop MIMIC.
    **/
    stopAllAgents(config?: AxiosRequestConfig): Promise<operations.StopAllAgentsResponse>;
    /**
     * stopIpalias - Stops an existing ipalias for the agent.
     *
     * port defaults to 161 if not specified.
    **/
    stopIpalias(req: operations.StopIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.StopIpaliasResponse>;
    /**
     * storeExists - This command can be used as a predicate to ascertain the existence of a given variable.
     *
     * It returns "1" if the variable exists, else "0".
    **/
    storeExists(req: operations.StoreExistsRequest, config?: AxiosRequestConfig): Promise<operations.StoreExistsResponse>;
    /**
     * storeGet - Fetches the value associated with a variable.
     *
     * The value will be returned as a string (like all Tcl values).
    **/
    storeGet(req: operations.StoreGetRequest, config?: AxiosRequestConfig): Promise<operations.StoreGetResponse>;
    /**
     * storeList - This command will return the list of variables in the said scope.
     *
     * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
    **/
    storeList(config?: AxiosRequestConfig): Promise<operations.StoreListResponse>;
    /**
     * storeLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
     *
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
    **/
    storeLreplace(req: operations.StoreLreplaceRequest, config?: AxiosRequestConfig): Promise<operations.StoreLreplaceResponse>;
    /**
     * storePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
     *
     * It returns "1" if the variable is persistent, else "0".
    **/
    storePersists(req: operations.StorePersistsRequest, config?: AxiosRequestConfig): Promise<operations.StorePersistsResponse>;
    /**
     * storeSave - This operation flushes all global objects which need to be made persistent to disk.
     *
     * The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
    **/
    storeSave(config?: AxiosRequestConfig): Promise<operations.StoreSaveResponse>;
    /**
     * storeSet - Set the variable store for the global storage
     *
     * Persist 1 means persistent , 0 means non-persistent
    **/
    storeSet(req: operations.StoreSetRequest, config?: AxiosRequestConfig): Promise<operations.StoreSetResponse>;
    /**
     * storeUnset - Deletes a variable which is currently defined.
     *
     * This will cleanup persistent variables if needed
    **/
    storeUnset(req: operations.StoreUnsetRequest, config?: AxiosRequestConfig): Promise<operations.StoreUnsetResponse>;
    /**
     * terminate - Terminate the MIMIC daemon.
     *
     * Terminate the MIMIC daemon.
    **/
    terminate(config?: AxiosRequestConfig): Promise<operations.TerminateResponse>;
    /**
     * trapConfigAdd - Add a trap destination to the set of destinations.
     *
     * Add a trap destination to the set of destinations.
    **/
    trapConfigAdd(req: operations.TrapConfigAddRequest, config?: AxiosRequestConfig): Promise<operations.TrapConfigAddResponse>;
    /**
     * trapConfigDel - Remove a trap destination from the set of destinations.
     *
     * Remove a trap destination from the set of destinations.
    **/
    trapConfigDel(req: operations.TrapConfigDelRequest, config?: AxiosRequestConfig): Promise<operations.TrapConfigDelResponse>;
    /**
     * trapConfigList - List the set of trap destinations for this agent instance.
     *
     * Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
    **/
    trapConfigList(req: operations.TrapConfigListRequest, config?: AxiosRequestConfig): Promise<operations.TrapConfigListResponse>;
    /**
     * trapList - List the outstanding asynchronous traps for this agent instance.
     *
     * List the outstanding asynchronous traps for this agent instance.
    **/
    trapList(req: operations.TrapListRequest, config?: AxiosRequestConfig): Promise<operations.TrapListResponse>;
    /**
     * unsetValue - Unset a variable in the Value Space in order to free its memory.
     *
     * Only variables that have previously been set can be unset.
    **/
    unsetValue(req: operations.UnsetValueRequest, config?: AxiosRequestConfig): Promise<operations.UnsetValueResponse>;
}
export {};
