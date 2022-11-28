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
    
req = operations.AddLfTagsToResourceRequest(
    headers=operations.AddLfTagsToResourceHeaders(
        x_amz_algorithm="laudantium",
        x_amz_content_sha256="fuga",
        x_amz_credential="doloribus",
        x_amz_date="quasi",
        x_amz_security_token="et",
        x_amz_signature="laboriosam",
        x_amz_signed_headers="debitis",
        x_amz_target="AWSLakeFormation.AddLFTagsToResource",
    ),
    request=shared.AddLfTagsToResourceRequest(
        catalog_id="minus",
        lf_tags=[
            shared.LfTagPair(
                catalog_id="magnam",
                tag_key="similique",
                tag_values=[
                    "voluptatem",
                ],
            ),
            shared.LfTagPair(
                catalog_id="officia",
                tag_key="iure",
                tag_values=[
                    "consequatur",
                    "aut",
                ],
            ),
            shared.LfTagPair(
                catalog_id="nobis",
                tag_key="vero",
                tag_values=[
                    "enim",
                    "sequi",
                ],
            ),
        ],
        resource=shared.Resource(
            catalog={
                "voluptas": "aliquid",
                "maiores": "velit",
                "modi": "voluptatem",
            },
            data_location=shared.DataLocationResource(
                catalog_id="optio",
                resource_arn="doloremque",
            ),
            database=shared.DatabaseResource(
                catalog_id="cum",
                name="necessitatibus",
            ),
            lf_tag=shared.LfTagKeyResource(
                catalog_id="illum",
                tag_key="enim",
                tag_values=[
                    "ratione",
                ],
            ),
            lf_tag_policy=shared.LfTagPolicyResource(
                catalog_id="quasi",
                expression=[
                    shared.LfTag(
                        tag_key="sapiente",
                        tag_values=[
                            "omnis",
                            "accusamus",
                            "et",
                        ],
                    ),
                    shared.LfTag(
                        tag_key="accusamus",
                        tag_values=[
                            "enim",
                        ],
                    ),
                    shared.LfTag(
                        tag_key="in",
                        tag_values=[
                            "rerum",
                            "in",
                            "perspiciatis",
                        ],
                    ),
                ],
                resource_type="DATABASE",
            ),
            table=shared.TableResource(
                catalog_id="asperiores",
                database_name="fugit",
                name="in",
                table_wildcard={
                    "saepe": "veritatis",
                },
            ),
            table_with_columns=shared.TableWithColumnsResource(
                catalog_id="nulla",
                column_names=[
                    "ipsum",
                    "aliquid",
                    "iure",
                ],
                column_wildcard=shared.ColumnWildcard(
                    excluded_column_names=[
                        "maiores",
                        "fugit",
                        "qui",
                    ],
                ),
                database_name="natus",
                name="molestiae",
            ),
        ),
    ),
)
    
res = s.sdk.add_lf_tags_to_resource(req)

if res.add_lf_tags_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `add_lf_tags_to_resource` - Attaches one or more tags to an existing resource.
* `batch_grant_permissions` - Batch operation to grant permissions to the principal.
* `batch_revoke_permissions` - Batch operation to revoke permissions from the principal.
* `create_lf_tag` - Creates a tag with the specified name and values.
* `delete_lf_tag` - Deletes the specified tag key name. If the attribute key does not exist or the tag does not exist, then the operation will not do anything. If the attribute key exists, then the operation checks if any resources are tagged with this attribute key, if yes, the API throws a 400 Exception with the message "Delete not allowed" as the tag key is still attached with resources. You can consider untagging resources with this tag key.
* `deregister_resource` - <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
* `describe_resource` - Retrieves the current data access role for the given resource registered in AWS Lake Formation.
* `get_data_lake_settings` - Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 
* `get_effective_permissions_for_path` - Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
* `get_lf_tag` - Returns a tag definition.
* `get_resource_lf_tags` - Returns the tags applied to a resource.
* `grant_permissions` - <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* `list_lf_tags` - Lists tags that the requester has permission to view. 
* `list_permissions` - <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* `list_resources` - Lists the resources registered to be managed by the Data Catalog.
* `put_data_lake_settings` - <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
* `register_resource` - <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
* `remove_lf_tags_from_resource` - Removes a tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
* `revoke_permissions` - Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
* `search_databases_by_lf_tags` - This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
* `search_tables_by_lf_tags` - This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LFTags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
* `update_lf_tag` - Updates the list of possible values for the specified tag key. If the tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the tag key's value. 
* `update_resource` - Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
