package shared

// ListAuthorizedCertificatesResponse
// Response message for AuthorizedCertificates.ListAuthorizedCertificates.
type ListAuthorizedCertificatesResponse struct {
	Certificates  []AuthorizedCertificate `json:"certificates,omitempty"`
	NextPageToken *string                 `json:"nextPageToken,omitempty"`
}
