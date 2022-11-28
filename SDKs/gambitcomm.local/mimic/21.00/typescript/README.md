# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AccessAddRequest, AccessAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: AccessAddRequest = {
  pathParams: {
    agents: "quo",
    mask: "odit",
    user: "ducimus",
  },
};

sdk.sdk.accessAdd(req).then((res: AccessAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accessAdd` - Adds/Overwrites the user entry in the access control database.
* `accessDel` - Clears a users entry from access control database.
* `accessGetAcldb` - Returns the current access control database in use.
* `accessGetAdmindir` - Returns the current admin directory.
* `accessGetAdminuser` - Returns the current administrator.
* `accessGetEnabled` - Returns the state of access control checking.
* `accessList` - Returns an array of entries.
* `accessLoad` - Loads the specified file for access control data.
* `accessSave` - Saves current access control data in specified file.
* `accessSetAcldb` - Allows setting the name of the current access control database.
* `accessSetEnabled` - Allows the user to enable/disable the access control check.
* `add` - Add an entry to a table.
* `addDaemonTimerScript` - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* `addIpalias` - Adds a new ipalias for the agent.
* `addTimerScript` - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* `agentRemove` - Remove the current agent.
* `agentStoreCopy` - This command copies the variable store from the other agent to this agent.
* `agentStoreExists` - This command can be used as a predicate to ascertain the existence of a given variable.
* `agentStoreGet` - Fetches the value associated with a variable.
* `agentStoreList` - This command will return the list of variables in the said scope.
* `agentStoreLreplace` - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* `agentStorePersists` - This command can be used as a predicate to ascertain the persistence of a given variable.
* `agentStoreSet` - These commands allow the creation of a new variable, or changing an existing value.
* `agentStoreUnset` - Deletes a variable which is currently defined.
* `cfgLoad` - Load the lab configuration file file.
* `cfgNew` - Clear the lab configuration.
* `cfgSave` - Save the lab configuration.
* `cfgSaveas` - Save the lab configuration in file.
* `delDaemonTimerScript` - Remove a timer script from the execution list.
* `delIpalias` - Deletes an existing ipalias from the agent.
* `delTimerScript` - Remove a timer script from the execution list.
* `evalValue` - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
* `fromAdd` - Add a source address that the agent will accept messages from.
* `fromDel` - delete a source address that the agent will accept messages from.
* `fromList` - List the source addresses that the agent will accept messages from.
* `getActiveDataList` - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
* `getActiveList` - The list of {agentnum} that are currently active (running or paused).
* `getAgentState` - current running state of the agent
* `getCfgFileChanged` - This predicate indicates if the currently loaded agent configuration file has changed.
* `getCfgfile` - The currently loaded lab configuration file for the particular user.
* `getChanged` - has the agent value space changed?
* `getChangedConfigList` - The list of {agentnum} for which a configurable parameter changed.
* `getChangedStateList` - The list of {agentnum state} for which the state changed.
* `getClients` - The number of clients currently connected to the daemon.
* `getConfigChanged` - has the lab configuration changed?
* `getConfiguredList` - The list of {agentnum} that are currently configured.
* `getDaemonProtocols` - The set of protocols supported by the Simulator.
* `getDelay` - one-way transit delay in msec.
* `getDrops` - drop rate (every N-th PDU). 0 means no drops.
* `getHost` - host address of the agent.
* `getInfo` - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
* `getInformTimeout` - timeout in seconds for retransmitting INFORM PDUs.
* `getInstances` - Display the MIB object instances for the specified object.
* `getInterface` - network interface card for the agent.
* `getInterfaces` - The set of network interfaces that can be used for simulations.
* `getLast` - The last configured agent instance.
* `getLog` - The current log file for the Simulator.
* `getMask` - subnet mask of the agent.
* `getMax` - The maximum number of agent instances.
* `getMib` - Return the MIB that defines the specified object.
* `getMibs` - set of MIBs, simulations and scenarios
* `getName` - Return the symbolic name of the specified object identifier.
* `getNetaddr` - The network address of the host where the MIMIC simulator is running.
* `getNetdev` - The default network device to be used for agent addresses.
* `getNumberStarts` - number of starts for the agent.
* `getObjects` - Display the MIB objects below the current position
* `getOid` - Return the numeric OID of the specified object.
* `getOiddir` - MIB directory of the agent.
* `getOwner` - owner of the agent.
* `getPdusize` - maximum PDU size.
* `getPort` - port number
* `getPrivdir` - private directory of the agent.
* `getProduct` - The product number that is licensed.
* `getProtocols` - protocols supported by agent
* `getReadCommunity` - read community string
* `getReturn` - The return mode.
* `getScen` - first scenario name
* `getSim` - first simulation name
* `getStarttime` - relative start time
* `getState` - Get the state of a MIB object object.
* `getStateChanged` - has the agent state changed?
* `getStatistics` - current statistics of the agent instance
* `getTrace` - SNMP PDU tracing
* `getValidate` - SNMP SET validation policy.
* `getValue` - Get a variable in the Value Space.
* `getVariables` - Display the variables for the specified instance instance for the specified MIB object object
* `getVersion` - The version of the MIMIC command interface.
* `getWriteCommunity` - write community string
* `halt` - Halt the current agent.
* `listDaemonTimerScripts` - List the timer scripts currently running along with the their intervals.
* `listIpaliases` - Lists all the additional ipaliases configured for the agent.
* `listTimerScripts` - List the timer scripts currently running along with the their intervals.
* `mgetInfo` - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
* `msetValue` - Set multiple variables in the Value Space.
* `munsetValue` - Unset multiple variables in the Value Space
* `new` - Add an agent.
* `pauseNow` - Pause the current agent.
* `protocolCoapGetArgs` - Show the agent's COAP argument structure
* `protocolCoapGetConfig` - Show the agent's COAP configuration
* `protocolCoapGetStatistics` - Show the agent's COAP statistics
* `protocolCoapGetStatsHdr` - Show the COAP statistics headers
* `protocolCoapGetTrace` - Show the agent's COAP traffic tracing
* `protocolCoapSetConfig` - Set the agent's COAP configuration
* `protocolCoapSetTrace` - Set the agent's COAP traffic tracing
* `protocolDhcpGetArgs` - Show the agent's DHCP argument structure
* `protocolDhcpGetConfig` - Show the agent's DHCP configuration
* `protocolDhcpGetStatistics` - Show the agent's DHCP statistics
* `protocolDhcpGetStatsHdr` - Show the DHCP statistics headers
* `protocolDhcpGetTrace` - Show the agent's DHCP traffic tracing
* `protocolDhcpParams` - Show the parameters configured by the server in its DHCP-OFFER message
* `protocolDhcpSetConfig` - Set the agent's DHCP configuration
* `protocolDhcpSetTrace` - Set the agent's DHCP traffic tracing
* `protocolGetConfig` - Returns the protocol's configuration.
* `protocolIpmiGetArgs` - Show the agent's IPMI argument structure
* `protocolIpmiGetAttr` - Show the outgoing message's attributes
* `protocolIpmiGetConfig` - Show the agent's IPMI configuration
* `protocolIpmiGetStatistics` - Show the agent's IPMI statistics
* `protocolIpmiGetStatsHdr` - Show the IPMI statistics headers
* `protocolIpmiGetTrace` - Show the agent's IPMI traffic tracing
* `protocolIpmiSetAttr` - Set the outgoing message's attributes
* `protocolIpmiSetConfig` - Set the agent's IPMI configuration
* `protocolIpmiSetTrace` - Set the agent's IPMI traffic tracing
* `protocolMqttClientGetProtstate` - Show the agent's MQTT TCP connection state
* `protocolMqttClientGetState` - Show the agent's MQTT state
* `protocolMqttClientMessageCard` - Show the agent's current messages' cardinality
* `protocolMqttClientMessageGet` - Show the agent's message attributes
* `protocolMqttClientMessageSet` - Set the agent's message attributes
* `protocolMqttClientResubscribe` - Restart receiving messages from a subcription of the agent
* `protocolMqttClientRuntimeAbort` - Abort agent's MQTT TCP session without sending DISCONNECT command
* `protocolMqttClientRuntimeConnect` - Start agent's MQTT TCP session
* `protocolMqttClientRuntimeDisconnect` - Disconnect agent's MQTT TCP session by sending DISCONNECT command
* `protocolMqttClientSetBroker` - Set the agent's MQTT TCP connection target broker
* `protocolMqttClientSetCleansession` - Set the agent's MQTT session
* `protocolMqttClientSetClientid` - Set the agent's MQTT client ID
* `protocolMqttClientSetKeepalive` - Set the agent's MQTT TCP keepalive
* `protocolMqttClientSetOnDisconnect` - Set the agent's MQTT disconnection action
* `protocolMqttClientSetPassword` - Set the agent's MQTT client password
* `protocolMqttClientSetPort` - Set the agent's MQTT TCP connection target port
* `protocolMqttClientSetUsername` - Set the agent's MQTT client username
* `protocolMqttClientSetWillmsg` - Set the agent's MQTT client's will
* `protocolMqttClientSetWillqos` - Set the agent's MQTT will message's QOS field
* `protocolMqttClientSetWillretain` - Set the agent's MQTT retained will
* `protocolMqttClientSetWilltopic` - Set the agent's MQTT client will's topic
* `protocolMqttClientSubscribeCard` - Show the agent's current subscriptions' cardinality
* `protocolMqttClientSubscribeGet` - Show the agent's subscription attributes
* `protocolMqttClientSubscribeSet` - Set the agent's subscribe attributes
* `protocolMqttClientUnsubscribe` - Stops receiving messages from a subcription of the agent
* `protocolMqttGetArgs` - Show the agent's MQTT argument structure
* `protocolMqttGetConfig` - Show the agent's MQTT configuration
* `protocolMqttGetStatistics` - Show the agent's MQTT statistics
* `protocolMqttGetStatsHdr` - Show the MQTT statistics headers
* `protocolMqttGetTrace` - Show the agent's MQTT traffic tracing
* `protocolMqttSetConfig` - Set the agent's MQTT configuration
* `protocolMqttSetTrace` - Set the agent's MQTT traffic tracing
* `protocolNetflowChangeAttr` - Change NETFLOW export attributes
* `protocolNetflowChangeDfs` - Change NETFLOW data export interval
* `protocolNetflowChangeTfs` - Change NETFLOW template export interval
* `protocolNetflowGetArgs` - Show the agent's NETFLOW argument structure
* `protocolNetflowGetConfig` - Show the agent's NETFLOW configuration
* `protocolNetflowGetStatistics` - Show the agent's NETFLOW statistics
* `protocolNetflowGetStatsHdr` - Show the NETFLOW statistics headers
* `protocolNetflowGetTrace` - Show the agent's NETFLOW traffic tracing
* `protocolNetflowHalt` - Halt NETFLOW traffic
* `protocolNetflowList` - Show list of NETFLOW exports
* `protocolNetflowReload` - Reload NETFLOW configuration before resuming traffic
* `protocolNetflowResume` - Resuming traffic
* `protocolNetflowSetCollector` - Swap NETFLOW collector
* `protocolNetflowSetConfig` - Set the agent's NETFLOW configuration
* `protocolNetflowSetFileName` - Swap NETFLOW configuration file
* `protocolNetflowSetTrace` - Set the agent's NETFLOW traffic tracing
* `protocolProxyGetArgs` - Show the agent's PROXY argument structure
* `protocolProxyGetConfig` - Show the agent's PROXY configuration
* `protocolProxyGetStatistics` - Show the agent's PROXY statistics
* `protocolProxyGetStatsHdr` - Show the PROXY statistics headers
* `protocolProxyGetTrace` - Show the agent's PROXY traffic tracing
* `protocolProxyPortAdd` - Add individual proxy target on the agent and the simulator host
* `protocolProxyPortIsstarted` - Check individual target
* `protocolProxyPortList` - List all proxy targets
* `protocolProxyPortRemove` - Remove individual proxy target on the agent and the simulator host
* `protocolProxyPortStart` - Start additional target
* `protocolProxyPortStop` - Stop additional target
* `protocolProxySetConfig` - Set the agent's PROXY configuration
* `protocolProxySetTrace` - Set the agent's PROXY traffic tracing
* `protocolSflowGetArgs` - Show the agent's SFLOW argument structure
* `protocolSflowGetConfig` - Show the agent's SFLOW configuration
* `protocolSflowGetStatistics` - Show the agent's SFLOW statistics
* `protocolSflowGetStatsHdr` - Show the SFLOW statistics headers
* `protocolSflowGetTrace` - Show the agent's SFLOW traffic tracing
* `protocolSflowHalt` - Halt SFLOW traffic
* `protocolSflowReload` - Reload SFLOW configuration before resuming traffic
* `protocolSflowResume` - Resuming traffic
* `protocolSflowSetConfig` - Set the agent's SFLOW configuration
* `protocolSflowSetTrace` - Set the agent's SFLOW traffic tracing
* `protocolSnmptcpGetArgs` - Show the agent's SNMPTCP argument structure
* `protocolSnmptcpGetConfig` - Show the agent's SNMPTCP configuration
* `protocolSnmptcpGetStatistics` - Show the agent's SNMPTCP statistics
* `protocolSnmptcpGetStatsHdr` - Show the SNMPTCP statistics headers
* `protocolSnmptcpGetTrace` - Show the agent's SNMPTCP traffic tracing
* `protocolSnmptcpIpaliasDisable` - Disable individual IP aliases on the agent and the simulator host
* `protocolSnmptcpIpaliasEnable` - Enable individual IP aliases on the agent and the simulator host
* `protocolSnmptcpIpaliasIsenabled` - Check individual IP aliases on the agent and the simulator host
* `protocolSnmptcpIpaliasList` - List all IP aliases on the agent and the simulator host
* `protocolSnmptcpSetConfig` - Set the agent's SNMPTCP configuration
* `protocolSnmptcpSetTrace` - Set the agent's SNMPTCP traffic tracing
* `protocolSnmpv3AccessAdd` - Adds a new access entry with the specified parameters.
* `protocolSnmpv3AccessClear` - Clears all access entries.
* `protocolSnmpv3AccessDel` - Deletes the specified access entry.
* `protocolSnmpv3AccessList` - Returns the current acccess entries as an array of strings.
* `protocolSnmpv3GetConfig` - Returns the SNMPv3 configuration.
* `protocolSnmpv3GetContextEngineid` - Retrieves the contextEngineID for the agent instance.
* `protocolSnmpv3GetEngineboots` - Retrieves the number of times the agent has been restarted.
* `protocolSnmpv3GetEngineid` - For started agents, retrieves the current engineID in use by the snmpv3 module.
* `protocolSnmpv3GetEnginetime` - Retrieves the time in seconds for which the agent has been running.
* `protocolSnmpv3GroupAdd` - Adds a new group entry with the specified parameters.
* `protocolSnmpv3GroupClear` - Clears all group entries.
* `protocolSnmpv3GroupDel` - Deletes the specified group entry.
* `protocolSnmpv3GroupList` - Returns the current group entries as an array of strings.
* `protocolSnmpv3SetConfig` - Changes the SNMPv3 configuration.
* `protocolSnmpv3UserAdd` - Adds a new user entry with the specified parameters.
* `protocolSnmpv3UserClear` - Clears all user entries.
* `protocolSnmpv3UserDel` - Deletes the specified user entry.
* `protocolSnmpv3UserList` - Returns the current user entries as a Tcl list.
* `protocolSnmpv3UsmSave` - Saves current user settings in the currently loaded USM config file.
* `protocolSnmpv3UsmSaveas` - Saves current user settings in the specified USM config file.
* `protocolSnmpv3VacmSave` - Saves current group, access, view settings in the currently loaded VACM config file.
* `protocolSnmpv3VacmSaveas` - Saves current group, access, view settings in the specified VACM config file.
* `protocolSnmpv3ViewAdd` - Adds a new view entry with the specified parameters.
* `protocolSnmpv3ViewClear` - Clears all view entries.
* `protocolSnmpv3ViewDel` - Deletes the specified view entry.
* `protocolSnmpv3ViewList` - Returns the current view entries as an array of strings.
* `protocolSshGetArgs` - Show the agent's SSH argument structure
* `protocolSshGetConfig` - Show the agent's SSH configuration
* `protocolSshGetStatistics` - Show the agent's SSH statistics
* `protocolSshGetStatsHdr` - Show the SSH statistics headers
* `protocolSshGetTrace` - Show the agent's SSH traffic tracing
* `protocolSshIpaliasDisable` - Disable individual IP aliases on the agent and the simulator host
* `protocolSshIpaliasEnable` - Enable individual IP aliases on the agent and the simulator host
* `protocolSshIpaliasIsenabled` - Check individual IP aliases on the agent and the simulator host
* `protocolSshIpaliasList` - List all IP aliases on the agent and the simulator host
* `protocolSshSetConfig` - Set the agent's SSH configuration
* `protocolSshSetTrace` - Set the agent's SSH traffic tracing
* `protocolSyslogGetArgs` - Show the agent's SYSLOG argument structure
* `protocolSyslogGetAttr` - Show the outgoing message's attributes
* `protocolSyslogGetConfig` - Show the agent's SYSLOG configuration
* `protocolSyslogGetStatistics` - Show the agent's SYSLOG statistics
* `protocolSyslogGetStatsHdr` - Show the SYSLOG statistics headers
* `protocolSyslogGetTrace` - Show the agent's SYSLOG traffic tracing
* `protocolSyslogSend` - Set the agent's SYSLOG traffic tracing
* `protocolSyslogSetAttr` - Set the outgoing message's attributes
* `protocolSyslogSetConfig` - Set the agent's SYSLOG configuration
* `protocolSyslogSetTrace` - Set the agent's SYSLOG traffic tracing
* `protocolTelnetConnectionLogon` - Changes the connection's current logon.
* `protocolTelnetConnectionRequest` - Executes the command asynchronously .
* `protocolTelnetConnectionSignal` - Triggers the asynchronous signal event with the specified signal name
* `protocolTelnetGetArgs` - Show the agent's TELNET argument structure
* `protocolTelnetGetConfig` - Show the agent's TELNET configuration
* `protocolTelnetGetStatistics` - Show the agent's TELNET statistics
* `protocolTelnetGetStatsHdr` - Show the TELNET statistics headers
* `protocolTelnetGetTrace` - Show the agent's TELNET traffic tracing
* `protocolTelnetIpaliasDisable` - Disable individual IP aliases on the agent and the simulator host
* `protocolTelnetIpaliasEnable` - Enable individual IP aliases on the agent and the simulator host
* `protocolTelnetIpaliasIsenabled` - Check individual IP aliases on the agent and the simulator host
* `protocolTelnetIpaliasList` - List all IP aliases on the agent and the simulator host
* `protocolTelnetServerGetConnections` - Show the agent's TELNET connections
* `protocolTelnetServerGetKeymap` - Show the agent's TELNET keymap file name
* `protocolTelnetServerGetRulesdb` - Show the agent's TELNET rules db file name
* `protocolTelnetServerGetState` - Show the agent's TELNET server state
* `protocolTelnetServerGetUserdb` - Show the agent's TELNET user db file name
* `protocolTelnetServerGetUsers` - Show the agent's TELNET users
* `protocolTelnetSetConfig` - Set the agent's TELNET configuration
* `protocolTelnetSetTrace` - Set the agent's TELNET traffic tracing
* `protocolTftpGetArgs` - Show the agent's TFTP argument structure
* `protocolTftpGetConfig` - Show the agent's TFTP configuration
* `protocolTftpGetStatistics` - Show the agent's TFTP statistics
* `protocolTftpGetStatsHdr` - Show the TFTP statistics headers
* `protocolTftpGetTrace` - Show the agent's TFTP traffic tracing
* `protocolTftpSessionGetParameter` - Show a parameter of a TFTP sesssion
* `protocolTftpSessionRead` - Create a read session to download srcfile from server
* `protocolTftpSessionSetParameter` - Set a parameter of a TFTP sesssion
* `protocolTftpSessionStart` - Start a TFTP sesssion
* `protocolTftpSessionStatus` - Check a TFTP sesssion's status
* `protocolTftpSessionStop` - Stop a TFTP sesssion
* `protocolTftpSessionWrite` - Create a read session to upload srcfile to server
* `protocolTftpSetConfig` - Set the agent's TFTP configuration
* `protocolTftpSetTrace` - Set the agent's TFTP traffic tracing
* `protocolTodGetArgs` - Show the agent's TOD argument structure
* `protocolTodGetConfig` - Show the agent's TOD configuration
* `protocolTodGetStatistics` - Show the agent's TOD statistics
* `protocolTodGetStatsHdr` - Show the TOD statistics headers
* `protocolTodGetTrace` - Show the agent's TOD traffic tracing
* `protocolTodGettime` - Retrieve TOD time
* `protocolTodSetConfig` - Set the agent's TOD configuration
* `protocolTodSetTrace` - Set the agent's TOD traffic tracing
* `protocolWebGetArgs` - Show the agent's WEB argument structure
* `protocolWebGetConfig` - Show the agent's WEB configuration
* `protocolWebGetStatistics` - Show the agent's WEB statistics
* `protocolWebGetStatsHdr` - Show the WEB statistics headers
* `protocolWebGetTrace` - Show the agent's WEB traffic tracing
* `protocolWebPortAdd` - Add the agent's WEB port
* `protocolWebPortExists` - Show the agent's WEB port
* `protocolWebPortRemove` - Remove the agent's WEB port
* `protocolWebPortSet` - Set the agent's WEB port attribute
* `protocolWebPortStart` - Start the agent's WEB port
* `protocolWebPortStop` - Stop the agent's WEB port
* `protocolWebSetConfig` - Set the agent's WEB configuration
* `protocolWebSetTrace` - Set the agent's WEB traffic tracing
* `reload` - Reload the current agent.
* `remove` - Remove an entry from a table.
* `resume` - Resume the current agent.
* `save` - Save agent MIB values.
* `setDelay` - one-way transit delay in msec
* `setDrops` - drop rate (every N-th PDU)
* `setHost` - host address of the agent.
* `setInformTimeout` - timeout in seconds for retransmitting INFORM PDUs
* `setInterface` - network interface card for the agent
* `setLog` - The current log file for the Simulator.
* `setMask` - subnet mask of the agent.
* `setMibs` - set of MIBs, simulations and scenarios
* `setNetdev` - The network address of the host where the MIMIC simulator is running.
* `setOiddir` - MIB directory of the agent.
* `setOwner` - owner of the agent
* `setPdusize` - maximum PDU size
* `setPort` - port number
* `setPrivdir` - private directory of the agent.
* `setProtocols` - protocols supported by agent as a comma-separated list
* `setReadCommunity` - read community string
* `setStarttime` - relative start time
* `setState` - Set the state of a MIB object object
* `setTrace` - SNMP PDU tracing
* `setValidate` - SNMP SET validation policy
* `setValue` - Set a variable in the Value Space.
* `setWriteCommunity` - write community string
* `splitOid` - Split the numerical OID into the object OID and instance OID.
* `start` - Start the current agent.
* `startAllAgents` - Start MIMIC.
* `startIpalias` - Starts an existing ipalias for the agent.
* `statusIpalias` - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
* `stop` - Show the agent's primary IP address
* `stopAllAgents` - Stop MIMIC.
* `stopIpalias` - Stops an existing ipalias for the agent.
* `storeExists` - This command can be used as a predicate to ascertain the existence of a given variable.
* `storeGet` - Fetches the value associated with a variable.
* `storeList` - This command will return the list of variables in the said scope.
* `storeLreplace` - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* `storePersists` - This command can be used as a predicate to ascertain the persistence of a given variable.
* `storeSave` - This operation flushes all global objects which need to be made persistent to disk.
* `storeSet` - Set the variable store for the global storage
* `storeUnset` - Deletes a variable which is currently defined.
* `terminate` - Terminate the MIMIC daemon.
* `trapConfigAdd` - Add a trap destination to the set of destinations.
* `trapConfigDel` - Remove a trap destination from the set of destinations.
* `trapConfigList` - List the set of trap destinations for this agent instance.
* `trapList` - List the outstanding asynchronous traps for this agent instance.
* `unsetValue` - Unset a variable in the Value Space in order to free its memory.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
