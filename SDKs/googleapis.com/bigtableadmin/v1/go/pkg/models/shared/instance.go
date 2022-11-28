package shared

type InstanceStateEnum string

const (
	InstanceStateEnumStateNotKnown InstanceStateEnum = "STATE_NOT_KNOWN"
	InstanceStateEnumReady         InstanceStateEnum = "READY"
	InstanceStateEnumCreating      InstanceStateEnum = "CREATING"
)

type InstanceTypeEnum string

const (
	InstanceTypeEnumTypeUnspecified InstanceTypeEnum = "TYPE_UNSPECIFIED"
	InstanceTypeEnumProduction      InstanceTypeEnum = "PRODUCTION"
	InstanceTypeEnumDevelopment     InstanceTypeEnum = "DEVELOPMENT"
)

// Instance
// A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
type Instance struct {
	CreateTime  *string            `json:"createTime,omitempty"`
	DisplayName *string            `json:"displayName,omitempty"`
	Labels      map[string]string  `json:"labels,omitempty"`
	Name        *string            `json:"name,omitempty"`
	State       *InstanceStateEnum `json:"state,omitempty"`
	Type        *InstanceTypeEnum  `json:"type,omitempty"`
}

// InstanceInput
// A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
type InstanceInput struct {
	DisplayName *string           `json:"displayName,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Type        *InstanceTypeEnum `json:"type,omitempty"`
}
