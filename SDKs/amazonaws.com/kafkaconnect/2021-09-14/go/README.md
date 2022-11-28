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
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConnectorRequest{
        Headers: operations.CreateConnectorHeaders{
            XAmzAlgorithm: "atque",
            XAmzContentSha256: "odio",
            XAmzCredential: "quam",
            XAmzDate: "ut",
            XAmzSecurityToken: "qui",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "in",
        },
        Request: operations.CreateConnectorRequestBody{
            Capacity: operations.CreateConnectorRequestBodyCapacity{
                AutoScaling: &shared.AutoScaling{
                    MaxWorkerCount: 8330659122177198523,
                    McuCount: 6845063625500580422,
                    MinWorkerCount: 8887929759950233110,
                    ScaleInPolicy: &shared.ScaleInPolicy{
                        CPUUtilizationPercentage: 1971677885960265268,
                    },
                    ScaleOutPolicy: &shared.ScaleOutPolicy{
                        CPUUtilizationPercentage: 1242866194161234105,
                    },
                },
                ProvisionedCapacity: &shared.ProvisionedCapacity{
                    McuCount: 2209437841303140266,
                    WorkerCount: 7300439094265252843,
                },
            },
            ConnectorConfiguration: map[string]string{
                "dolorem": "facere",
            },
            ConnectorDescription: "magnam",
            ConnectorName: "aut",
            KafkaCluster: operations.CreateConnectorRequestBodyKafkaCluster{
                ApacheKafkaCluster: &shared.ApacheKafkaCluster{
                    BootstrapServers: "eum",
                    Vpc: shared.Vpc{
                        SecurityGroups: []string{
                            "perferendis",
                            "quam",
                        },
                        Subnets: []string{
                            "quas",
                            "qui",
                            "ut",
                        },
                    },
                },
            },
            KafkaClusterClientAuthentication: operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication{
                AuthenticationType: "IAM",
            },
            KafkaClusterEncryptionInTransit: operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit{
                EncryptionType: "PLAINTEXT",
            },
            KafkaConnectVersion: "harum",
            LogDelivery: &operations.CreateConnectorRequestBodyLogDelivery{
                WorkerLogDelivery: &shared.WorkerLogDelivery{
                    CloudWatchLogs: &shared.CloudWatchLogsLogDelivery{
                        Enabled: false,
                        LogGroup: "facilis",
                    },
                    Firehose: &shared.FirehoseLogDelivery{
                        DeliveryStream: "blanditiis",
                        Enabled: true,
                    },
                    S3: &shared.S3LogDelivery{
                        Bucket: "ea",
                        Enabled: false,
                        Prefix: "non",
                    },
                },
            },
            Plugins: []shared.Plugin{
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "qui",
                        Revision: 1535039728394233189,
                    },
                },
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "aut",
                        Revision: 6522720780889015448,
                    },
                },
            },
            ServiceExecutionRoleArn: "adipisci",
            WorkerConfiguration: &operations.CreateConnectorRequestBodyWorkerConfiguration{
                Revision: 4051032581715466747,
                WorkerConfigurationArn: "praesentium",
            },
        },
    }
    
    res, err := s.Sdk.CreateConnector(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateConnector` - Creates a connector using the specified properties.
* `CreateCustomPlugin` - Creates a custom plugin using the specified properties.
* `CreateWorkerConfiguration` - Creates a worker configuration using the specified properties.
* `DeleteConnector` - Deletes the specified connector.
* `DescribeConnector` - Returns summary information about the connector.
* `DescribeCustomPlugin` - A summary description of the custom plugin.
* `DescribeWorkerConfiguration` - Returns information about a worker configuration.
* `ListConnectors` - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* `ListCustomPlugins` - Returns a list of all of the custom plugins in this account and Region.
* `ListWorkerConfigurations` - Returns a list of all of the worker configurations in this account and Region.
* `UpdateConnector` - Updates the specified connector.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
