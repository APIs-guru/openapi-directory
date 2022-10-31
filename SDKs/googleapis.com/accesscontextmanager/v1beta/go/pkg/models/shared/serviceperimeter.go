package shared




type ServicePerimeterPerimeterTypeEnum string

const (
    ServicePerimeterPerimeterTypeEnumPerimeterTypeRegular ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_REGULAR"
ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_BRIDGE"
)


type ServicePerimeter struct {
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    PerimeterType *ServicePerimeterPerimeterTypeEnum `json:"perimeterType,omitempty"`
    Status *ServicePerimeterConfig `json:"status,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

