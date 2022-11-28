# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.AccessAddRequest(
    path_params=operations.AccessAddPathParams(
        agents="quo",
        mask="odit",
        user="ducimus",
    ),
)
    
res = s.sdk.access_add(req)

if res.access_add_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `access_add` - Adds/Overwrites the user entry in the access control database.
* `access_del` - Clears a users entry from access control database.
* `access_get_acldb` - Returns the current access control database in use.
* `access_get_admindir` - Returns the current admin directory.
* `access_get_adminuser` - Returns the current administrator.
* `access_get_enabled` - Returns the state of access control checking.
* `access_list` - Returns an array of entries.
* `access_load` - Loads the specified file for access control data.
* `access_save` - Saves current access control data in specified file.
* `access_set_acldb` - Allows setting the name of the current access control database.
* `access_set_enabled` - Allows the user to enable/disable the access control check.
* `add` - Add an entry to a table.
* `add_daemon_timer_script` - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* `add_ipalias` - Adds a new ipalias for the agent.
* `add_timer_script` - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* `agent_remove` - Remove the current agent.
* `agent_store_copy` - This command copies the variable store from the other agent to this agent.
* `agent_store_exists` - This command can be used as a predicate to ascertain the existence of a given variable.
* `agent_store_get` - Fetches the value associated with a variable.
* `agent_store_list` - This command will return the list of variables in the said scope.
* `agent_store_lreplace` - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* `agent_store_persists` - This command can be used as a predicate to ascertain the persistence of a given variable.
* `agent_store_set` - These commands allow the creation of a new variable, or changing an existing value.
* `agent_store_unset` - Deletes a variable which is currently defined.
* `cfg_load` - Load the lab configuration file file.
* `cfg_new` - Clear the lab configuration.
* `cfg_save` - Save the lab configuration.
* `cfg_saveas` - Save the lab configuration in file.
* `del_daemon_timer_script` - Remove a timer script from the execution list.
* `del_ipalias` - Deletes an existing ipalias from the agent.
* `del_timer_script` - Remove a timer script from the execution list.
* `eval_value` - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
* `from_add` - Add a source address that the agent will accept messages from.
* `from_del` - delete a source address that the agent will accept messages from.
* `from_list` - List the source addresses that the agent will accept messages from.
* `get_active_data_list` - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
* `get_active_list` - The list of {agentnum} that are currently active (running or paused).
* `get_agent_state` - current running state of the agent
* `get_cfg_file_changed` - This predicate indicates if the currently loaded agent configuration file has changed.
* `get_cfgfile` - The currently loaded lab configuration file for the particular user.
* `get_changed` - has the agent value space changed?
* `get_changed_config_list` - The list of {agentnum} for which a configurable parameter changed.
* `get_changed_state_list` - The list of {agentnum state} for which the state changed.
* `get_clients` - The number of clients currently connected to the daemon.
* `get_config_changed` - has the lab configuration changed?
* `get_configured_list` - The list of {agentnum} that are currently configured.
* `get_daemon_protocols` - The set of protocols supported by the Simulator.
* `get_delay` - one-way transit delay in msec.
* `get_drops` - drop rate (every N-th PDU). 0 means no drops.
* `get_host` - host address of the agent.
* `get_info` - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
* `get_inform_timeout` - timeout in seconds for retransmitting INFORM PDUs.
* `get_instances` - Display the MIB object instances for the specified object.
* `get_interface` - network interface card for the agent.
* `get_interfaces` - The set of network interfaces that can be used for simulations.
* `get_last` - The last configured agent instance.
* `get_log` - The current log file for the Simulator.
* `get_mask` - subnet mask of the agent.
* `get_max` - The maximum number of agent instances.
* `get_mib` - Return the MIB that defines the specified object.
* `get_mibs` - set of MIBs, simulations and scenarios
* `get_name` - Return the symbolic name of the specified object identifier.
* `get_netaddr` - The network address of the host where the MIMIC simulator is running.
* `get_netdev` - The default network device to be used for agent addresses.
* `get_number_starts` - number of starts for the agent.
* `get_objects` - Display the MIB objects below the current position
* `get_oid` - Return the numeric OID of the specified object.
* `get_oiddir` - MIB directory of the agent.
* `get_owner` - owner of the agent.
* `get_pdusize` - maximum PDU size.
* `get_port` - port number
* `get_privdir` - private directory of the agent.
* `get_product` - The product number that is licensed.
* `get_protocols` - protocols supported by agent
* `get_read_community` - read community string
* `get_return` - The return mode.
* `get_scen` - first scenario name
* `get_sim` - first simulation name
* `get_starttime` - relative start time
* `get_state` - Get the state of a MIB object object.
* `get_state_changed` - has the agent state changed?
* `get_statistics` - current statistics of the agent instance
* `get_trace` - SNMP PDU tracing
* `get_validate` - SNMP SET validation policy.
* `get_value` - Get a variable in the Value Space.
* `get_variables` - Display the variables for the specified instance instance for the specified MIB object object
* `get_version` - The version of the MIMIC command interface.
* `get_write_community` - write community string
* `halt` - Halt the current agent.
* `list_daemon_timer_scripts` - List the timer scripts currently running along with the their intervals.
* `list_ipaliases` - Lists all the additional ipaliases configured for the agent.
* `list_timer_scripts` - List the timer scripts currently running along with the their intervals.
* `mget_info` - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
* `mset_value` - Set multiple variables in the Value Space.
* `munset_value` - Unset multiple variables in the Value Space
* `new` - Add an agent.
* `pause_now` - Pause the current agent.
* `protocol_coap_get_args` - Show the agent's COAP argument structure
* `protocol_coap_get_config` - Show the agent's COAP configuration
* `protocol_coap_get_statistics` - Show the agent's COAP statistics
* `protocol_coap_get_stats_hdr` - Show the COAP statistics headers
* `protocol_coap_get_trace` - Show the agent's COAP traffic tracing
* `protocol_coap_set_config` - Set the agent's COAP configuration
* `protocol_coap_set_trace` - Set the agent's COAP traffic tracing
* `protocol_dhcp_get_args` - Show the agent's DHCP argument structure
* `protocol_dhcp_get_config` - Show the agent's DHCP configuration
* `protocol_dhcp_get_statistics` - Show the agent's DHCP statistics
* `protocol_dhcp_get_stats_hdr` - Show the DHCP statistics headers
* `protocol_dhcp_get_trace` - Show the agent's DHCP traffic tracing
* `protocol_dhcp_params` - Show the parameters configured by the server in its DHCP-OFFER message
* `protocol_dhcp_set_config` - Set the agent's DHCP configuration
* `protocol_dhcp_set_trace` - Set the agent's DHCP traffic tracing
* `protocol_get_config` - Returns the protocol's configuration.
* `protocol_ipmi_get_args` - Show the agent's IPMI argument structure
* `protocol_ipmi_get_attr` - Show the outgoing message's attributes
* `protocol_ipmi_get_config` - Show the agent's IPMI configuration
* `protocol_ipmi_get_statistics` - Show the agent's IPMI statistics
* `protocol_ipmi_get_stats_hdr` - Show the IPMI statistics headers
* `protocol_ipmi_get_trace` - Show the agent's IPMI traffic tracing
* `protocol_ipmi_set_attr` - Set the outgoing message's attributes
* `protocol_ipmi_set_config` - Set the agent's IPMI configuration
* `protocol_ipmi_set_trace` - Set the agent's IPMI traffic tracing
* `protocol_mqtt_client_get_protstate` - Show the agent's MQTT TCP connection state
* `protocol_mqtt_client_get_state` - Show the agent's MQTT state
* `protocol_mqtt_client_message_card` - Show the agent's current messages' cardinality
* `protocol_mqtt_client_message_get` - Show the agent's message attributes
* `protocol_mqtt_client_message_set` - Set the agent's message attributes
* `protocol_mqtt_client_resubscribe` - Restart receiving messages from a subcription of the agent
* `protocol_mqtt_client_runtime_abort` - Abort agent's MQTT TCP session without sending DISCONNECT command
* `protocol_mqtt_client_runtime_connect` - Start agent's MQTT TCP session
* `protocol_mqtt_client_runtime_disconnect` - Disconnect agent's MQTT TCP session by sending DISCONNECT command
* `protocol_mqtt_client_set_broker` - Set the agent's MQTT TCP connection target broker
* `protocol_mqtt_client_set_cleansession` - Set the agent's MQTT session
* `protocol_mqtt_client_set_clientid` - Set the agent's MQTT client ID
* `protocol_mqtt_client_set_keepalive` - Set the agent's MQTT TCP keepalive
* `protocol_mqtt_client_set_on_disconnect` - Set the agent's MQTT disconnection action
* `protocol_mqtt_client_set_password` - Set the agent's MQTT client password
* `protocol_mqtt_client_set_port` - Set the agent's MQTT TCP connection target port
* `protocol_mqtt_client_set_username` - Set the agent's MQTT client username
* `protocol_mqtt_client_set_willmsg` - Set the agent's MQTT client's will
* `protocol_mqtt_client_set_willqos` - Set the agent's MQTT will message's QOS field
* `protocol_mqtt_client_set_willretain` - Set the agent's MQTT retained will
* `protocol_mqtt_client_set_willtopic` - Set the agent's MQTT client will's topic
* `protocol_mqtt_client_subscribe_card` - Show the agent's current subscriptions' cardinality
* `protocol_mqtt_client_subscribe_get` - Show the agent's subscription attributes
* `protocol_mqtt_client_subscribe_set` - Set the agent's subscribe attributes
* `protocol_mqtt_client_unsubscribe` - Stops receiving messages from a subcription of the agent
* `protocol_mqtt_get_args` - Show the agent's MQTT argument structure
* `protocol_mqtt_get_config` - Show the agent's MQTT configuration
* `protocol_mqtt_get_statistics` - Show the agent's MQTT statistics
* `protocol_mqtt_get_stats_hdr` - Show the MQTT statistics headers
* `protocol_mqtt_get_trace` - Show the agent's MQTT traffic tracing
* `protocol_mqtt_set_config` - Set the agent's MQTT configuration
* `protocol_mqtt_set_trace` - Set the agent's MQTT traffic tracing
* `protocol_netflow_change_attr` - Change NETFLOW export attributes
* `protocol_netflow_change_dfs` - Change NETFLOW data export interval
* `protocol_netflow_change_tfs` - Change NETFLOW template export interval
* `protocol_netflow_get_args` - Show the agent's NETFLOW argument structure
* `protocol_netflow_get_config` - Show the agent's NETFLOW configuration
* `protocol_netflow_get_statistics` - Show the agent's NETFLOW statistics
* `protocol_netflow_get_stats_hdr` - Show the NETFLOW statistics headers
* `protocol_netflow_get_trace` - Show the agent's NETFLOW traffic tracing
* `protocol_netflow_halt` - Halt NETFLOW traffic
* `protocol_netflow_list` - Show list of NETFLOW exports
* `protocol_netflow_reload` - Reload NETFLOW configuration before resuming traffic
* `protocol_netflow_resume` - Resuming traffic
* `protocol_netflow_set_collector` - Swap NETFLOW collector
* `protocol_netflow_set_config` - Set the agent's NETFLOW configuration
* `protocol_netflow_set_file_name` - Swap NETFLOW configuration file
* `protocol_netflow_set_trace` - Set the agent's NETFLOW traffic tracing
* `protocol_proxy_get_args` - Show the agent's PROXY argument structure
* `protocol_proxy_get_config` - Show the agent's PROXY configuration
* `protocol_proxy_get_statistics` - Show the agent's PROXY statistics
* `protocol_proxy_get_stats_hdr` - Show the PROXY statistics headers
* `protocol_proxy_get_trace` - Show the agent's PROXY traffic tracing
* `protocol_proxy_port_add` - Add individual proxy target on the agent and the simulator host
* `protocol_proxy_port_isstarted` - Check individual target
* `protocol_proxy_port_list` - List all proxy targets
* `protocol_proxy_port_remove` - Remove individual proxy target on the agent and the simulator host
* `protocol_proxy_port_start` - Start additional target
* `protocol_proxy_port_stop` - Stop additional target
* `protocol_proxy_set_config` - Set the agent's PROXY configuration
* `protocol_proxy_set_trace` - Set the agent's PROXY traffic tracing
* `protocol_sflow_get_args` - Show the agent's SFLOW argument structure
* `protocol_sflow_get_config` - Show the agent's SFLOW configuration
* `protocol_sflow_get_statistics` - Show the agent's SFLOW statistics
* `protocol_sflow_get_stats_hdr` - Show the SFLOW statistics headers
* `protocol_sflow_get_trace` - Show the agent's SFLOW traffic tracing
* `protocol_sflow_halt` - Halt SFLOW traffic
* `protocol_sflow_reload` - Reload SFLOW configuration before resuming traffic
* `protocol_sflow_resume` - Resuming traffic
* `protocol_sflow_set_config` - Set the agent's SFLOW configuration
* `protocol_sflow_set_trace` - Set the agent's SFLOW traffic tracing
* `protocol_snmptcp_get_args` - Show the agent's SNMPTCP argument structure
* `protocol_snmptcp_get_config` - Show the agent's SNMPTCP configuration
* `protocol_snmptcp_get_statistics` - Show the agent's SNMPTCP statistics
* `protocol_snmptcp_get_stats_hdr` - Show the SNMPTCP statistics headers
* `protocol_snmptcp_get_trace` - Show the agent's SNMPTCP traffic tracing
* `protocol_snmptcp_ipalias_disable` - Disable individual IP aliases on the agent and the simulator host
* `protocol_snmptcp_ipalias_enable` - Enable individual IP aliases on the agent and the simulator host
* `protocol_snmptcp_ipalias_isenabled` - Check individual IP aliases on the agent and the simulator host
* `protocol_snmptcp_ipalias_list` - List all IP aliases on the agent and the simulator host
* `protocol_snmptcp_set_config` - Set the agent's SNMPTCP configuration
* `protocol_snmptcp_set_trace` - Set the agent's SNMPTCP traffic tracing
* `protocol_snmpv3_access_add` - Adds a new access entry with the specified parameters.
* `protocol_snmpv3_access_clear` - Clears all access entries.
* `protocol_snmpv3_access_del` - Deletes the specified access entry.
* `protocol_snmpv3_access_list` - Returns the current acccess entries as an array of strings.
* `protocol_snmpv3_get_config` - Returns the SNMPv3 configuration.
* `protocol_snmpv3_get_context_engineid` - Retrieves the contextEngineID for the agent instance.
* `protocol_snmpv3_get_engineboots` - Retrieves the number of times the agent has been restarted.
* `protocol_snmpv3_get_engineid` - For started agents, retrieves the current engineID in use by the snmpv3 module.
* `protocol_snmpv3_get_enginetime` - Retrieves the time in seconds for which the agent has been running.
* `protocol_snmpv3_group_add` - Adds a new group entry with the specified parameters.
* `protocol_snmpv3_group_clear` - Clears all group entries.
* `protocol_snmpv3_group_del` - Deletes the specified group entry.
* `protocol_snmpv3_group_list` - Returns the current group entries as an array of strings.
* `protocol_snmpv3_set_config` - Changes the SNMPv3 configuration.
* `protocol_snmpv3_user_add` - Adds a new user entry with the specified parameters.
* `protocol_snmpv3_user_clear` - Clears all user entries.
* `protocol_snmpv3_user_del` - Deletes the specified user entry.
* `protocol_snmpv3_user_list` - Returns the current user entries as a Tcl list.
* `protocol_snmpv3_usm_save` - Saves current user settings in the currently loaded USM config file.
* `protocol_snmpv3_usm_saveas` - Saves current user settings in the specified USM config file.
* `protocol_snmpv3_vacm_save` - Saves current group, access, view settings in the currently loaded VACM config file.
* `protocol_snmpv3_vacm_saveas` - Saves current group, access, view settings in the specified VACM config file.
* `protocol_snmpv3_view_add` - Adds a new view entry with the specified parameters.
* `protocol_snmpv3_view_clear` - Clears all view entries.
* `protocol_snmpv3_view_del` - Deletes the specified view entry.
* `protocol_snmpv3_view_list` - Returns the current view entries as an array of strings.
* `protocol_ssh_get_args` - Show the agent's SSH argument structure
* `protocol_ssh_get_config` - Show the agent's SSH configuration
* `protocol_ssh_get_statistics` - Show the agent's SSH statistics
* `protocol_ssh_get_stats_hdr` - Show the SSH statistics headers
* `protocol_ssh_get_trace` - Show the agent's SSH traffic tracing
* `protocol_ssh_ipalias_disable` - Disable individual IP aliases on the agent and the simulator host
* `protocol_ssh_ipalias_enable` - Enable individual IP aliases on the agent and the simulator host
* `protocol_ssh_ipalias_isenabled` - Check individual IP aliases on the agent and the simulator host
* `protocol_ssh_ipalias_list` - List all IP aliases on the agent and the simulator host
* `protocol_ssh_set_config` - Set the agent's SSH configuration
* `protocol_ssh_set_trace` - Set the agent's SSH traffic tracing
* `protocol_syslog_get_args` - Show the agent's SYSLOG argument structure
* `protocol_syslog_get_attr` - Show the outgoing message's attributes
* `protocol_syslog_get_config` - Show the agent's SYSLOG configuration
* `protocol_syslog_get_statistics` - Show the agent's SYSLOG statistics
* `protocol_syslog_get_stats_hdr` - Show the SYSLOG statistics headers
* `protocol_syslog_get_trace` - Show the agent's SYSLOG traffic tracing
* `protocol_syslog_send` - Set the agent's SYSLOG traffic tracing
* `protocol_syslog_set_attr` - Set the outgoing message's attributes
* `protocol_syslog_set_config` - Set the agent's SYSLOG configuration
* `protocol_syslog_set_trace` - Set the agent's SYSLOG traffic tracing
* `protocol_telnet_connection_logon` - Changes the connection's current logon.
* `protocol_telnet_connection_request` - Executes the command asynchronously .
* `protocol_telnet_connection_signal` - Triggers the asynchronous signal event with the specified signal name
* `protocol_telnet_get_args` - Show the agent's TELNET argument structure
* `protocol_telnet_get_config` - Show the agent's TELNET configuration
* `protocol_telnet_get_statistics` - Show the agent's TELNET statistics
* `protocol_telnet_get_stats_hdr` - Show the TELNET statistics headers
* `protocol_telnet_get_trace` - Show the agent's TELNET traffic tracing
* `protocol_telnet_ipalias_disable` - Disable individual IP aliases on the agent and the simulator host
* `protocol_telnet_ipalias_enable` - Enable individual IP aliases on the agent and the simulator host
* `protocol_telnet_ipalias_isenabled` - Check individual IP aliases on the agent and the simulator host
* `protocol_telnet_ipalias_list` - List all IP aliases on the agent and the simulator host
* `protocol_telnet_server_get_connections` - Show the agent's TELNET connections
* `protocol_telnet_server_get_keymap` - Show the agent's TELNET keymap file name
* `protocol_telnet_server_get_rulesdb` - Show the agent's TELNET rules db file name
* `protocol_telnet_server_get_state` - Show the agent's TELNET server state
* `protocol_telnet_server_get_userdb` - Show the agent's TELNET user db file name
* `protocol_telnet_server_get_users` - Show the agent's TELNET users
* `protocol_telnet_set_config` - Set the agent's TELNET configuration
* `protocol_telnet_set_trace` - Set the agent's TELNET traffic tracing
* `protocol_tftp_get_args` - Show the agent's TFTP argument structure
* `protocol_tftp_get_config` - Show the agent's TFTP configuration
* `protocol_tftp_get_statistics` - Show the agent's TFTP statistics
* `protocol_tftp_get_stats_hdr` - Show the TFTP statistics headers
* `protocol_tftp_get_trace` - Show the agent's TFTP traffic tracing
* `protocol_tftp_session_get_parameter` - Show a parameter of a TFTP sesssion
* `protocol_tftp_session_read` - Create a read session to download srcfile from server
* `protocol_tftp_session_set_parameter` - Set a parameter of a TFTP sesssion
* `protocol_tftp_session_start` - Start a TFTP sesssion
* `protocol_tftp_session_status` - Check a TFTP sesssion's status
* `protocol_tftp_session_stop` - Stop a TFTP sesssion
* `protocol_tftp_session_write` - Create a read session to upload srcfile to server
* `protocol_tftp_set_config` - Set the agent's TFTP configuration
* `protocol_tftp_set_trace` - Set the agent's TFTP traffic tracing
* `protocol_tod_get_args` - Show the agent's TOD argument structure
* `protocol_tod_get_config` - Show the agent's TOD configuration
* `protocol_tod_get_statistics` - Show the agent's TOD statistics
* `protocol_tod_get_stats_hdr` - Show the TOD statistics headers
* `protocol_tod_get_trace` - Show the agent's TOD traffic tracing
* `protocol_tod_gettime` - Retrieve TOD time
* `protocol_tod_set_config` - Set the agent's TOD configuration
* `protocol_tod_set_trace` - Set the agent's TOD traffic tracing
* `protocol_web_get_args` - Show the agent's WEB argument structure
* `protocol_web_get_config` - Show the agent's WEB configuration
* `protocol_web_get_statistics` - Show the agent's WEB statistics
* `protocol_web_get_stats_hdr` - Show the WEB statistics headers
* `protocol_web_get_trace` - Show the agent's WEB traffic tracing
* `protocol_web_port_add` - Add the agent's WEB port
* `protocol_web_port_exists` - Show the agent's WEB port
* `protocol_web_port_remove` - Remove the agent's WEB port
* `protocol_web_port_set` - Set the agent's WEB port attribute
* `protocol_web_port_start` - Start the agent's WEB port
* `protocol_web_port_stop` - Stop the agent's WEB port
* `protocol_web_set_config` - Set the agent's WEB configuration
* `protocol_web_set_trace` - Set the agent's WEB traffic tracing
* `reload` - Reload the current agent.
* `remove` - Remove an entry from a table.
* `resume` - Resume the current agent.
* `save` - Save agent MIB values.
* `set_delay` - one-way transit delay in msec
* `set_drops` - drop rate (every N-th PDU)
* `set_host` - host address of the agent.
* `set_inform_timeout` - timeout in seconds for retransmitting INFORM PDUs
* `set_interface` - network interface card for the agent
* `set_log` - The current log file for the Simulator.
* `set_mask` - subnet mask of the agent.
* `set_mibs` - set of MIBs, simulations and scenarios
* `set_netdev` - The network address of the host where the MIMIC simulator is running.
* `set_oiddir` - MIB directory of the agent.
* `set_owner` - owner of the agent
* `set_pdusize` - maximum PDU size
* `set_port` - port number
* `set_privdir` - private directory of the agent.
* `set_protocols` - protocols supported by agent as a comma-separated list
* `set_read_community` - read community string
* `set_starttime` - relative start time
* `set_state` - Set the state of a MIB object object
* `set_trace` - SNMP PDU tracing
* `set_validate` - SNMP SET validation policy
* `set_value` - Set a variable in the Value Space.
* `set_write_community` - write community string
* `split_oid` - Split the numerical OID into the object OID and instance OID.
* `start` - Start the current agent.
* `start_all_agents` - Start MIMIC.
* `start_ipalias` - Starts an existing ipalias for the agent.
* `status_ipalias` - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
* `stop` - Show the agent's primary IP address
* `stop_all_agents` - Stop MIMIC.
* `stop_ipalias` - Stops an existing ipalias for the agent.
* `store_exists` - This command can be used as a predicate to ascertain the existence of a given variable.
* `store_get` - Fetches the value associated with a variable.
* `store_list` - This command will return the list of variables in the said scope.
* `store_lreplace` - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* `store_persists` - This command can be used as a predicate to ascertain the persistence of a given variable.
* `store_save` - This operation flushes all global objects which need to be made persistent to disk.
* `store_set` - Set the variable store for the global storage
* `store_unset` - Deletes a variable which is currently defined.
* `terminate` - Terminate the MIMIC daemon.
* `trap_config_add` - Add a trap destination to the set of destinations.
* `trap_config_del` - Remove a trap destination from the set of destinations.
* `trap_config_list` - List the set of trap destinations for this agent instance.
* `trap_list` - List the outstanding asynchronous traps for this agent instance.
* `unset_value` - Unset a variable in the Value Space in order to free its memory.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
