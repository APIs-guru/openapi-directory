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
	Alignment                        *AddFieldsToTemplateRequestBodyFieldsAlignmentEnum           `json:"alignment"`
	AutoCalculateMaxLength           *bool                                                        `json:"autoCalculateMaxLength"`
	BackgroundColor                  *string                                                      `json:"backgroundColor"`
	BackgroundColorFieldName         *string                                                      `json:"backgroundColorFieldName"`
	BackgroundColorFieldRequired     *bool                                                        `json:"backgroundColorFieldRequired"`
	BarcodeSymbology                 *string                                                      `json:"barcodeSymbology"`
	Bold                             *bool                                                        `json:"bold"`
	CharacterSpacing                 *float64                                                     `json:"characterSpacing"`
	CheckCharacter                   *AddFieldsToTemplateRequestBodyFieldsCheckCharacterEnum      `json:"checkCharacter"`
	CheckColor                       *string                                                      `json:"checkColor"`
	CheckColorFieldName              *string                                                      `json:"checkColorFieldName"`
	CheckColorFieldRequired          *bool                                                        `json:"checkColorFieldRequired"`
	Color                            *string                                                      `json:"color"`
	ColorFieldName                   *string                                                      `json:"colorFieldName"`
	ColorFieldRequired               *bool                                                        `json:"colorFieldRequired"`
	Comb                             *bool                                                        `json:"comb"`
	CombNumberOfCells                *float64                                                     `json:"combNumberOfCells"`
	CombValueOffset                  *float64                                                     `json:"combValueOffset"`
	CombinedFieldFormat              *string                                                      `json:"combinedFieldFormat"`
	CombinedFieldNames               *string                                                      `json:"combinedFieldNames"`
	CombinedFieldSeparator           *string                                                      `json:"combinedFieldSeparator"`
	CombinedFieldType                *string                                                      `json:"combinedFieldType"`
	Condition                        *string                                                      `json:"condition"`
	Currency                         *bool                                                        `json:"currency"`
	DateTimeFormat                   *string                                                      `json:"dateTimeFormat"`
	DecimalPlaces                    *float64                                                     `json:"decimalPlaces"`
	Default                          *string                                                      `json:"default"`
	Description                      *string                                                      `json:"description"`
	DisplayType                      *AddFieldsToTemplateRequestBodyFieldsDisplayTypeEnum         `json:"displayType"`
	ExclusiveMaximum                 *bool                                                        `json:"exclusiveMaximum"`
	ExclusiveMinimum                 *bool                                                        `json:"exclusiveMinimum"`
	FalseText                        *string                                                      `json:"falseText"`
	FontSize                         *float64                                                     `json:"fontSize"`
	Height                           *float64                                                     `json:"height"`
	Hidden                           *bool                                                        `json:"hidden"`
	ID                               *float64                                                     `json:"id"`
	ImageGravity                     *AddFieldsToTemplateRequestBodyFieldsImageGravityEnum        `json:"imageGravity"`
	ImageScaleType                   *AddFieldsToTemplateRequestBodyFieldsImageScaleTypeEnum      `json:"imageScaleType"`
	IncludeTime                      *bool                                                        `json:"includeTime"`
	Integer                          *bool                                                        `json:"integer"`
	InvertBooleanCondition           *bool                                                        `json:"invertBooleanCondition"`
	MaxLength                        *float64                                                     `json:"maxLength"`
	Maximum                          *float64                                                     `json:"maximum"`
	Metadata                         *string                                                      `json:"metadata"`
	MinLength                        *float64                                                     `json:"minLength"`
	Minimum                          *float64                                                     `json:"minimum"`
	Multiline                        *bool                                                        `json:"multiline"`
	MultilineLines                   *float64                                                     `json:"multilineLines"`
	Name                             string                                                       `json:"name"`
	NumberConditionRangeExclusiveMax *bool                                                        `json:"numberConditionRangeExclusiveMax"`
	NumberConditionRangeExclusiveMin *bool                                                        `json:"numberConditionRangeExclusiveMin"`
	NumberConditionRangeMax          *float64                                                     `json:"numberConditionRangeMax"`
	NumberConditionRangeMin          *float64                                                     `json:"numberConditionRangeMin"`
	NumberConditionType              *AddFieldsToTemplateRequestBodyFieldsNumberConditionTypeEnum `json:"numberConditionType"`
	Opacity                          *float64                                                     `json:"opacity"`
	OptionList                       *string                                                      `json:"optionList"`
	Overflow                         *AddFieldsToTemplateRequestBodyFieldsOverflowEnum            `json:"overflow"`
	Page                             float64                                                      `json:"page"`
	QrcodeColor                      *string                                                      `json:"qrcodeColor"`
	QrcodeColorFieldName             *string                                                      `json:"qrcodeColorFieldName"`
	QrcodeColorFieldRequired         *bool                                                        `json:"qrcodeColorFieldRequired"`
	Required                         *bool                                                        `json:"required"`
	Rotation                         *float64                                                     `json:"rotation"`
	ShapeBorderColor                 *string                                                      `json:"shapeBorderColor"`
	ShapeBorderColorFieldName        *string                                                      `json:"shapeBorderColorFieldName"`
	ShapeBorderColorFieldRequired    *bool                                                        `json:"shapeBorderColorFieldRequired"`
	ShapeBorderWidth                 *float64                                                     `json:"shapeBorderWidth"`
	ShapeFillColor                   *string                                                      `json:"shapeFillColor"`
	ShapeFillColorFieldName          *string                                                      `json:"shapeFillColorFieldName"`
	ShapeFillColorFieldRequired      *bool                                                        `json:"shapeFillColorFieldRequired"`
	ShapeType                        *AddFieldsToTemplateRequestBodyFieldsShapeTypeEnum           `json:"shapeType"`
	SignatureAllowDraw               *bool                                                        `json:"signatureAllowDraw"`
	SignatureAllowType               *bool                                                        `json:"signatureAllowType"`
	Static                           *bool                                                        `json:"static"`
	Strikethrough                    *bool                                                        `json:"strikethrough"`
	StringConditionType              *AddFieldsToTemplateRequestBodyFieldsStringConditionTypeEnum `json:"stringConditionType"`
	Title                            *string                                                      `json:"title"`
	TrueText                         *string                                                      `json:"trueText"`
	Type                             *AddFieldsToTemplateRequestBodyFieldsTypeEnum                `json:"type"`
	Typeface                         *string                                                      `json:"typeface"`
	Uppercase                        *bool                                                        `json:"uppercase"`
	VAlignment                       *AddFieldsToTemplateRequestBodyFieldsVAlignmentEnum          `json:"vAlignment"`
	Width                            *float64                                                     `json:"width"`
	X                                *float64                                                     `json:"x"`
	Y                                *float64                                                     `json:"y"`
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
	Errors      []string                                        `json:"errors"`
	NewFieldIds []int64                                         `json:"new_field_ids"`
	Status      AddFieldsToTemplate200ApplicationJSONStatusEnum `json:"status"`
}

type AddFieldsToTemplateResponse struct {
	ContentType               string
	StatusCode                int64
	AddFieldsTemplateResponse *AddFieldsToTemplate200ApplicationJSONAddFieldsTemplateResponse
}
