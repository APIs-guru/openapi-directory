package shared

// AwsSsmPatchComplianceDetails
// Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.
type AwsSsmPatchComplianceDetails struct {
	Patch *AwsSsmPatch `json:"Patch,omitempty"`
}
