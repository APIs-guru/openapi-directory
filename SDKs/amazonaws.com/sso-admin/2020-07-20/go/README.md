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
    
    req := operations.AttachManagedPolicyToPermissionSetRequest{
        Headers: operations.AttachManagedPolicyToPermissionSetHeaders{
            XAmzAlgorithm: "nobis",
            XAmzContentSha256: "possimus",
            XAmzCredential: "voluptate",
            XAmzDate: "illum",
            XAmzSecurityToken: "iusto",
            XAmzSignature: "sunt",
            XAmzSignedHeaders: "saepe",
            XAmzTarget: "SWBExternalService.AttachManagedPolicyToPermissionSet",
        },
        Request: shared.AttachManagedPolicyToPermissionSetRequest{
            InstanceArn: "quod",
            ManagedPolicyArn: "ducimus",
            PermissionSetArn: "esse",
        },
    }
    
    res, err := s.Sdk.AttachManagedPolicyToPermissionSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachManagedPolicyToPermissionSetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AttachManagedPolicyToPermissionSet` - <p>Attaches an IAM managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `CreateAccountAssignment` - <p>Assigns access to a principal for a specified Amazon Web Services account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the SSO-created IAM role. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note>
* `CreateInstanceAccessControlAttributeConfiguration` - Enables the attributes-based access control (ABAC) feature for the specified Amazon Web Services SSO instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `CreatePermissionSet` - <p>Creates a permission set within a specified SSO instance.</p> <note> <p>To grant users and groups access to Amazon Web Services account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
* `DeleteAccountAssignment` - Deletes a principal's access from a specified Amazon Web Services account using a specified permission set.
* `DeleteInlinePolicyFromPermissionSet` - Deletes the inline policy from a specified permission set.
* `DeleteInstanceAccessControlAttributeConfiguration` - Disables the attributes-based access control (ABAC) feature for the specified Amazon Web Services SSO instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `DeletePermissionSet` - Deletes the specified permission set.
* `DescribeAccountAssignmentCreationStatus` - Describes the status of the assignment creation request.
* `DescribeAccountAssignmentDeletionStatus` - Describes the status of the assignment deletion request.
* `DescribeInstanceAccessControlAttributeConfiguration` - Returns the list of Amazon Web Services SSO identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified Amazon Web Services SSO instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `DescribePermissionSet` - Gets the details of the permission set.
* `DescribePermissionSetProvisioningStatus` - Describes the status for the given permission set provisioning request.
* `DetachManagedPolicyFromPermissionSet` - Detaches the attached IAM managed policy ARN from the specified permission set.
* `GetInlinePolicyForPermissionSet` - Obtains the inline policy assigned to the permission set.
* `ListAccountAssignmentCreationStatus` - Lists the status of the Amazon Web Services account assignment creation requests for a specified SSO instance.
* `ListAccountAssignmentDeletionStatus` - Lists the status of the Amazon Web Services account assignment deletion requests for a specified SSO instance.
* `ListAccountAssignments` - Lists the assignee of the specified Amazon Web Services account with the specified permission set.
* `ListAccountsForProvisionedPermissionSet` - Lists all the Amazon Web Services accounts where the specified permission set is provisioned.
* `ListInstances` - Lists the SSO instances that the caller has access to.
* `ListManagedPoliciesInPermissionSet` - Lists the IAM managed policy that is attached to a specified permission set.
* `ListPermissionSetProvisioningStatus` - Lists the status of the permission set provisioning requests for a specified SSO instance.
* `ListPermissionSets` - Lists the <a>PermissionSet</a>s in an SSO instance.
* `ListPermissionSetsProvisionedToAccount` - Lists all the permission sets that are provisioned to a specified Amazon Web Services account.
* `ListTagsForResource` - Lists the tags that are attached to a specified resource.
* `ProvisionPermissionSet` - The process by which a specified permission set is provisioned to the specified target.
* `PutInlinePolicyToPermissionSet` - <p>Attaches an IAM inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `TagResource` - Associates a set of tags with a specified resource.
* `UntagResource` - Disassociates a set of tags from a specified resource.
* `UpdateInstanceAccessControlAttributeConfiguration` - Updates the Amazon Web Services SSO identity store attributes that you can use with the Amazon Web Services SSO instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the Amazon Web Services SSO identity store. If a SAML assertion passes any of these attributes, Amazon Web Services SSO replaces the attribute value with the value from the Amazon Web Services SSO identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `UpdatePermissionSet` - Updates an existing permission set.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
