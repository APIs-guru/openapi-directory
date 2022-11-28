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
    
    req := operations.CreateSignalingChannelRequest{
        Headers: operations.CreateSignalingChannelHeaders{
            XAmzAlgorithm: "vel",
            XAmzContentSha256: "sunt",
            XAmzCredential: "soluta",
            XAmzDate: "alias",
            XAmzSecurityToken: "aut",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "dolorum",
        },
        Request: operations.CreateSignalingChannelRequestBody{
            ChannelName: "nostrum",
            ChannelType: "SINGLE_MASTER",
            SingleMasterConfiguration: &operations.CreateSignalingChannelRequestBodySingleMasterConfiguration{
                MessageTTLSeconds: 4412873106353383392,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "doloribus",
                    Value: "at",
                },
                shared.Tag{
                    Key: "dolore",
                    Value: "et",
                },
                shared.Tag{
                    Key: "natus",
                    Value: "corrupti",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateSignalingChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSignalingChannelOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateSignalingChannel` - <p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
* `CreateStream` - <p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>
* `DeleteSignalingChannel` - Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.
* `DeleteStream` - <p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>
* `DescribeSignalingChannel` - Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.
* `DescribeStream` - Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. 
* `GetDataEndpoint` - <p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>
* `GetSignalingChannelEndpoint` - <p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>
* `ListSignalingChannels` - Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.
* `ListStreams` - Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. 
* `ListTagsForResource` - Returns a list of tags associated with the specified signaling channel.
* `ListTagsForStream` - <p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
* `TagResource` - Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.
* `TagStream` - <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>Kinesis video streams support up to 50 tags.</p>
* `UntagResource` - Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.
* `UntagStream` - <p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>
* `UpdateDataRetention` - <p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>
* `UpdateSignalingChannel` - <p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>
* `UpdateStream` - <p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
