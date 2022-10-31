package operations

import (
	"openapi/pkg/models/shared"
)

type ListLayersCompatibleRuntimeEnum string

const (
	ListLayersCompatibleRuntimeEnumNodejs       ListLayersCompatibleRuntimeEnum = "nodejs"
	ListLayersCompatibleRuntimeEnumNodejs43     ListLayersCompatibleRuntimeEnum = "nodejs4.3"
	ListLayersCompatibleRuntimeEnumNodejs610    ListLayersCompatibleRuntimeEnum = "nodejs6.10"
	ListLayersCompatibleRuntimeEnumNodejs810    ListLayersCompatibleRuntimeEnum = "nodejs8.10"
	ListLayersCompatibleRuntimeEnumNodejs10X    ListLayersCompatibleRuntimeEnum = "nodejs10.x"
	ListLayersCompatibleRuntimeEnumNodejs12X    ListLayersCompatibleRuntimeEnum = "nodejs12.x"
	ListLayersCompatibleRuntimeEnumNodejs14X    ListLayersCompatibleRuntimeEnum = "nodejs14.x"
	ListLayersCompatibleRuntimeEnumJava8        ListLayersCompatibleRuntimeEnum = "java8"
	ListLayersCompatibleRuntimeEnumJava8Al2     ListLayersCompatibleRuntimeEnum = "java8.al2"
	ListLayersCompatibleRuntimeEnumJava11       ListLayersCompatibleRuntimeEnum = "java11"
	ListLayersCompatibleRuntimeEnumPython27     ListLayersCompatibleRuntimeEnum = "python2.7"
	ListLayersCompatibleRuntimeEnumPython36     ListLayersCompatibleRuntimeEnum = "python3.6"
	ListLayersCompatibleRuntimeEnumPython37     ListLayersCompatibleRuntimeEnum = "python3.7"
	ListLayersCompatibleRuntimeEnumPython38     ListLayersCompatibleRuntimeEnum = "python3.8"
	ListLayersCompatibleRuntimeEnumPython39     ListLayersCompatibleRuntimeEnum = "python3.9"
	ListLayersCompatibleRuntimeEnumDotnetcore10 ListLayersCompatibleRuntimeEnum = "dotnetcore1.0"
	ListLayersCompatibleRuntimeEnumDotnetcore20 ListLayersCompatibleRuntimeEnum = "dotnetcore2.0"
	ListLayersCompatibleRuntimeEnumDotnetcore21 ListLayersCompatibleRuntimeEnum = "dotnetcore2.1"
	ListLayersCompatibleRuntimeEnumDotnetcore31 ListLayersCompatibleRuntimeEnum = "dotnetcore3.1"
	ListLayersCompatibleRuntimeEnumNodejs43Edge ListLayersCompatibleRuntimeEnum = "nodejs4.3-edge"
	ListLayersCompatibleRuntimeEnumGo1X         ListLayersCompatibleRuntimeEnum = "go1.x"
	ListLayersCompatibleRuntimeEnumRuby25       ListLayersCompatibleRuntimeEnum = "ruby2.5"
	ListLayersCompatibleRuntimeEnumRuby27       ListLayersCompatibleRuntimeEnum = "ruby2.7"
	ListLayersCompatibleRuntimeEnumProvided     ListLayersCompatibleRuntimeEnum = "provided"
	ListLayersCompatibleRuntimeEnumProvidedAl2  ListLayersCompatibleRuntimeEnum = "provided.al2"
)

type ListLayersQueryParams struct {
	CompatibleRuntime *ListLayersCompatibleRuntimeEnum `queryParam:"style=form,explode=true,name=CompatibleRuntime"`
	Marker            *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems          *int64                           `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListLayersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListLayersRequest struct {
	QueryParams ListLayersQueryParams
	Headers     ListLayersHeaders
}

type ListLayersResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListLayersResponse             *shared.ListLayersResponse
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
