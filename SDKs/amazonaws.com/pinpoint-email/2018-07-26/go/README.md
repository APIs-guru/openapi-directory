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
    
    req := operations.CreateConfigurationSetRequest{
        Headers: operations.CreateConfigurationSetHeaders{
            XAmzAlgorithm: "cupiditate",
            XAmzContentSha256: "quia",
            XAmzCredential: "facere",
            XAmzDate: "sequi",
            XAmzSecurityToken: "rerum",
            XAmzSignature: "enim",
            XAmzSignedHeaders: "qui",
        },
        Request: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "unde",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: "assumenda",
                TLSPolicy: "OPTIONAL",
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: "2020-04-19T06:12:08Z",
                ReputationMetricsEnabled: true,
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: true,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "provident",
                    Value: "placeat",
                },
                shared.Tag{
                    Key: "perspiciatis",
                    Value: "dolorem",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: "magni",
            },
        },
    }
    
    res, err := s.Sdk.CreateConfigurationSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfigurationSetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateConfigurationSet` - Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 
* `CreateConfigurationSetEventDestination` - <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
* `CreateDedicatedIPPool` - Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.
* `CreateDeliverabilityTestReport` - Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
* `CreateEmailIdentity` - <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>
* `DeleteConfigurationSet` - <p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* `DeleteConfigurationSetEventDestination` - <p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* `DeleteDedicatedIPPool` - Delete a dedicated IP pool.
* `DeleteEmailIdentity` - Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.
* `GetAccount` - Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.
* `GetBlacklistReports` - Retrieve a list of the blacklists that your dedicated IP addresses appear on.
* `GetConfigurationSet` - <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* `GetConfigurationSetEventDestinations` - <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* `GetDedicatedIP` - Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
* `GetDedicatedIps` - List the dedicated IP addresses that are associated with your Amazon Pinpoint account.
* `GetDeliverabilityDashboardOptions` - <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
* `GetDeliverabilityTestReport` - Retrieve the results of a predictive inbox placement test.
* `GetDomainDeliverabilityCampaign` - Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
* `GetDomainStatisticsReport` - Retrieve inbox placement and engagement rates for the domains that you use to send email.
* `GetEmailIdentity` - Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.
* `ListConfigurationSets` - <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* `ListDedicatedIPPools` - List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.
* `ListDeliverabilityTestReports` - Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
* `ListDomainDeliverabilityCampaigns` - Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
* `ListEmailIdentities` - Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.
* `ListTagsForResource` - Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* `PutAccountDedicatedIPWarmupAttributes` - Enable or disable the automatic warm-up feature for dedicated IP addresses.
* `PutAccountSendingAttributes` - Enable or disable the ability of your account to send email.
* `PutConfigurationSetDeliveryOptions` - Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
* `PutConfigurationSetReputationOptions` - Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
* `PutConfigurationSetSendingOptions` - Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.
* `PutConfigurationSetTrackingOptions` - Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.
* `PutDedicatedIPInPool` - <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
* `PutDedicatedIPWarmupAttributes` - <p/>
* `PutDeliverabilityDashboardOption` - <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
* `PutEmailIdentityDkimAttributes` - Used to enable or disable DKIM authentication for an email identity.
* `PutEmailIdentityFeedbackAttributes` - <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>
* `PutEmailIdentityMailFromAttributes` - Used to enable or disable the custom Mail-From domain configuration for an email identity.
* `SendEmail` - <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>
* `TagResource` - <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* `UntagResource` - Remove one or more tags (keys and values) from a specified resource.
* `UpdateConfigurationSetEventDestination` - <p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
