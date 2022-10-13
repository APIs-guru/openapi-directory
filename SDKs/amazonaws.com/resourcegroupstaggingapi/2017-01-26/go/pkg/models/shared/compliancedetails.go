package shared

type ComplianceDetails struct {
	ComplianceStatus           *bool    `json:"ComplianceStatus"`
	KeysWithNoncompliantValues []string `json:"KeysWithNoncompliantValues"`
	NoncompliantKeys           []string `json:"NoncompliantKeys"`
}
