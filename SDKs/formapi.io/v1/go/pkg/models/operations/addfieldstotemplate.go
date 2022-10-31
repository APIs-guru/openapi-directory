package operations

import (
"openapi/pkg/models/shared")

type AddFieldsToTemplatePathParams struct {
    TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
    
}


type AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnumLeft AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum = "left"
AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnumCenter AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum = "center"
AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnumRight AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum = "right"
)



type AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnumAndNumber10003 AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum = "&#10003;"
AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnumAndNumber10004 AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum = "&#10004;"
AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnumAndNumber10006 AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum = "&#10006;"
AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnumAndNumber10007 AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum = "&#10007;"
AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnumAndNumber10008 AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum = "&#10008;"
)



type AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnumText AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum = "text"
AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnumCheck AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum = "check"
AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnumQrcode AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum = "qrcode"
AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnumBarcode AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum = "barcode"
AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnumImage AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum = "image"
AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnumShape AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum = "shape"
)



type AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnumNorthWest AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = "NorthWest"
AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnumNorth AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = "North"
AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnumNorthEast AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = "NorthEast"
AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnumWest AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = "West"
AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnumCenter AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = "Center"
AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnumEast AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = "East"
AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnumSouthWest AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = "SouthWest"
AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnumSouth AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = "South"
AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnumSouthEast AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = "SouthEast"
)



type AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnumFit AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum = "fit"
AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnumFill AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum = "fill"
AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnumStretch AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum = "stretch"
)



type AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnumEquals AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum = "equals"
AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnumRange AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum = "range"
AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnumGte AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum = "gte"
AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnumGt AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum = "gt"
AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnumLte AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum = "lte"
AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnumLt AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum = "lt"
)



type AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsOverflowEnumShrinkToFit AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum = "shrink_to_fit"
AddFieldsToTemplateAddFieldsDataFieldsOverflowEnumTruncate AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum = "truncate"
)



type AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnumSquare AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum = "square"
AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnumRectangle AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum = "rectangle"
AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnumCircle AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum = "circle"
AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnumEllipse AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum = "ellipse"
)



type AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnumEquals AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum = "equals"
AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnumContains AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum = "contains"
AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnumStartsWith AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum = "starts_with"
AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnumEndsWith AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum = "ends_with"
AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnumRegex AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum = "regex"
)



type AddFieldsToTemplateAddFieldsDataFieldsTypeEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnumString AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "string"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumNumber AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "number"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumBoolean AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "boolean"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumDate AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "date"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumAddress AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "address"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumCountry AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "country"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumEmail AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "email"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumURL AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "url"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumImage AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "image"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumSignature AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "signature"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumBarcode AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "barcode"
AddFieldsToTemplateAddFieldsDataFieldsTypeEnumCombined AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = "combined"
)



type AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum string

const (
    AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnumBottom AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum = "bottom"
AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnumCenter AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum = "center"
AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnumTop AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum = "top"
)


