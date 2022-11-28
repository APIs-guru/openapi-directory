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
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateClusterRequest(
    headers=operations.CreateClusterHeaders(
        x_amz_algorithm="ipsa",
        x_amz_content_sha256="quibusdam",
        x_amz_credential="quis",
        x_amz_date="necessitatibus",
        x_amz_security_token="sint",
        x_amz_signature="enim",
        x_amz_signed_headers="quia",
    ),
    request=operations.CreateClusterRequestBody(
        client_token="voluptatem",
        cluster_name="suscipit",
    ),
)
    
res = s.sdk.create_cluster(req)

if res.create_cluster_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_cluster` - Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the Amazon Route 53 Application Recovery Controller cluster data plane.
* `create_control_panel` - Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or AWS Region.
* `create_routing_control` - <p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* `create_safety_rule` - <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.</p> <p>Gating rule: A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.</p>
* `delete_cluster` - Delete a cluster.
* `delete_control_panel` - Deletes a control panel.
* `delete_routing_control` - Deletes a routing control.
* `delete_safety_rule` - <p>Deletes a safety rule.</p>/&gt;
* `describe_cluster` - Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).
* `describe_control_panel` - Displays details about a control panel.
* `describe_routing_control` - <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* `describe_safety_rule` - Describes the safety rules (that is, the assertion rules and gating rules) for the routing controls in a control panel.
* `list_associated_route53_health_checks` - Returns an array of all Amazon Route 53 health checks associated with a specific routing control.
* `list_clusters` - Returns an array of all the clusters in an account.
* `list_control_panels` - Returns an array of control panels for a cluster.
* `list_routing_controls` - Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
* `list_safety_rules` - List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.
* `update_control_panel` - Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.
* `update_routing_control` - Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
* `update_safety_rule` - Update a safety rule (an assertion rule or gating rule) for the routing controls in a control panel. You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new safety rule.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
