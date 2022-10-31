package operations

import (
	"openapi/pkg/models/shared"
)

type TypeaheadForWorkspacePathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type TypeaheadForWorkspaceResourceTypeEnum string

const (
	TypeaheadForWorkspaceResourceTypeEnumCustomField TypeaheadForWorkspaceResourceTypeEnum = "custom_field"
	TypeaheadForWorkspaceResourceTypeEnumPortfolio   TypeaheadForWorkspaceResourceTypeEnum = "portfolio"
	TypeaheadForWorkspaceResourceTypeEnumProject     TypeaheadForWorkspaceResourceTypeEnum = "project"
	TypeaheadForWorkspaceResourceTypeEnumTag         TypeaheadForWorkspaceResourceTypeEnum = "tag"
	TypeaheadForWorkspaceResourceTypeEnumTask        TypeaheadForWorkspaceResourceTypeEnum = "task"
	TypeaheadForWorkspaceResourceTypeEnumUser        TypeaheadForWorkspaceResourceTypeEnum = "user"
)

type TypeaheadForWorkspaceTypeEnum string

const (
	TypeaheadForWorkspaceTypeEnumCustomField TypeaheadForWorkspaceTypeEnum = "custom_field"
	TypeaheadForWorkspaceTypeEnumPortfolio   TypeaheadForWorkspaceTypeEnum = "portfolio"
	TypeaheadForWorkspaceTypeEnumProject     TypeaheadForWorkspaceTypeEnum = "project"
	TypeaheadForWorkspaceTypeEnumTag         TypeaheadForWorkspaceTypeEnum = "tag"
	TypeaheadForWorkspaceTypeEnumTask        TypeaheadForWorkspaceTypeEnum = "task"
	TypeaheadForWorkspaceTypeEnumUser        TypeaheadForWorkspaceTypeEnum = "user"
)

type TypeaheadForWorkspaceQueryParams struct {
	Count        *int64                                `queryParam:"style=form,explode=true,name=count"`
	OptFields    []string                              `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty    *bool                                 `queryParam:"style=form,explode=true,name=opt_pretty"`
	Query        *string                               `queryParam:"style=form,explode=true,name=query"`
	ResourceType TypeaheadForWorkspaceResourceTypeEnum `queryParam:"style=form,explode=true,name=resource_type"`
	Type         *TypeaheadForWorkspaceTypeEnum        `queryParam:"style=form,explode=true,name=type"`
}

type TypeaheadForWorkspaceRequest struct {
	PathParams  TypeaheadForWorkspacePathParams
	QueryParams TypeaheadForWorkspaceQueryParams
}

type TypeaheadForWorkspace200ApplicationJSON struct {
	Data []shared.AsanaNamedResource `json:"data,omitempty"`
}

type TypeaheadForWorkspaceResponse struct {
	ContentType                                   string
	ErrorResponse                                 *shared.ErrorResponse
	StatusCode                                    int64
	TypeaheadForWorkspace200ApplicationJSONObject *TypeaheadForWorkspace200ApplicationJSON
}
