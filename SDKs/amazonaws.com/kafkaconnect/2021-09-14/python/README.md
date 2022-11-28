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
    
req = operations.CreateConnectorRequest(
    headers=operations.CreateConnectorHeaders(
        x_amz_algorithm="atque",
        x_amz_content_sha256="odio",
        x_amz_credential="quam",
        x_amz_date="ut",
        x_amz_security_token="qui",
        x_amz_signature="voluptas",
        x_amz_signed_headers="in",
    ),
    request=operations.CreateConnectorRequestBody(
        capacity=operations.CreateConnectorRequestBodyCapacity(
            auto_scaling=shared.AutoScaling(
                max_worker_count=8330659122177198523,
                mcu_count=6845063625500580422,
                min_worker_count=8887929759950233110,
                scale_in_policy=shared.ScaleInPolicy(
                    cpu_utilization_percentage=1971677885960265268,
                ),
                scale_out_policy=shared.ScaleOutPolicy(
                    cpu_utilization_percentage=1242866194161234105,
                ),
            ),
            provisioned_capacity=shared.ProvisionedCapacity(
                mcu_count=2209437841303140266,
                worker_count=7300439094265252843,
            ),
        ),
        connector_configuration={
            "dolorem": "facere",
        },
        connector_description="magnam",
        connector_name="aut",
        kafka_cluster=operations.CreateConnectorRequestBodyKafkaCluster(
            apache_kafka_cluster=shared.ApacheKafkaCluster(
                bootstrap_servers="eum",
                vpc=shared.Vpc(
                    security_groups=[
                        "perferendis",
                        "quam",
                    ],
                    subnets=[
                        "quas",
                        "qui",
                        "ut",
                    ],
                ),
            ),
        ),
        kafka_cluster_client_authentication=operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication(
            authentication_type="IAM",
        ),
        kafka_cluster_encryption_in_transit=operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit(
            encryption_type="PLAINTEXT",
        ),
        kafka_connect_version="harum",
        log_delivery=operations.CreateConnectorRequestBodyLogDelivery(
            worker_log_delivery=shared.WorkerLogDelivery(
                cloud_watch_logs=shared.CloudWatchLogsLogDelivery(
                    enabled=False,
                    log_group="facilis",
                ),
                firehose=shared.FirehoseLogDelivery(
                    delivery_stream="blanditiis",
                    enabled=True,
                ),
                s3=shared.S3LogDelivery(
                    bucket="ea",
                    enabled=False,
                    prefix="non",
                ),
            ),
        ),
        plugins=[
            shared.Plugin(
                custom_plugin=shared.CustomPlugin(
                    custom_plugin_arn="qui",
                    revision=1535039728394233189,
                ),
            ),
            shared.Plugin(
                custom_plugin=shared.CustomPlugin(
                    custom_plugin_arn="aut",
                    revision=6522720780889015448,
                ),
            ),
        ],
        service_execution_role_arn="adipisci",
        worker_configuration=operations.CreateConnectorRequestBodyWorkerConfiguration(
            revision=4051032581715466747,
            worker_configuration_arn="praesentium",
        ),
    ),
)
    
res = s.sdk.create_connector(req)

if res.create_connector_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_connector` - Creates a connector using the specified properties.
* `create_custom_plugin` - Creates a custom plugin using the specified properties.
* `create_worker_configuration` - Creates a worker configuration using the specified properties.
* `delete_connector` - Deletes the specified connector.
* `describe_connector` - Returns summary information about the connector.
* `describe_custom_plugin` - A summary description of the custom plugin.
* `describe_worker_configuration` - Returns information about a worker configuration.
* `list_connectors` - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* `list_custom_plugins` - Returns a list of all of the custom plugins in this account and Region.
* `list_worker_configurations` - Returns a list of all of the worker configurations in this account and Region.
* `update_connector` - Updates the specified connector.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
