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
    
req = operations.AttachManagedPolicyToPermissionSetRequest(
    headers=operations.AttachManagedPolicyToPermissionSetHeaders(
        x_amz_algorithm="nobis",
        x_amz_content_sha256="possimus",
        x_amz_credential="voluptate",
        x_amz_date="illum",
        x_amz_security_token="iusto",
        x_amz_signature="sunt",
        x_amz_signed_headers="saepe",
        x_amz_target="SWBExternalService.AttachManagedPolicyToPermissionSet",
    ),
    request=shared.AttachManagedPolicyToPermissionSetRequest(
        instance_arn="quod",
        managed_policy_arn="ducimus",
        permission_set_arn="esse",
    ),
)
    
res = s.sdk.attach_managed_policy_to_permission_set(req)

if res.attach_managed_policy_to_permission_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `attach_managed_policy_to_permission_set` - <p>Attaches an IAM managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `create_account_assignment` - <p>Assigns access to a principal for a specified Amazon Web Services account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the SSO-created IAM role. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note>
* `create_instance_access_control_attribute_configuration` - Enables the attributes-based access control (ABAC) feature for the specified Amazon Web Services SSO instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `create_permission_set` - <p>Creates a permission set within a specified SSO instance.</p> <note> <p>To grant users and groups access to Amazon Web Services account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
* `delete_account_assignment` - Deletes a principal's access from a specified Amazon Web Services account using a specified permission set.
* `delete_inline_policy_from_permission_set` - Deletes the inline policy from a specified permission set.
* `delete_instance_access_control_attribute_configuration` - Disables the attributes-based access control (ABAC) feature for the specified Amazon Web Services SSO instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `delete_permission_set` - Deletes the specified permission set.
* `describe_account_assignment_creation_status` - Describes the status of the assignment creation request.
* `describe_account_assignment_deletion_status` - Describes the status of the assignment deletion request.
* `describe_instance_access_control_attribute_configuration` - Returns the list of Amazon Web Services SSO identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified Amazon Web Services SSO instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `describe_permission_set` - Gets the details of the permission set.
* `describe_permission_set_provisioning_status` - Describes the status for the given permission set provisioning request.
* `detach_managed_policy_from_permission_set` - Detaches the attached IAM managed policy ARN from the specified permission set.
* `get_inline_policy_for_permission_set` - Obtains the inline policy assigned to the permission set.
* `list_account_assignment_creation_status` - Lists the status of the Amazon Web Services account assignment creation requests for a specified SSO instance.
* `list_account_assignment_deletion_status` - Lists the status of the Amazon Web Services account assignment deletion requests for a specified SSO instance.
* `list_account_assignments` - Lists the assignee of the specified Amazon Web Services account with the specified permission set.
* `list_accounts_for_provisioned_permission_set` - Lists all the Amazon Web Services accounts where the specified permission set is provisioned.
* `list_instances` - Lists the SSO instances that the caller has access to.
* `list_managed_policies_in_permission_set` - Lists the IAM managed policy that is attached to a specified permission set.
* `list_permission_set_provisioning_status` - Lists the status of the permission set provisioning requests for a specified SSO instance.
* `list_permission_sets` - Lists the <a>PermissionSet</a>s in an SSO instance.
* `list_permission_sets_provisioned_to_account` - Lists all the permission sets that are provisioned to a specified Amazon Web Services account.
* `list_tags_for_resource` - Lists the tags that are attached to a specified resource.
* `provision_permission_set` - The process by which a specified permission set is provisioned to the specified target.
* `put_inline_policy_to_permission_set` - <p>Attaches an IAM inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `tag_resource` - Associates a set of tags with a specified resource.
* `untag_resource` - Disassociates a set of tags from a specified resource.
* `update_instance_access_control_attribute_configuration` - Updates the Amazon Web Services SSO identity store attributes that you can use with the Amazon Web Services SSO instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the Amazon Web Services SSO identity store. If a SAML assertion passes any of these attributes, Amazon Web Services SSO replaces the attribute value with the value from the Amazon Web Services SSO identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
* `update_permission_set` - Updates an existing permission set.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
