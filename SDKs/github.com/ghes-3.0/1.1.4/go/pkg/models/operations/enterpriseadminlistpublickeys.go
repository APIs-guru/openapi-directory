package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListPublicKeysSortEnum string

const (
	EnterpriseAdminListPublicKeysSortEnumCreated  EnterpriseAdminListPublicKeysSortEnum = "created"
	EnterpriseAdminListPublicKeysSortEnumUpdated  EnterpriseAdminListPublicKeysSortEnum = "updated"
	EnterpriseAdminListPublicKeysSortEnumAccessed EnterpriseAdminListPublicKeysSortEnum = "accessed"
)

type EnterpriseAdminListPublicKeysQueryParams struct {
	Direction *shared.DirectionEnum                  `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                                 `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                                 `queryParam:"style=form,explode=true,name=per_page"`
	Since     *string                                `queryParam:"style=form,explode=true,name=since"`
	Sort      *EnterpriseAdminListPublicKeysSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type EnterpriseAdminListPublicKeysRequest struct {
	QueryParams EnterpriseAdminListPublicKeysQueryParams
}

type EnterpriseAdminListPublicKeysResponse struct {
	ContentType          string
	Headers              map[string][]string
	StatusCode           int64
	EnterprisePublicKeys []shared.EnterprisePublicKey
}
