package shared

type ListNpmPackagesResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	NpmPackages   []NpmPackage `json:"npmPackages"`
}
