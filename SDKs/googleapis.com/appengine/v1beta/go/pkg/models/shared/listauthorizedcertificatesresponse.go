package shared



type ListAuthorizedCertificatesResponse struct {
    Certificates []AuthorizedCertificate `json:"certificates,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

