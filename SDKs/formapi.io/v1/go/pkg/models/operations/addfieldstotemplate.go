package operations

import (
	"openapi/pkg/models/shared"
)

type AddFieldsToTemplatePathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type AddFieldsToTemplateRequestBodyFieldsAlignmentEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsAlignmentEnumLeft   AddFieldsToTemplateRequestBodyFieldsAlignmentEnum = "left"
	AddFieldsToTemplateRequestBodyFieldsAlignmentEnumCenter AddFieldsToTemplateRequestBodyFieldsAlignmentEnum = "center"
	AddFieldsToTemplateRequestBodyFieldsAlignmentEnumRight  AddFieldsToTemplateRequestBodyFieldsAlignmentEnum = "right"
)

type AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnumAndNumber10003 AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnum = "&#10003;"
	AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnumAndNumber10004 AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnum = "&#10004;"
	AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnumAndNumber10006 AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnum = "&#10006;"
	AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnumAndNumber10007 AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnum = "&#10007;"
	AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnumAndNumber10008 AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnum = "&#10008;"
)

type AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnumText    AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnum = "text"
	AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnumCheck   AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnum = "check"
	AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnumQrcode  AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnum = "qrcode"
	AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnumBarcode AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnum = "barcode"
	AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnumImage   AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnum = "image"
	AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnumShape   AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnum = "shape"
)

type AddFieldsToTemplateRequestBodyFieldsImageGravityEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsImageGravityEnumNorthWest AddFieldsToTemplateRequestBodyFieldsImageGravityEnum = "NorthWest"
	AddFieldsToTemplateRequestBodyFieldsImageGravityEnumNorth     AddFieldsToTemplateRequestBodyFieldsImageGravityEnum = "North"
	AddFieldsToTemplateRequestBodyFieldsImageGravityEnumNorthEast AddFieldsToTemplateRequestBodyFieldsImageGravityEnum = "NorthEast"
	AddFieldsToTemplateRequestBodyFieldsImageGravityEnumWest      AddFieldsToTemplateRequestBodyFieldsImageGravityEnum = "West"
	AddFieldsToTemplateRequestBodyFieldsImageGravityEnumCenter    AddFieldsToTemplateRequestBodyFieldsImageGravityEnum = "Center"
	AddFieldsToTemplateRequestBodyFieldsImageGravityEnumEast      AddFieldsToTemplateRequestBodyFieldsImageGravityEnum = "East"
	AddFieldsToTemplateRequestBodyFieldsImageGravityEnumSouthWest AddFieldsToTemplateRequestBodyFieldsImageGravityEnum = "SouthWest"
	AddFieldsToTemplateRequestBodyFieldsImageGravityEnumSouth     AddFieldsToTemplateRequestBodyFieldsImageGravityEnum = "South"
	AddFieldsToTemplateRequestBodyFieldsImageGravityEnumSouthEast AddFieldsToTemplateRequestBodyFieldsImageGravityEnum = "SouthEast"
)

type AddFieldsToTemplateRequestBodyFieldsImageScaleTypeEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsImageScaleTypeEnumFit     AddFieldsToTemplateRequestBodyFieldsImageScaleTypeEnum = "fit"
	AddFieldsToTemplateRequestBodyFieldsImageScaleTypeEnumFill    AddFieldsToTemplateRequestBodyFieldsImageScaleTypeEnum = "fill"
	AddFieldsToTemplateRequestBodyFieldsImageScaleTypeEnumStretch AddFieldsToTemplateRequestBodyFieldsImageScaleTypeEnum = "stretch"
)

type AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnumEquals AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnum = "equals"
	AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnumRange  AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnum = "range"
	AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnumGte    AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnum = "gte"
	AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnumGt     AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnum = "gt"
	AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnumLte    AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnum = "lte"
	AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnumLt     AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnum = "lt"
)

type AddFieldsToTemplateRequestBodyFieldsOverflowEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsOverflowEnumShrinkToFit AddFieldsToTemplateRequestBodyFieldsOverflowEnum = "shrink_to_fit"
	AddFieldsToTemplateRequestBodyFieldsOverflowEnumTruncate    AddFieldsToTemplateRequestBodyFieldsOverflowEnum = "truncate"
)

