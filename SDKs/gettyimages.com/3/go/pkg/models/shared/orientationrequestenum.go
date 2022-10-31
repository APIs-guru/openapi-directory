package shared

type OrientationRequestEnum string

const (
	OrientationRequestEnumHorizontal          OrientationRequestEnum = "horizontal"
	OrientationRequestEnumVertical            OrientationRequestEnum = "vertical"
	OrientationRequestEnumSquare              OrientationRequestEnum = "square"
	OrientationRequestEnumPanoramicHorizontal OrientationRequestEnum = "panoramic_horizontal"
	OrientationRequestEnumPanoramicVertical   OrientationRequestEnum = "panoramic_vertical"
)
