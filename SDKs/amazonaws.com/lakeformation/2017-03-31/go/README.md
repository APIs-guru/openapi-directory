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
    
    req := operations.AddLfTagsToResourceRequest{
        Headers: operations.AddLfTagsToResourceHeaders{
            XAmzAlgorithm: "laudantium",
            XAmzContentSha256: "fuga",
            XAmzCredential: "doloribus",
            XAmzDate: "quasi",
            XAmzSecurityToken: "et",
            XAmzSignature: "laboriosam",
            XAmzSignedHeaders: "debitis",
            XAmzTarget: "AWSLakeFormation.AddLFTagsToResource",
        },
        Request: shared.AddLfTagsToResourceRequest{
            CatalogID: "minus",
            LfTags: []shared.LfTagPair{
                shared.LfTagPair{
                    CatalogID: "magnam",
                    TagKey: "similique",
                    TagValues: []string{
                        "voluptatem",
                    },
                },
                shared.LfTagPair{
                    CatalogID: "officia",
                    TagKey: "iure",
                    TagValues: []string{
                        "consequatur",
                        "aut",
                    },
                },
                shared.LfTagPair{
                    CatalogID: "nobis",
                    TagKey: "vero",
                    TagValues: []string{
                        "enim",
                        "sequi",
                    },
                },
            },
            Resource: shared.Resource{
                Catalog: map[string]interface{}{
                    "voluptas": "aliquid",
                    "maiores": "velit",
                    "modi": "voluptatem",
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: "optio",
                    ResourceArn: "doloremque",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: "cum",
                    Name: "necessitatibus",
                },
                LfTag: &shared.LfTagKeyResource{
                    CatalogID: "illum",
                    TagKey: "enim",
                    TagValues: []string{
                        "ratione",
                    },
                },
                LfTagPolicy: &shared.LfTagPolicyResource{
                    CatalogID: "quasi",
                    Expression: []shared.LfTag{
                        shared.LfTag{
                            TagKey: "sapiente",
                            TagValues: []string{
                                "omnis",
                                "accusamus",
                                "et",
                            },
                        },
                        shared.LfTag{
                            TagKey: "accusamus",
                            TagValues: []string{
                                "enim",
                            },
                        },
                        shared.LfTag{
                            TagKey: "in",
                            TagValues: []string{
                                "rerum",
                                "in",
                                "perspiciatis",
                            },
                        },
                    },
                    ResourceType: "DATABASE",
                },
                Table: &shared.TableResource{
                    CatalogID: "asperiores",
                    DatabaseName: "fugit",
                    Name: "in",
                    TableWildcard: map[string]interface{}{
                        "saepe": "veritatis",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: "nulla",
                    ColumnNames: []string{
                        "ipsum",
                        "aliquid",
                        "iure",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "maiores",
                            "fugit",
                            "qui",
                        },
                    },
                    DatabaseName: "natus",
                    Name: "molestiae",
                },
            },
        },
    }
    
    res, err := s.Sdk.AddLfTagsToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLfTagsToResourceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AddLfTagsToResource` - Attaches one or more tags to an existing resource.
* `BatchGrantPermissions` - Batch operation to grant permissions to the principal.
* `BatchRevokePermissions` - Batch operation to revoke permissions from the principal.
* `CreateLfTag` - Creates a tag with the specified name and values.
* `DeleteLfTag` - Deletes the specified tag key name. If the attribute key does not exist or the tag does not exist, then the operation will not do anything. If the attribute key exists, then the operation checks if any resources are tagged with this attribute key, if yes, the API throws a 400 Exception with the message "Delete not allowed" as the tag key is still attached with resources. You can consider untagging resources with this tag key.
* `DeregisterResource` - <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
* `DescribeResource` - Retrieves the current data access role for the given resource registered in AWS Lake Formation.
* `GetDataLakeSettings` - Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 
* `GetEffectivePermissionsForPath` - Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
* `GetLfTag` - Returns a tag definition.
* `GetResourceLfTags` - Returns the tags applied to a resource.
* `GrantPermissions` - <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* `ListLfTags` - Lists tags that the requester has permission to view. 
* `ListPermissions` - <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* `ListResources` - Lists the resources registered to be managed by the Data Catalog.
* `PutDataLakeSettings` - <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
* `RegisterResource` - <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
* `RemoveLfTagsFromResource` - Removes a tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
* `RevokePermissions` - Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
* `SearchDatabasesByLfTags` - This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
* `SearchTablesByLfTags` - This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LFTags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
* `UpdateLfTag` - Updates the list of possible values for the specified tag key. If the tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the tag key's value. 
* `UpdateResource` - Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
