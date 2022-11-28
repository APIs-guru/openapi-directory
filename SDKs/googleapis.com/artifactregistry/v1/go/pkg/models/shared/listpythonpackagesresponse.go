package shared

// ListPythonPackagesResponse
// The response from listing python packages.
type ListPythonPackagesResponse struct {
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	PythonPackages []PythonPackage `json:"pythonPackages,omitempty"`
}