type AddFieldsToTemplateRequestBodyFieldsShapeTypeEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsShapeTypeEnumSquare    AddFieldsToTemplateRequestBodyFieldsShapeTypeEnum = "square"
	AddFieldsToTemplateRequestBodyFieldsShapeTypeEnumRectangle AddFieldsToTemplateRequestBodyFieldsShapeTypeEnum = "rectangle"
	AddFieldsToTemplateRequestBodyFieldsShapeTypeEnumCircle    AddFieldsToTemplateRequestBodyFieldsShapeTypeEnum = "circle"
	AddFieldsToTemplateRequestBodyFieldsShapeTypeEnumEllipse   AddFieldsToTemplateRequestBodyFieldsShapeTypeEnum = "ellipse"
)

type AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnumEquals     AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnum = "equals"
	AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnumContains   AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnum = "contains"
	AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnumStartsWith AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnum = "starts_with"
	AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnumEndsWith   AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnum = "ends_with"
	AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnumRegex      AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnum = "regex"
)

type AddFieldsToTemplateRequestBodyFieldsTypeEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsTypeEnumString    AddFieldsToTemplateRequestBodyFieldsTypeEnum = "string"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumNumber    AddFieldsToTemplateRequestBodyFieldsTypeEnum = "number"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumBoolean   AddFieldsToTemplateRequestBodyFieldsTypeEnum = "boolean"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumDate      AddFieldsToTemplateRequestBodyFieldsTypeEnum = "date"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumAddress   AddFieldsToTemplateRequestBodyFieldsTypeEnum = "address"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumCountry   AddFieldsToTemplateRequestBodyFieldsTypeEnum = "country"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumEmail     AddFieldsToTemplateRequestBodyFieldsTypeEnum = "email"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumURL       AddFieldsToTemplateRequestBodyFieldsTypeEnum = "url"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumImage     AddFieldsToTemplateRequestBodyFieldsTypeEnum = "image"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumSignature AddFieldsToTemplateRequestBodyFieldsTypeEnum = "signature"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumBarcode   AddFieldsToTemplateRequestBodyFieldsTypeEnum = "barcode"
	AddFieldsToTemplateRequestBodyFieldsTypeEnumCombined  AddFieldsToTemplateRequestBodyFieldsTypeEnum = "combined"
)

type AddFieldsToTemplateRequestBodyFieldsVAlignmentEnum string

const (
	AddFieldsToTemplateRequestBodyFieldsVAlignmentEnumBottom AddFieldsToTemplateRequestBodyFieldsVAlignmentEnum = "bottom"
	AddFieldsToTemplateRequestBodyFieldsVAlignmentEnumCenter AddFieldsToTemplateRequestBodyFieldsVAlignmentEnum = "center"
	AddFieldsToTemplateRequestBodyFieldsVAlignmentEnumTop    AddFieldsToTemplateRequestBodyFieldsVAlignmentEnum = "top"
)

