package shared

type CreateServiceInput struct {
	BranchName              *string `json:"branchName"`
	Description             *string `json:"description"`
	Name                    string  `json:"name"`
	RepositoryConnectionArn *string `json:"repositoryConnectionArn"`
	RepositoryID            *string `json:"repositoryId"`
	Spec                    string  `json:"spec"`
	Tags                    []Tag   `json:"tags"`
	TemplateMajorVersion    string  `json:"templateMajorVersion"`
	TemplateMinorVersion    *string `json:"templateMinorVersion"`
	TemplateName            string  `json:"templateName"`
}
