package shared

// InstanceInformationFilter
// <p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this operation instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and doesn't support tags. </p>
type InstanceInformationFilter struct {
	Key      InstanceInformationFilterKeyEnum `json:"key"`
	ValueSet []string                         `json:"valueSet"`
}