type AddFieldsToTemplateAddFieldsDataFields struct {
    Alignment *AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum `json:"alignment,omitempty"`
    AutoCalculateMaxLength *bool `json:"autoCalculateMaxLength,omitempty"`
    BackgroundColor *string `json:"backgroundColor,omitempty"`
    BackgroundColorFieldName *string `json:"backgroundColorFieldName,omitempty"`
    BackgroundColorFieldRequired *bool `json:"backgroundColorFieldRequired,omitempty"`
    BarcodeSymbology *string `json:"barcodeSymbology,omitempty"`
    Bold *bool `json:"bold,omitempty"`
    CharacterSpacing *float64 `json:"characterSpacing,omitempty"`
    CheckCharacter *AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum `json:"checkCharacter,omitempty"`
    CheckColor *string `json:"checkColor,omitempty"`
    CheckColorFieldName *string `json:"checkColorFieldName,omitempty"`
    CheckColorFieldRequired *bool `json:"checkColorFieldRequired,omitempty"`
    Color *string `json:"color,omitempty"`
    ColorFieldName *string `json:"colorFieldName,omitempty"`
    ColorFieldRequired *bool `json:"colorFieldRequired,omitempty"`
    Comb *bool `json:"comb,omitempty"`
    CombNumberOfCells *float64 `json:"combNumberOfCells,omitempty"`
    CombValueOffset *float64 `json:"combValueOffset,omitempty"`
    CombinedFieldFormat *string `json:"combinedFieldFormat,omitempty"`
    CombinedFieldNames *string `json:"combinedFieldNames,omitempty"`
    CombinedFieldSeparator *string `json:"combinedFieldSeparator,omitempty"`
    CombinedFieldType *string `json:"combinedFieldType,omitempty"`
    Condition *string `json:"condition,omitempty"`
    Currency *bool `json:"currency,omitempty"`
    DateTimeFormat *string `json:"dateTimeFormat,omitempty"`
    DecimalPlaces *float64 `json:"decimalPlaces,omitempty"`
    Default *string `json:"default,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayType *AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum `json:"displayType,omitempty"`
    ExclusiveMaximum *bool `json:"exclusiveMaximum,omitempty"`
    ExclusiveMinimum *bool `json:"exclusiveMinimum,omitempty"`
    FalseText *string `json:"falseText,omitempty"`
    FontSize *float64 `json:"fontSize,omitempty"`
    Height *float64 `json:"height,omitempty"`
    Hidden *bool `json:"hidden,omitempty"`
    ID *float64 `json:"id,omitempty"`
    ImageGravity *AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum `json:"imageGravity,omitempty"`
    ImageScaleType *AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum `json:"imageScaleType,omitempty"`
    IncludeTime *bool `json:"includeTime,omitempty"`
    Integer *bool `json:"integer,omitempty"`
    InvertBooleanCondition *bool `json:"invertBooleanCondition,omitempty"`
    MaxLength *float64 `json:"maxLength,omitempty"`
    Maximum *float64 `json:"maximum,omitempty"`
    Metadata *string `json:"metadata,omitempty"`
    MinLength *float64 `json:"minLength,omitempty"`
    Minimum *float64 `json:"minimum,omitempty"`
    Multiline *bool `json:"multiline,omitempty"`
    MultilineLines *float64 `json:"multilineLines,omitempty"`
    Name string `json:"name"`
    NumberConditionRangeExclusiveMax *bool `json:"numberConditionRangeExclusiveMax,omitempty"`
    NumberConditionRangeExclusiveMin *bool `json:"numberConditionRangeExclusiveMin,omitempty"`
    NumberConditionRangeMax *float64 `json:"numberConditionRangeMax,omitempty"`
    NumberConditionRangeMin *float64 `json:"numberConditionRangeMin,omitempty"`
    NumberConditionType *AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum `json:"numberConditionType,omitempty"`
    Opacity *float64 `json:"opacity,omitempty"`
    OptionList *string `json:"optionList,omitempty"`
    Overflow *AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum `json:"overflow,omitempty"`
    Page float64 `json:"page"`
    QrcodeColor *string `json:"qrcodeColor,omitempty"`
    QrcodeColorFieldName *string `json:"qrcodeColorFieldName,omitempty"`
    QrcodeColorFieldRequired *bool `json:"qrcodeColorFieldRequired,omitempty"`
    Required *bool `json:"required,omitempty"`
    Rotation *float64 `json:"rotation,omitempty"`
    ShapeBorderColor *string `json:"shapeBorderColor,omitempty"`
    ShapeBorderColorFieldName *string `json:"shapeBorderColorFieldName,omitempty"`
    ShapeBorderColorFieldRequired *bool `json:"shapeBorderColorFieldRequired,omitempty"`
    ShapeBorderWidth *float64 `json:"shapeBorderWidth,omitempty"`
    ShapeFillColor *string `json:"shapeFillColor,omitempty"`
    ShapeFillColorFieldName *string `json:"shapeFillColorFieldName,omitempty"`
    ShapeFillColorFieldRequired *bool `json:"shapeFillColorFieldRequired,omitempty"`
    ShapeType *AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum `json:"shapeType,omitempty"`
    SignatureAllowDraw *bool `json:"signatureAllowDraw,omitempty"`
    SignatureAllowType *bool `json:"signatureAllowType,omitempty"`
    Static *bool `json:"static,omitempty"`
    Strikethrough *bool `json:"strikethrough,omitempty"`
    StringConditionType *AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum `json:"stringConditionType,omitempty"`
    Title *string `json:"title,omitempty"`
    TrueText *string `json:"trueText,omitempty"`
    Type *AddFieldsToTemplateAddFieldsDataFieldsTypeEnum `json:"type,omitempty"`
    Typeface *string `json:"typeface,omitempty"`
    Uppercase *bool `json:"uppercase,omitempty"`
    VAlignment *AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum `json:"vAlignment,omitempty"`
    Width *float64 `json:"width,omitempty"`
    X *float64 `json:"x,omitempty"`
    Y *float64 `json:"y,omitempty"`
    
}

type AddFieldsToTemplateAddFieldsData struct {
    Fields []AddFieldsToTemplateAddFieldsDataFields `json:"fields"`
    
}

type AddFieldsToTemplateSecurity struct {
    APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
    
}

type AddFieldsToTemplateRequest struct {
    PathParams AddFieldsToTemplatePathParams 
    Request AddFieldsToTemplateAddFieldsData `request:"mediaType=application/json"`
    Security AddFieldsToTemplateSecurity 
    
}


type AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum string

const (
    AddFieldsToTemplateAddFieldsTemplateResponseStatusEnumSuccess AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum = "success"
AddFieldsToTemplateAddFieldsTemplateResponseStatusEnumError AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum = "error"
)


type AddFieldsToTemplateAddFieldsTemplateResponse struct {
    Errors []string `json:"errors,omitempty"`
    NewFieldIds []int64 `json:"new_field_ids,omitempty"`
    Status AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum `json:"status"`
    
}

type AddFieldsToTemplateResponse struct {
    ContentType string 
    StatusCode int64 
    AddFieldsTemplateResponse *AddFieldsToTemplateAddFieldsTemplateResponse 
    
}

