package shared

// InstanceAssociationOutputLocation
// <p>An S3 bucket where you want to store the results of this request.</p> <p>For the minimal permissions required to enable Amazon S3 output for an association, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html">Creating associations</a> in the <i>Systems Manager User Guide</i>. </p>
type InstanceAssociationOutputLocation struct {
	S3Location *S3OutputLocation `json:"S3Location,omitempty"`
}
