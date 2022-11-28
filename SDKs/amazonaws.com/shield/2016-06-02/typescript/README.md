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
import { AssociateDrtLogBucketRequest, AssociateDrtLogBucketResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateDrtLogBucketRequest = {
  headers: {
    xAmzAlgorithm: "incidunt",
    xAmzContentSha256: "ab",
    xAmzCredential: "sequi",
    xAmzDate: "enim",
    xAmzSecurityToken: "atque",
    xAmzSignature: "necessitatibus",
    xAmzSignedHeaders: "vero",
    xAmzTarget: "AWSShield_20160616.AssociateDRTLogBucket",
  },
  request: {
    logBucket: "alias",
  },
};

sdk.sdk.associateDrtLogBucket(req).then((res: AssociateDrtLogBucketResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateDrtLogBucket` - <p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
* `associateDrtRole` - <p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to the role you will specify in the request. For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>. The role must also trust the service principal <code> drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON Policy Elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an Amazon Web Services Service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
* `associateHealthCheck` - <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and mitigation. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
* `associateProactiveEngagementDetails` - <p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>
* `createProtection` - <p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Elastic Load Balancing load balancer, Global Accelerator accelerator, Elastic IP Address, or an Amazon Route 53 hosted zone.</p> <p>You can add protection to only a single resource with each CreateProtection request. If you want to add protection to multiple resources at once, use the <a href="https://console.aws.amazon.com/waf/">WAF console</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Add Shield Advanced Protection to more Amazon Web Services Resources</a>.</p>
* `createProtectionGroup` - Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
* `createSubscription` - <p>Activates Shield Advanced for an account.</p> <p>When you initally create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>
* `deleteProtection` - Deletes an Shield Advanced <a>Protection</a>.
* `deleteProtectionGroup` - Removes the specified protection group.
* `deleteSubscription` - Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. 
* `describeAttack` - Describes the details of a DDoS attack. 
* `describeAttackStatistics` - <p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>
* `describeDrtAccess` - Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.
* `describeEmergencyContactSettings` - A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
* `describeProtection` - Lists the details of a <a>Protection</a> object.
* `describeProtectionGroup` - Returns the specification for the specified protection group.
* `describeSubscription` - Provides details about the Shield Advanced subscription for an account.
* `disableProactiveEngagement` - Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.
* `disassociateDrtLogBucket` - <p>Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.</p> <p>To make a <code>DisassociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the SRT access to your account, you can submit a <code>DisassociateDRTLogBucket</code> request to remove this access.</p>
* `disassociateDrtRole` - <p>Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.</p> <p>To make a <code>DisassociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the SRT access to your account, you can submit a <code>DisassociateDRTRole</code> request to remove this access.</p>
* `disassociateHealthCheck` - <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and mitigation. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
* `enableProactiveEngagement` - Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
* `getSubscriptionState` - Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.
* `listAttacks` - Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.
* `listProtectionGroups` - Retrieves the <a>ProtectionGroup</a> objects for the account.
* `listProtections` - Lists all <a>Protection</a> objects for the account.
* `listResourcesInProtectionGroup` - Retrieves the resources that are included in the protection group. 
* `listTagsForResource` - Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.
* `tagResource` - Adds or updates tags for a resource in Shield.
* `untagResource` - Removes tags from a resource in Shield.
* `updateEmergencyContactSettings` - Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
* `updateProtectionGroup` - Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
* `updateSubscription` - Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
