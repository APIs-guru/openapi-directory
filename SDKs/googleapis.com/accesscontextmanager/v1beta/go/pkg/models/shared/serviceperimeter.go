package shared

type ServicePerimeterPerimeterTypeEnum string

const (
	ServicePerimeterPerimeterTypeEnumPerimeterTypeRegular ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_REGULAR"
	ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge  ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_BRIDGE"
)

type ServicePerimeter struct {
	Description   *string                            `json:"description"`
	Name          *string                            `json:"name"`
	PerimeterType *ServicePerimeterPerimeterTypeEnum `json:"perimeterType"`
	Status        *ServicePerimeterConfig            `json:"status"`
	Title         *string                            `json:"title"`
}
