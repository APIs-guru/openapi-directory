package shared

type ServicePerimeterPerimeterTypeEnum string

const (
	ServicePerimeterPerimeterTypeEnumPerimeterTypeRegular ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_REGULAR"
	ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge  ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_BRIDGE"
)

// ServicePerimeter
// `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.
type ServicePerimeter struct {
	Description           *string                            `json:"description,omitempty"`
	Name                  *string                            `json:"name,omitempty"`
	PerimeterType         *ServicePerimeterPerimeterTypeEnum `json:"perimeterType,omitempty"`
	Spec                  *ServicePerimeterConfig            `json:"spec,omitempty"`
	Status                *ServicePerimeterConfig            `json:"status,omitempty"`
	Title                 *string                            `json:"title,omitempty"`
	UseExplicitDryRunSpec *bool                              `json:"useExplicitDryRunSpec,omitempty"`
}
