package shared

type ListPythonPackagesResponse struct {
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	PythonPackages []PythonPackage `json:"pythonPackages,omitempty"`
}
