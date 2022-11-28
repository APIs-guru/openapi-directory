package shared

// WorkflowDetails
// Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution.
type WorkflowDetails struct {
	OnUpload []WorkflowDetail `json:"OnUpload"`
}