type AddFieldsToTemplateRequestBodyFields struct {
	Alignment                        *AddFieldsToTemplateRequestBodyFieldsAlignmentEnum           `json:"alignment,omitempty"`
	AutoCalculateMaxLength           *bool                                                        `json:"autoCalculateMaxLength,omitempty"`
	BackgroundColor                  *string                                                      `json:"backgroundColor,omitempty"`
	BackgroundColorFieldName         *string                                                      `json:"backgroundColorFieldName,omitempty"`
	BackgroundColorFieldRequired     *bool                                                        `json:"backgroundColorFieldRequired,omitempty"`
	BarcodeSymbology                 *string                                                      `json:"barcodeSymbology,omitempty"`
	Bold                             *bool                                                        `json:"bold,omitempty"`
	CharacterSpacing                 *float64                                                     `json:"characterSpacing,omitempty"`
	CheckCharacter                   *AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnum      `json:"checkCharacter,omitempty"`
	CheckColor                       *string                                                      `json:"checkColor,omitempty"`
	CheckColorFieldName              *string                                                      `json:"checkColorFieldName,omitempty"`
	CheckColorFieldRequired          *bool                                                        `json:"checkColorFieldRequired,omitempty"`
	Color                            *string                                                      `json:"color,omitempty"`
	ColorFieldName                   *string                                                      `json:"colorFieldName,omitempty"`
	ColorFieldRequired               *bool                                                        `json:"colorFieldRequired,omitempty"`
	Comb                             *bool                                                        `json:"comb,omitempty"`
	CombNumberOfCells                *float64                                                     `json:"combNumberOfCells,omitempty"`
	CombValueOffset                  *float64                                                     `json:"combValueOffset,omitempty"`
	CombinedFieldFormat              *string                                                      `json:"combinedFieldFormat,omitempty"`
	CombinedFieldNames               *string                                                      `json:"combinedFieldNames,omitempty"`
	CombinedFieldSeparator           *string                                                      `json:"combinedFieldSeparator,omitempty"`
	CombinedFieldType                *string                                                      `json:"combinedFieldType,omitempty"`
	Condition                        *string                                                      `json:"condition,omitempty"`
	Currency                         *bool                                                        `json:"currency,omitempty"`
	DateTimeFormat                   *string                                                      `json:"dateTimeFormat,omitempty"`
	DecimalPlaces                    *float64                                                     `json:"decimalPlaces,omitempty"`
	Default                          *string                                                      `json:"default,omitempty"`
	Description                      *string                                                      `json:"description,omitempty"`
	DisplayType                      *AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnum         `json:"displayType,omitempty"`
	ExclusiveMaximum                 *bool                                                        `json:"exclusiveMaximum,omitempty"`
	ExclusiveMinimum                 *bool                                                        `json:"exclusiveMinimum,omitempty"`
	FalseText                        *string                                                      `json:"falseText,omitempty"`
	FontSize                         *float64                                                     `json:"fontSize,omitempty"`
	Height                           *float64                                                     `json:"height,omitempty"`
	Hidden                           *bool                                                        `json:"hidden,omitempty"`
	ID                               *float64                                                     `json:"id,omitempty"`
	ImageGravity                     *AddFieldsToTemplateRequestBodyFieldsImageGravityEnum        `json:"imageGravity,omitempty"`
	ImageScaleType                   *AddFieldsToTemplateRequestBodyFieldsImageScaleTypeEnum      `json:"imageScaleType,omitempty"`
	IncludeTime                      *bool                                                        `json:"includeTime,omitempty"`
	Integer                          *bool                                                        `json:"integer,omitempty"`
	InvertBooleanCondition           *bool                                                        `json:"invertBooleanCondition,omitempty"`
	MaxLength                        *float64                                                     `json:"maxLength,omitempty"`
	Maximum                          *float64                                                     `json:"maximum,omitempty"`
	Metadata                         *string                                                      `json:"metadata,omitempty"`
	MinLength                        *float64                                                     `json:"minLength,omitempty"`
	Minimum                          *float64                                                     `json:"minimum,omitempty"`
	Multiline                        *bool                                                        `json:"multiline,omitempty"`
	MultilineLines                   *float64                                                     `json:"multilineLines,omitempty"`
	Name                             string                                                       `json:"name"`
	NumberConditionRangeExclusiveMax *bool                                                        `json:"numberConditionRangeExclusiveMax,omitempty"`
	NumberConditionRangeExclusiveMin *bool                                                        `json:"numberConditionRangeExclusiveMin,omitempty"`
	NumberConditionRangeMax          *float64                                                     `json:"numberConditionRangeMax,omitempty"`
	NumberConditionRangeMin          *float64                                                     `json:"numberConditionRangeMin,omitempty"`
	NumberConditionType              *AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnum `json:"numberConditionType,omitempty"`
	Opacity                          *float64                                                     `json:"opacity,omitempty"`
	OptionList                       *string                                                      `json:"optionList,omitempty"`
	Overflow                         *AddFieldsToTemplateRequestBodyFieldsOverflowEnum            `json:"overflow,omitempty"`
	Page                             float64                                                      `json:"page"`
	QrcodeColor                      *string                                                      `json:"qrcodeColor,omitempty"`
	QrcodeColorFieldName             *string                                                      `json:"qrcodeColorFieldName,omitempty"`
	QrcodeColorFieldRequired         *bool                                                        `json:"qrcodeColorFieldRequired,omitempty"`
	Required                         *bool                                                        `json:"required,omitempty"`
	Rotation                         *float64                                                     `json:"rotation,omitempty"`
	ShapeBorderColor                 *string                                                      `json:"shapeBorderColor,omitempty"`
	ShapeBorderColorFieldName        *string                                                      `json:"shapeBorderColorFieldName,omitempty"`
	ShapeBorderColorFieldRequired    *bool                                                        `json:"shapeBorderColorFieldRequired,omitempty"`
	ShapeBorderWidth                 *float64                                                     `json:"shapeBorderWidth,omitempty"`
	ShapeFillColor                   *string                                                      `json:"shapeFillColor,omitempty"`
	ShapeFillColorFieldName          *string                                                      `json:"shapeFillColorFieldName,omitempty"`
	ShapeFillColorFieldRequired      *bool                                                        `json:"shapeFillColorFieldRequired,omitempty"`
	ShapeType                        *AddFieldsToTemplateRequestBodyFieldsShapeTypeEnum           `json:"shapeType,omitempty"`
	SignatureAllowDraw               *bool                                                        `json:"signatureAllowDraw,omitempty"`
	SignatureAllowType               *bool                                                        `json:"signatureAllowType,omitempty"`
	Static                           *bool                                                        `json:"static,omitempty"`
	Strikethrough                    *bool                                                        `json:"strikethrough,omitempty"`
	StringConditionType              *AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnum `json:"stringConditionType,omitempty"`
	Title                            *string                                                      `json:"title,omitempty"`
	TrueText                         *string                                                      `json:"trueText,omitempty"`
	Type                             *AddFieldsToTemplateRequestBodyFieldsTypeEnum                `json:"type,omitempty"`
	Typeface                         *string                                                      `json:"typeface,omitempty"`
	Uppercase                        *bool                                                        `json:"uppercase,omitempty"`
	VAlignment                       *AddFieldsToTemplateRequestBodyFieldsVAlignmentEnum          `json:"vAlignment,omitempty"`
	Width                            *float64                                                     `json:"width,omitempty"`
	X                                *float64                                                     `json:"x,omitempty"`
	Y                                *float64                                                     `json:"y,omitempty"`
}

