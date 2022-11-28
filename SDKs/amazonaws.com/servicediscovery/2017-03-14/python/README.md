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
    
req = operations.CreateHTTPNamespaceRequest(
    headers=operations.CreateHTTPNamespaceHeaders(
        x_amz_algorithm="inventore",
        x_amz_content_sha256="voluptas",
        x_amz_credential="minus",
        x_amz_date="dicta",
        x_amz_security_token="inventore",
        x_amz_signature="eum",
        x_amz_signed_headers="nesciunt",
        x_amz_target="Route53AutoNaming_v20170314.CreateHttpNamespace",
    ),
    request=shared.CreateHTTPNamespaceRequest(
        creator_request_id="eos",
        description="minima",
        name="sunt",
        tags=[
            shared.Tag(
                key="eaque",
                value="voluptatem",
            ),
        ],
    ),
)
    
res = s.sdk.create_http_namespace(req)

if res.create_http_namespace_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_http_namespace` - <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* `create_private_dns_namespace` - Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.
* `create_public_dns_namespace` - Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.
* `create_service` - <p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* `delete_namespace` - Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.
* `delete_service` - Deletes a specified service. If the service still contains one or more registered instances, the request fails.
* `deregister_instance` - Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.
* `discover_instances` - Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.
* `get_instance` - Gets information about a specified instance.
* `get_instances_health_status` - <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>
* `get_namespace` - Gets information about a namespace.
* `get_operation` - <p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>
* `get_service` - Gets the settings for a specified service.
* `list_instances` - Lists summary information about the instances that you registered by using a specified service.
* `list_namespaces` - Lists summary information about the namespaces that were created by the current account.
* `list_operations` - Lists operations that match the criteria that you specify.
* `list_services` - Lists summary information for all the services that are associated with one or more specified namespaces.
* `list_tags_for_resource` - Lists tags for the specified resource.
* `register_instance` - <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* `tag_resource` - Adds one or more tags to the specified resource.
* `untag_resource` - Removes one or more tags from the specified resource.
* `update_http_namespace` - Updates an HTTP namespace.
* `update_instance_custom_health_status` - <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
* `update_private_dns_namespace` - Updates a private DNS namespace.
* `update_public_dns_namespace` - Updates a public DNS namespace.
* `update_service` - <p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
