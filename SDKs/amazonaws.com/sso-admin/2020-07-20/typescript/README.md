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
import { AttachManagedPolicyToPermissionSetRequest, AttachManagedPolicyToPermissionSetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AttachManagedPolicyToPermissionSetRequest = {
  headers: {
    xAmzAlgorithm: "nobis",
    xAmzContentSha256: "possimus",
    xAmzCredential: "voluptate",
    xAmzDate: "illum",
    xAmzSecurityToken: "iusto",
    xAmzSignature: "sunt",
    xAmzSignedHeaders: "saepe",
    xAmzTarget: "SWBExternalService.AttachManagedPolicyToPermissionSet",
  },
  request: {
    instanceArn: "quod",
    managedPolicyArn: "ducimus",
    permissionSetArn: "esse",
  },
};

sdk.sdk.attachManagedPolicyToPermissionSet(req).then((res: AttachManagedPolicyToPermissionSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `attachManagedPolicyToPermissionSet` - <p>Attaches an IAM managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `createAccountAssignment` - <p>Assigns access to a principal for a specified Amazon Web Services account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the SSO-created IAM role. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note>
* `createInstanceAccessControlAttributeConfiguration` - Enables the attributes-based access control (ABAC) feature for the specified Amazon Web Services SSO instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `createPermissionSet` - <p>Creates a permission set within a specified SSO instance.</p> <note> <p>To grant users and groups access to Amazon Web Services account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
* `deleteAccountAssignment` - Deletes a principal's access from a specified Amazon Web Services account using a specified permission set.
* `deleteInlinePolicyFromPermissionSet` - Deletes the inline policy from a specified permission set.
* `deleteInstanceAccessControlAttributeConfiguration` - Disables the attributes-based access control (ABAC) feature for the specified Amazon Web Services SSO instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `deletePermissionSet` - Deletes the specified permission set.
* `describeAccountAssignmentCreationStatus` - Describes the status of the assignment creation request.
* `describeAccountAssignmentDeletionStatus` - Describes the status of the assignment deletion request.
* `describeInstanceAccessControlAttributeConfiguration` - Returns the list of Amazon Web Services SSO identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified Amazon Web Services SSO instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `describePermissionSet` - Gets the details of the permission set.
* `describePermissionSetProvisioningStatus` - Describes the status for the given permission set provisioning request.
* `detachManagedPolicyFromPermissionSet` - Detaches the attached IAM managed policy ARN from the specified permission set.
* `getInlinePolicyForPermissionSet` - Obtains the inline policy assigned to the permission set.
* `listAccountAssignmentCreationStatus` - Lists the status of the Amazon Web Services account assignment creation requests for a specified SSO instance.
* `listAccountAssignmentDeletionStatus` - Lists the status of the Amazon Web Services account assignment deletion requests for a specified SSO instance.
* `listAccountAssignments` - Lists the assignee of the specified Amazon Web Services account with the specified permission set.
* `listAccountsForProvisionedPermissionSet` - Lists all the Amazon Web Services accounts where the specified permission set is provisioned.
* `listInstances` - Lists the SSO instances that the caller has access to.
* `listManagedPoliciesInPermissionSet` - Lists the IAM managed policy that is attached to a specified permission set.
* `listPermissionSetProvisioningStatus` - Lists the status of the permission set provisioning requests for a specified SSO instance.
* `listPermissionSets` - Lists the <a>PermissionSet</a>s in an SSO instance.
* `listPermissionSetsProvisionedToAccount` - Lists all the permission sets that are provisioned to a specified Amazon Web Services account.
* `listTagsForResource` - Lists the tags that are attached to a specified resource.
* `provisionPermissionSet` - The process by which a specified permission set is provisioned to the specified target.
* `putInlinePolicyToPermissionSet` - <p>Attaches an IAM inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `tagResource` - Associates a set of tags with a specified resource.
* `untagResource` - Disassociates a set of tags from a specified resource.
* `updateInstanceAccessControlAttributeConfiguration` - Updates the Amazon Web Services SSO identity store attributes that you can use with the Amazon Web Services SSO instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the Amazon Web Services SSO identity store. If a SAML assertion passes any of these attributes, Amazon Web Services SSO replaces the attribute value with the value from the Amazon Web Services SSO identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `updatePermissionSet` - Updates an existing permission set.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
