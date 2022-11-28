# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BasicAuth: shared.SchemeBasicAuth{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AccessAddRequest{
        PathParams: operations.AccessAddPathParams{
            Agents: "quo",
            Mask: "odit",
            User: "ducimus",
        },
    }
    
    res, err := s.Sdk.AccessAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessAdd200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AccessAdd` - Adds/Overwrites the user entry in the access control database.
* `AccessDel` - Clears a users entry from access control database.
* `AccessGetAcldb` - Returns the current access control database in use.
* `AccessGetAdmindir` - Returns the current admin directory.
* `AccessGetAdminuser` - Returns the current administrator.
* `AccessGetEnabled` - Returns the state of access control checking.
* `AccessList` - Returns an array of entries.
* `AccessLoad` - Loads the specified file for access control data.
* `AccessSave` - Saves current access control data in specified file.
* `AccessSetAcldb` - Allows setting the name of the current access control database.
* `AccessSetEnabled` - Allows the user to enable/disable the access control check.
* `Add` - Add an entry to a table.
* `AddDaemonTimerScript` - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* `AddIpalias` - Adds a new ipalias for the agent.
* `AddTimerScript` - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* `AgentRemove` - Remove the current agent.
* `AgentStoreCopy` - This command copies the variable store from the other agent to this agent.
* `AgentStoreExists` - This command can be used as a predicate to ascertain the existence of a given variable.
* `AgentStoreGet` - Fetches the value associated with a variable.
* `AgentStoreList` - This command will return the list of variables in the said scope.
* `AgentStoreLreplace` - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* `AgentStorePersists` - This command can be used as a predicate to ascertain the persistence of a given variable.
* `AgentStoreSet` - These commands allow the creation of a new variable, or changing an existing value.
* `AgentStoreUnset` - Deletes a variable which is currently defined.
* `CfgLoad` - Load the lab configuration file file.
* `CfgNew` - Clear the lab configuration.
* `CfgSave` - Save the lab configuration.
* `CfgSaveas` - Save the lab configuration in file.
* `DelDaemonTimerScript` - Remove a timer script from the execution list.
* `DelIpalias` - Deletes an existing ipalias from the agent.
* `DelTimerScript` - Remove a timer script from the execution list.
* `EvalValue` - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
* `FromAdd` - Add a source address that the agent will accept messages from.
* `FromDel` - delete a source address that the agent will accept messages from.
* `FromList` - List the source addresses that the agent will accept messages from.
* `GetActiveDataList` - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
* `GetActiveList` - The list of {agentnum} that are currently active (running or paused).
* `GetAgentState` - current running state of the agent
* `GetCfgFileChanged` - This predicate indicates if the currently loaded agent configuration file has changed.
* `GetCfgfile` - The currently loaded lab configuration file for the particular user.
* `GetChanged` - has the agent value space changed?
* `GetChangedConfigList` - The list of {agentnum} for which a configurable parameter changed.
* `GetChangedStateList` - The list of {agentnum state} for which the state changed.
* `GetClients` - The number of clients currently connected to the daemon.
* `GetConfigChanged` - has the lab configuration changed?
* `GetConfiguredList` - The list of {agentnum} that are currently configured.
* `GetDaemonProtocols` - The set of protocols supported by the Simulator.
* `GetDelay` - one-way transit delay in msec.
* `GetDrops` - drop rate (every N-th PDU). 0 means no drops.
* `GetHost` - host address of the agent.
* `GetInfo` - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
* `GetInformTimeout` - timeout in seconds for retransmitting INFORM PDUs.
* `GetInstances` - Display the MIB object instances for the specified object.
* `GetInterface` - network interface card for the agent.
* `GetInterfaces` - The set of network interfaces that can be used for simulations.
* `GetLast` - The last configured agent instance.
* `GetLog` - The current log file for the Simulator.
* `GetMask` - subnet mask of the agent.
* `GetMax` - The maximum number of agent instances.
* `GetMib` - Return the MIB that defines the specified object.
* `GetMibs` - set of MIBs, simulations and scenarios
* `GetName` - Return the symbolic name of the specified object identifier.
* `GetNetaddr` - The network address of the host where the MIMIC simulator is running.
* `GetNetdev` - The default network device to be used for agent addresses.
* `GetNumberStarts` - number of starts for the agent.
* `GetObjects` - Display the MIB objects below the current position
* `GetOid` - Return the numeric OID of the specified object.
* `GetOiddir` - MIB directory of the agent.
* `GetOwner` - owner of the agent.
* `GetPdusize` - maximum PDU size.
* `GetPort` - port number
* `GetPrivdir` - private directory of the agent.
* `GetProduct` - The product number that is licensed.
* `GetProtocols` - protocols supported by agent
* `GetReadCommunity` - read community string
* `GetReturn` - The return mode.
* `GetScen` - first scenario name
* `GetSim` - first simulation name
* `GetStarttime` - relative start time
* `GetState` - Get the state of a MIB object object.
* `GetStateChanged` - has the agent state changed?
* `GetStatistics` - current statistics of the agent instance
* `GetTrace` - SNMP PDU tracing
* `GetValidate` - SNMP SET validation policy.
* `GetValue` - Get a variable in the Value Space.
* `GetVariables` - Display the variables for the specified instance instance for the specified MIB object object
* `GetVersion` - The version of the MIMIC command interface.
* `GetWriteCommunity` - write community string
* `Halt` - Halt the current agent.
* `ListDaemonTimerScripts` - List the timer scripts currently running along with the their intervals.
* `ListIpaliases` - Lists all the additional ipaliases configured for the agent.
* `ListTimerScripts` - List the timer scripts currently running along with the their intervals.
* `MgetInfo` - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
* `MsetValue` - Set multiple variables in the Value Space.
* `MunsetValue` - Unset multiple variables in the Value Space
* `New` - Add an agent.
* `PauseNow` - Pause the current agent.
* `ProtocolCoapGetArgs` - Show the agent's COAP argument structure
* `ProtocolCoapGetConfig` - Show the agent's COAP configuration
* `ProtocolCoapGetStatistics` - Show the agent's COAP statistics
* `ProtocolCoapGetStatsHdr` - Show the COAP statistics headers
* `ProtocolCoapGetTrace` - Show the agent's COAP traffic tracing
* `ProtocolCoapSetConfig` - Set the agent's COAP configuration
* `ProtocolCoapSetTrace` - Set the agent's COAP traffic tracing
* `ProtocolDhcpGetArgs` - Show the agent's DHCP argument structure
* `ProtocolDhcpGetConfig` - Show the agent's DHCP configuration
* `ProtocolDhcpGetStatistics` - Show the agent's DHCP statistics
* `ProtocolDhcpGetStatsHdr` - Show the DHCP statistics headers
* `ProtocolDhcpGetTrace` - Show the agent's DHCP traffic tracing
* `ProtocolDhcpParams` - Show the parameters configured by the server in its DHCP-OFFER message
* `ProtocolDhcpSetConfig` - Set the agent's DHCP configuration
* `ProtocolDhcpSetTrace` - Set the agent's DHCP traffic tracing
* `ProtocolGetConfig` - Returns the protocol's configuration.
* `ProtocolIpmiGetArgs` - Show the agent's IPMI argument structure
* `ProtocolIpmiGetAttr` - Show the outgoing message's attributes
* `ProtocolIpmiGetConfig` - Show the agent's IPMI configuration
* `ProtocolIpmiGetStatistics` - Show the agent's IPMI statistics
* `ProtocolIpmiGetStatsHdr` - Show the IPMI statistics headers
* `ProtocolIpmiGetTrace` - Show the agent's IPMI traffic tracing
* `ProtocolIpmiSetAttr` - Set the outgoing message's attributes
* `ProtocolIpmiSetConfig` - Set the agent's IPMI configuration
* `ProtocolIpmiSetTrace` - Set the agent's IPMI traffic tracing
* `ProtocolMqttClientGetProtstate` - Show the agent's MQTT TCP connection state
* `ProtocolMqttClientGetState` - Show the agent's MQTT state
* `ProtocolMqttClientMessageCard` - Show the agent's current messages' cardinality
* `ProtocolMqttClientMessageGet` - Show the agent's message attributes
* `ProtocolMqttClientMessageSet` - Set the agent's message attributes
* `ProtocolMqttClientResubscribe` - Restart receiving messages from a subcription of the agent
* `ProtocolMqttClientRuntimeAbort` - Abort agent's MQTT TCP session without sending DISCONNECT command
* `ProtocolMqttClientRuntimeConnect` - Start agent's MQTT TCP session
* `ProtocolMqttClientRuntimeDisconnect` - Disconnect agent's MQTT TCP session by sending DISCONNECT command
* `ProtocolMqttClientSetBroker` - Set the agent's MQTT TCP connection target broker
* `ProtocolMqttClientSetCleansession` - Set the agent's MQTT session
* `ProtocolMqttClientSetClientid` - Set the agent's MQTT client ID
* `ProtocolMqttClientSetKeepalive` - Set the agent's MQTT TCP keepalive
* `ProtocolMqttClientSetOnDisconnect` - Set the agent's MQTT disconnection action
* `ProtocolMqttClientSetPassword` - Set the agent's MQTT client password
* `ProtocolMqttClientSetPort` - Set the agent's MQTT TCP connection target port
* `ProtocolMqttClientSetUsername` - Set the agent's MQTT client username
* `ProtocolMqttClientSetWillmsg` - Set the agent's MQTT client's will
* `ProtocolMqttClientSetWillqos` - Set the agent's MQTT will message's QOS field
* `ProtocolMqttClientSetWillretain` - Set the agent's MQTT retained will
* `ProtocolMqttClientSetWilltopic` - Set the agent's MQTT client will's topic
* `ProtocolMqttClientSubscribeCard` - Show the agent's current subscriptions' cardinality
* `ProtocolMqttClientSubscribeGet` - Show the agent's subscription attributes
* `ProtocolMqttClientSubscribeSet` - Set the agent's subscribe attributes
* `ProtocolMqttClientUnsubscribe` - Stops receiving messages from a subcription of the agent
* `ProtocolMqttGetArgs` - Show the agent's MQTT argument structure
* `ProtocolMqttGetConfig` - Show the agent's MQTT configuration
* `ProtocolMqttGetStatistics` - Show the agent's MQTT statistics
* `ProtocolMqttGetStatsHdr` - Show the MQTT statistics headers
* `ProtocolMqttGetTrace` - Show the agent's MQTT traffic tracing
* `ProtocolMqttSetConfig` - Set the agent's MQTT configuration
* `ProtocolMqttSetTrace` - Set the agent's MQTT traffic tracing
* `ProtocolNetflowChangeAttr` - Change NETFLOW export attributes
* `ProtocolNetflowChangeDfs` - Change NETFLOW data export interval
* `ProtocolNetflowChangeTfs` - Change NETFLOW template export interval
* `ProtocolNetflowGetArgs` - Show the agent's NETFLOW argument structure
* `ProtocolNetflowGetConfig` - Show the agent's NETFLOW configuration
* `ProtocolNetflowGetStatistics` - Show the agent's NETFLOW statistics
* `ProtocolNetflowGetStatsHdr` - Show the NETFLOW statistics headers
* `ProtocolNetflowGetTrace` - Show the agent's NETFLOW traffic tracing
* `ProtocolNetflowHalt` - Halt NETFLOW traffic
* `ProtocolNetflowList` - Show list of NETFLOW exports
* `ProtocolNetflowReload` - Reload NETFLOW configuration before resuming traffic
* `ProtocolNetflowResume` - Resuming traffic
* `ProtocolNetflowSetCollector` - Swap NETFLOW collector
* `ProtocolNetflowSetConfig` - Set the agent's NETFLOW configuration
* `ProtocolNetflowSetFileName` - Swap NETFLOW configuration file
* `ProtocolNetflowSetTrace` - Set the agent's NETFLOW traffic tracing
* `ProtocolProxyGetArgs` - Show the agent's PROXY argument structure
* `ProtocolProxyGetConfig` - Show the agent's PROXY configuration
* `ProtocolProxyGetStatistics` - Show the agent's PROXY statistics
* `ProtocolProxyGetStatsHdr` - Show the PROXY statistics headers
* `ProtocolProxyGetTrace` - Show the agent's PROXY traffic tracing
* `ProtocolProxyPortAdd` - Add individual proxy target on the agent and the simulator host
* `ProtocolProxyPortIsstarted` - Check individual target
* `ProtocolProxyPortList` - List all proxy targets
* `ProtocolProxyPortRemove` - Remove individual proxy target on the agent and the simulator host
* `ProtocolProxyPortStart` - Start additional target
* `ProtocolProxyPortStop` - Stop additional target
* `ProtocolProxySetConfig` - Set the agent's PROXY configuration
* `ProtocolProxySetTrace` - Set the agent's PROXY traffic tracing
* `ProtocolSflowGetArgs` - Show the agent's SFLOW argument structure
* `ProtocolSflowGetConfig` - Show the agent's SFLOW configuration
* `ProtocolSflowGetStatistics` - Show the agent's SFLOW statistics
* `ProtocolSflowGetStatsHdr` - Show the SFLOW statistics headers
* `ProtocolSflowGetTrace` - Show the agent's SFLOW traffic tracing
* `ProtocolSflowHalt` - Halt SFLOW traffic
* `ProtocolSflowReload` - Reload SFLOW configuration before resuming traffic
* `ProtocolSflowResume` - Resuming traffic
* `ProtocolSflowSetConfig` - Set the agent's SFLOW configuration
* `ProtocolSflowSetTrace` - Set the agent's SFLOW traffic tracing
* `ProtocolSnmptcpGetArgs` - Show the agent's SNMPTCP argument structure
* `ProtocolSnmptcpGetConfig` - Show the agent's SNMPTCP configuration
* `ProtocolSnmptcpGetStatistics` - Show the agent's SNMPTCP statistics
* `ProtocolSnmptcpGetStatsHdr` - Show the SNMPTCP statistics headers
* `ProtocolSnmptcpGetTrace` - Show the agent's SNMPTCP traffic tracing
* `ProtocolSnmptcpIpaliasDisable` - Disable individual IP aliases on the agent and the simulator host
* `ProtocolSnmptcpIpaliasEnable` - Enable individual IP aliases on the agent and the simulator host
* `ProtocolSnmptcpIpaliasIsenabled` - Check individual IP aliases on the agent and the simulator host
* `ProtocolSnmptcpIpaliasList` - List all IP aliases on the agent and the simulator host
* `ProtocolSnmptcpSetConfig` - Set the agent's SNMPTCP configuration
* `ProtocolSnmptcpSetTrace` - Set the agent's SNMPTCP traffic tracing
* `ProtocolSnmpv3AccessAdd` - Adds a new access entry with the specified parameters.
* `ProtocolSnmpv3AccessClear` - Clears all access entries.
* `ProtocolSnmpv3AccessDel` - Deletes the specified access entry.
* `ProtocolSnmpv3AccessList` - Returns the current acccess entries as an array of strings.
* `ProtocolSnmpv3GetConfig` - Returns the SNMPv3 configuration.
* `ProtocolSnmpv3GetContextEngineid` - Retrieves the contextEngineID for the agent instance.
* `ProtocolSnmpv3GetEngineboots` - Retrieves the number of times the agent has been restarted.
* `ProtocolSnmpv3GetEngineid` - For started agents, retrieves the current engineID in use by the snmpv3 module.
* `ProtocolSnmpv3GetEnginetime` - Retrieves the time in seconds for which the agent has been running.
* `ProtocolSnmpv3GroupAdd` - Adds a new group entry with the specified parameters.
* `ProtocolSnmpv3GroupClear` - Clears all group entries.
* `ProtocolSnmpv3GroupDel` - Deletes the specified group entry.
* `ProtocolSnmpv3GroupList` - Returns the current group entries as an array of strings.
* `ProtocolSnmpv3SetConfig` - Changes the SNMPv3 configuration.
* `ProtocolSnmpv3UserAdd` - Adds a new user entry with the specified parameters.
* `ProtocolSnmpv3UserClear` - Clears all user entries.
* `ProtocolSnmpv3UserDel` - Deletes the specified user entry.
* `ProtocolSnmpv3UserList` - Returns the current user entries as a Tcl list.
* `ProtocolSnmpv3UsmSave` - Saves current user settings in the currently loaded USM config file.
* `ProtocolSnmpv3UsmSaveas` - Saves current user settings in the specified USM config file.
* `ProtocolSnmpv3VacmSave` - Saves current group, access, view settings in the currently loaded VACM config file.
* `ProtocolSnmpv3VacmSaveas` - Saves current group, access, view settings in the specified VACM config file.
* `ProtocolSnmpv3ViewAdd` - Adds a new view entry with the specified parameters.
* `ProtocolSnmpv3ViewClear` - Clears all view entries.
* `ProtocolSnmpv3ViewDel` - Deletes the specified view entry.
* `ProtocolSnmpv3ViewList` - Returns the current view entries as an array of strings.
* `ProtocolSSHGetArgs` - Show the agent's SSH argument structure
* `ProtocolSSHGetConfig` - Show the agent's SSH configuration
* `ProtocolSSHGetStatistics` - Show the agent's SSH statistics
* `ProtocolSSHGetStatsHdr` - Show the SSH statistics headers
* `ProtocolSSHGetTrace` - Show the agent's SSH traffic tracing
* `ProtocolSSHIpaliasDisable` - Disable individual IP aliases on the agent and the simulator host
* `ProtocolSSHIpaliasEnable` - Enable individual IP aliases on the agent and the simulator host
* `ProtocolSSHIpaliasIsenabled` - Check individual IP aliases on the agent and the simulator host
* `ProtocolSSHIpaliasList` - List all IP aliases on the agent and the simulator host
* `ProtocolSSHSetConfig` - Set the agent's SSH configuration
* `ProtocolSSHSetTrace` - Set the agent's SSH traffic tracing
* `ProtocolSyslogGetArgs` - Show the agent's SYSLOG argument structure
* `ProtocolSyslogGetAttr` - Show the outgoing message's attributes
* `ProtocolSyslogGetConfig` - Show the agent's SYSLOG configuration
* `ProtocolSyslogGetStatistics` - Show the agent's SYSLOG statistics
* `ProtocolSyslogGetStatsHdr` - Show the SYSLOG statistics headers
* `ProtocolSyslogGetTrace` - Show the agent's SYSLOG traffic tracing
* `ProtocolSyslogSend` - Set the agent's SYSLOG traffic tracing
* `ProtocolSyslogSetAttr` - Set the outgoing message's attributes
* `ProtocolSyslogSetConfig` - Set the agent's SYSLOG configuration
* `ProtocolSyslogSetTrace` - Set the agent's SYSLOG traffic tracing
* `ProtocolTelnetConnectionLogon` - Changes the connection's current logon.
* `ProtocolTelnetConnectionRequest` - Executes the command asynchronously .
* `ProtocolTelnetConnectionSignal` - Triggers the asynchronous signal event with the specified signal name
* `ProtocolTelnetGetArgs` - Show the agent's TELNET argument structure
* `ProtocolTelnetGetConfig` - Show the agent's TELNET configuration
* `ProtocolTelnetGetStatistics` - Show the agent's TELNET statistics
* `ProtocolTelnetGetStatsHdr` - Show the TELNET statistics headers
* `ProtocolTelnetGetTrace` - Show the agent's TELNET traffic tracing
* `ProtocolTelnetIpaliasDisable` - Disable individual IP aliases on the agent and the simulator host
* `ProtocolTelnetIpaliasEnable` - Enable individual IP aliases on the agent and the simulator host
* `ProtocolTelnetIpaliasIsenabled` - Check individual IP aliases on the agent and the simulator host
* `ProtocolTelnetIpaliasList` - List all IP aliases on the agent and the simulator host
* `ProtocolTelnetServerGetConnections` - Show the agent's TELNET connections
* `ProtocolTelnetServerGetKeymap` - Show the agent's TELNET keymap file name
* `ProtocolTelnetServerGetRulesdb` - Show the agent's TELNET rules db file name
* `ProtocolTelnetServerGetState` - Show the agent's TELNET server state
* `ProtocolTelnetServerGetUserdb` - Show the agent's TELNET user db file name
* `ProtocolTelnetServerGetUsers` - Show the agent's TELNET users
* `ProtocolTelnetSetConfig` - Set the agent's TELNET configuration
* `ProtocolTelnetSetTrace` - Set the agent's TELNET traffic tracing
* `ProtocolTftpGetArgs` - Show the agent's TFTP argument structure
* `ProtocolTftpGetConfig` - Show the agent's TFTP configuration
* `ProtocolTftpGetStatistics` - Show the agent's TFTP statistics
* `ProtocolTftpGetStatsHdr` - Show the TFTP statistics headers
* `ProtocolTftpGetTrace` - Show the agent's TFTP traffic tracing
* `ProtocolTftpSessionGetParameter` - Show a parameter of a TFTP sesssion
* `ProtocolTftpSessionRead` - Create a read session to download srcfile from server
* `ProtocolTftpSessionSetParameter` - Set a parameter of a TFTP sesssion
* `ProtocolTftpSessionStart` - Start a TFTP sesssion
* `ProtocolTftpSessionStatus` - Check a TFTP sesssion's status
* `ProtocolTftpSessionStop` - Stop a TFTP sesssion
* `ProtocolTftpSessionWrite` - Create a read session to upload srcfile to server
* `ProtocolTftpSetConfig` - Set the agent's TFTP configuration
* `ProtocolTftpSetTrace` - Set the agent's TFTP traffic tracing
* `ProtocolTodGetArgs` - Show the agent's TOD argument structure
* `ProtocolTodGetConfig` - Show the agent's TOD configuration
* `ProtocolTodGetStatistics` - Show the agent's TOD statistics
* `ProtocolTodGetStatsHdr` - Show the TOD statistics headers
* `ProtocolTodGetTrace` - Show the agent's TOD traffic tracing
* `ProtocolTodGettime` - Retrieve TOD time
* `ProtocolTodSetConfig` - Set the agent's TOD configuration
* `ProtocolTodSetTrace` - Set the agent's TOD traffic tracing
* `ProtocolWebGetArgs` - Show the agent's WEB argument structure
* `ProtocolWebGetConfig` - Show the agent's WEB configuration
* `ProtocolWebGetStatistics` - Show the agent's WEB statistics
* `ProtocolWebGetStatsHdr` - Show the WEB statistics headers
* `ProtocolWebGetTrace` - Show the agent's WEB traffic tracing
* `ProtocolWebPortAdd` - Add the agent's WEB port
* `ProtocolWebPortExists` - Show the agent's WEB port
* `ProtocolWebPortRemove` - Remove the agent's WEB port
* `ProtocolWebPortSet` - Set the agent's WEB port attribute
* `ProtocolWebPortStart` - Start the agent's WEB port
* `ProtocolWebPortStop` - Stop the agent's WEB port
* `ProtocolWebSetConfig` - Set the agent's WEB configuration
* `ProtocolWebSetTrace` - Set the agent's WEB traffic tracing
* `Reload` - Reload the current agent.
* `Remove` - Remove an entry from a table.
* `Resume` - Resume the current agent.
* `Save` - Save agent MIB values.
* `SetDelay` - one-way transit delay in msec
* `SetDrops` - drop rate (every N-th PDU)
* `SetHost` - host address of the agent.
* `SetInformTimeout` - timeout in seconds for retransmitting INFORM PDUs
* `SetInterface` - network interface card for the agent
* `SetLog` - The current log file for the Simulator.
* `SetMask` - subnet mask of the agent.
* `SetMibs` - set of MIBs, simulations and scenarios
* `SetNetdev` - The network address of the host where the MIMIC simulator is running.
* `SetOiddir` - MIB directory of the agent.
* `SetOwner` - owner of the agent
* `SetPdusize` - maximum PDU size
* `SetPort` - port number
* `SetPrivdir` - private directory of the agent.
* `SetProtocols` - protocols supported by agent as a comma-separated list
* `SetReadCommunity` - read community string
* `SetStarttime` - relative start time
* `SetState` - Set the state of a MIB object object
* `SetTrace` - SNMP PDU tracing
* `SetValidate` - SNMP SET validation policy
* `SetValue` - Set a variable in the Value Space.
* `SetWriteCommunity` - write community string
* `SplitOid` - Split the numerical OID into the object OID and instance OID.
* `Start` - Start the current agent.
* `StartAllAgents` - Start MIMIC.
* `StartIpalias` - Starts an existing ipalias for the agent.
* `StatusIpalias` - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
* `Stop` - Show the agent's primary IP address
* `StopAllAgents` - Stop MIMIC.
* `StopIpalias` - Stops an existing ipalias for the agent.
* `StoreExists` - This command can be used as a predicate to ascertain the existence of a given variable.
* `StoreGet` - Fetches the value associated with a variable.
* `StoreList` - This command will return the list of variables in the said scope.
* `StoreLreplace` - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* `StorePersists` - This command can be used as a predicate to ascertain the persistence of a given variable.
* `StoreSave` - This operation flushes all global objects which need to be made persistent to disk.
* `StoreSet` - Set the variable store for the global storage
* `StoreUnset` - Deletes a variable which is currently defined.
* `Terminate` - Terminate the MIMIC daemon.
* `TrapConfigAdd` - Add a trap destination to the set of destinations.
* `TrapConfigDel` - Remove a trap destination from the set of destinations.
* `TrapConfigList` - List the set of trap destinations for this agent instance.
* `TrapList` - List the outstanding asynchronous traps for this agent instance.
* `UnsetValue` - Unset a variable in the Value Space in order to free its memory.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
