package shared

type ListPythonPackagesResponse struct {
	NextPageToken  *string         `json:"nextPageToken"`
	PythonPackages []PythonPackage `json:"pythonPackages"`
}
