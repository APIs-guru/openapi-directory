package operations

import (
	"openapi/pkg/models/shared"
)

type ListVpcMembersPathParams struct {
	VpcID string `pathParam:"style=simple,explode=false,name=vpc_id"`
}

type ListVpcMembersQueryParams struct {
	Page         *int64  `queryParam:"style=form,explode=true,name=page"`
	PerPage      *int64  `queryParam:"style=form,explode=true,name=per_page"`
	ResourceType *string `queryParam:"style=form,explode=true,name=resource_type"`
}

type ListVpcMembersRequest struct {
	PathParams  ListVpcMembersPathParams
	QueryParams ListVpcMembersQueryParams
}

type ListVpcMembers200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListVpcMembers200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListVpcMembers200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListVpcMembers200ApplicationJSONMembers struct {
	CreatedAt *string `json:"created_at"`
	Name      *string `json:"name"`
	Urn       *string `json:"urn"`
}

type ListVpcMembers200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListVpcMembers200ApplicationJSON struct {
	Links   *ListVpcMembers200ApplicationJSONLinks    `json:"links"`
	Members []ListVpcMembers200ApplicationJSONMembers `json:"members"`
	Meta    ListVpcMembers200ApplicationJSONMeta      `json:"meta"`
}

type ListVpcMembers401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListVpcMembersResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListVpcMembers200ApplicationJSONObject                    *ListVpcMembers200ApplicationJSON
	ListVpcMembers401ApplicationJSONObject                    *ListVpcMembers401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
