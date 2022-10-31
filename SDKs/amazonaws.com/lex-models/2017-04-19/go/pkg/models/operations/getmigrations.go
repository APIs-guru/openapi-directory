package operations

import (
	"openapi/pkg/models/shared"
)

type GetMigrationsMigrationStatusEqualsEnum string

const (
	GetMigrationsMigrationStatusEqualsEnumInProgress GetMigrationsMigrationStatusEqualsEnum = "IN_PROGRESS"
	GetMigrationsMigrationStatusEqualsEnumCompleted  GetMigrationsMigrationStatusEqualsEnum = "COMPLETED"
	GetMigrationsMigrationStatusEqualsEnumFailed     GetMigrationsMigrationStatusEqualsEnum = "FAILED"
)

type GetMigrationsSortByAttributeEnum string

const (
	GetMigrationsSortByAttributeEnumV1BotName         GetMigrationsSortByAttributeEnum = "V1_BOT_NAME"
	GetMigrationsSortByAttributeEnumMigrationDateTime GetMigrationsSortByAttributeEnum = "MIGRATION_DATE_TIME"
)

type GetMigrationsSortByOrderEnum string

const (
	GetMigrationsSortByOrderEnumAscending  GetMigrationsSortByOrderEnum = "ASCENDING"
	GetMigrationsSortByOrderEnumDescending GetMigrationsSortByOrderEnum = "DESCENDING"
)

type GetMigrationsQueryParams struct {
	MaxResults            *int64                                  `queryParam:"style=form,explode=true,name=maxResults"`
	MigrationStatusEquals *GetMigrationsMigrationStatusEqualsEnum `queryParam:"style=form,explode=true,name=migrationStatusEquals"`
	NextToken             *string                                 `queryParam:"style=form,explode=true,name=nextToken"`
	SortByAttribute       *GetMigrationsSortByAttributeEnum       `queryParam:"style=form,explode=true,name=sortByAttribute"`
	SortByOrder           *GetMigrationsSortByOrderEnum           `queryParam:"style=form,explode=true,name=sortByOrder"`
	V1BotNameContains     *string                                 `queryParam:"style=form,explode=true,name=v1BotNameContains"`
}

type GetMigrationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetMigrationsRequest struct {
	QueryParams GetMigrationsQueryParams
	Headers     GetMigrationsHeaders
}

type GetMigrationsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetMigrationsResponse    *shared.GetMigrationsResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	StatusCode               int64
}
