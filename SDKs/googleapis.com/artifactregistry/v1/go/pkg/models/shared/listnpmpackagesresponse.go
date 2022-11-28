package shared

// ListNpmPackagesResponse
// The response from listing npm packages.
type ListNpmPackagesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	NpmPackages   []NpmPackage `json:"npmPackages,omitempty"`
}