type AddFieldsToTemplateRequestBodyAddFieldsData struct {
	Fields []AddFieldsToTemplateRequestBodyFields `json:"fields"`
}

type AddFieldsToTemplateSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type AddFieldsToTemplateRequest struct {
	PathParams AddFieldsToTemplatePathParams
	Request    AddFieldsToTemplateRequestBodyAddFieldsData `request:"mediaType=application/json"`
	Security   AddFieldsToTemplateSecurity
}

type AddFieldsToTemplate200ApplicationJSONStatusEnum string

const (
	AddFieldsToTemplate200ApplicationJSONStatusEnumSuccess AddFieldsToTemplate200ApplicationJSONStatusEnum = "success"
	AddFieldsToTemplate200ApplicationJSONStatusEnumError   AddFieldsToTemplate200ApplicationJSONStatusEnum = "error"
)

type AddFieldsToTemplate200ApplicationJSONAddFieldsTemplateResponse struct {
	Errors      []string                                        `json:"errors,omitempty"`
	NewFieldIds []int64                                         `json:"new_field_ids,omitempty"`
	Status      AddFieldsToTemplate200ApplicationJSONStatusEnum `json:"status"`
}

type AddFieldsToTemplateResponse struct {
	ContentType               string
	StatusCode                int64
	AddFieldsTemplateResponse *AddFieldsToTemplate200ApplicationJSONAddFieldsTemplateResponse
}
