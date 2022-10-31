package operations

type EnterpriseAdminDeletePublicKeyPathParams struct {
	KeyIds string `pathParam:"style=simple,explode=false,name=key_ids"`
}

type EnterpriseAdminDeletePublicKeyRequest struct {
	PathParams EnterpriseAdminDeletePublicKeyPathParams
}

type EnterpriseAdminDeletePublicKeyResponse struct {
	ContentType string
	StatusCode  int64
}
