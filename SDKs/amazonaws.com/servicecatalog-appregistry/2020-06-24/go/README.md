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
    
    req := operations.AssociateAttributeGroupRequest{
        PathParams: operations.AssociateAttributeGroupPathParams{
            Application: "eligendi",
            AttributeGroup: "alias",
        },
        Headers: operations.AssociateAttributeGroupHeaders{
            XAmzAlgorithm: "deleniti",
            XAmzContentSha256: "cupiditate",
            XAmzCredential: "vero",
            XAmzDate: "in",
            XAmzSecurityToken: "libero",
            XAmzSignature: "veniam",
            XAmzSignedHeaders: "voluptatem",
        },
    }
    
    res, err := s.Sdk.AssociateAttributeGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAttributeGroupResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateAttributeGroup` - Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
* `AssociateResource` - Associates a resource with an application. Both the resource and the application can be specified either by ID or name.
* `CreateApplication` - Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
* `CreateAttributeGroup` - Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
* `DeleteApplication` - Deletes an application that is specified either by its application ID or name. All associated attribute groups and resources must be disassociated from it before deleting an application.
* `DeleteAttributeGroup` - Deletes an attribute group, specified either by its attribute group ID or name.
* `DisassociateAttributeGroup` - Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
* `DisassociateResource` - Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
* `GetApplication` - Retrieves metadata information about one of your applications. The application can be specified either by its unique ID or by its name (which is unique within one account in one region at a given point in time). Specify by ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem.
* `GetAssociatedResource` - Gets the resource associated with the application.
* `GetAttributeGroup` - Retrieves an attribute group, either by its name or its ID. The attribute group can be specified either by its unique ID or by its name.
* `ListApplications` - Retrieves a list of all of your applications. Results are paginated.
* `ListAssociatedAttributeGroups` - Lists all attribute groups that are associated with specified application. Results are paginated.
* `ListAssociatedResources` - Lists all resources that are associated with specified application. Results are paginated.
* `ListAttributeGroups` - Lists all attribute groups which you have access to. Results are paginated.
* `ListTagsForResource` - Lists all of the tags on the resource.
* `SyncResource` - <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
* `TagResource` - <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
* `UntagResource` - <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
* `UpdateApplication` - Updates an existing application with new attributes.
* `UpdateAttributeGroup` - Updates an existing attribute group with new details. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
