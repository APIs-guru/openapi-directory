package shared

type CreateServiceInput struct {
	BranchName              *string `json:"branchName,omitempty"`
	Description             *string `json:"description,omitempty"`
	Name                    string  `json:"name"`
	RepositoryConnectionArn *string `json:"repositoryConnectionArn,omitempty"`
	RepositoryID            *string `json:"repositoryId,omitempty"`
	Spec                    string  `json:"spec"`
	Tags                    []Tag   `json:"tags,omitempty"`
	TemplateMajorVersion    string  `json:"templateMajorVersion"`
	TemplateMinorVersion    *string `json:"templateMinorVersion,omitempty"`
	TemplateName            string  `json:"templateName"`
}
