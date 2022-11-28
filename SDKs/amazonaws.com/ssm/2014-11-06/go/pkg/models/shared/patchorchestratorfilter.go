package shared

// PatchOrchestratorFilter
// <p>Defines a filter used in Patch Manager APIs. Supported filter keys depend on the API operation that includes the filter. Patch Manager API operations that use <code>PatchOrchestratorFilter</code> include the following:</p> <ul> <li> <p> <a>DescribeAvailablePatches</a> </p> </li> <li> <p> <a>DescribeInstancePatches</a> </p> </li> <li> <p> <a>DescribePatchBaselines</a> </p> </li> <li> <p> <a>DescribePatchGroups</a> </p> </li> </ul>
type PatchOrchestratorFilter struct {
	Key    *string  `json:"Key,omitempty"`
	Values []string `json:"Values,omitempty"`
}
