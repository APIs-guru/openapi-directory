package shared



type ListNpmPackagesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    NpmPackages []NpmPackage `json:"npmPackages,omitempty"`
    
}

