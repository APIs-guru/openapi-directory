package shared

type ListAuthorizedCertificatesResponse struct {
	Certificates  []AuthorizedCertificate `json:"certificates"`
	NextPageToken *string                 `json:"nextPageToken"`
}
