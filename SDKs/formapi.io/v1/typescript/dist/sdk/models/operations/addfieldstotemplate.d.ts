import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFieldsToTemplatePathParams extends SpeakeasyBase {
    templateId: string;
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum {
    Left = "left",
    Center = "center",
    Right = "right"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum {
    AndNumber10003 = "&#10003;",
    AndNumber10004 = "&#10004;",
    AndNumber10006 = "&#10006;",
    AndNumber10007 = "&#10007;",
    AndNumber10008 = "&#10008;"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum {
    Text = "text",
    Check = "check",
    Qrcode = "qrcode",
    Barcode = "barcode",
    Image = "image",
    Shape = "shape"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum {
    NorthWest = "NorthWest",
    North = "North",
    NorthEast = "NorthEast",
    West = "West",
    Center = "Center",
    East = "East",
    SouthWest = "SouthWest",
    South = "South",
    SouthEast = "SouthEast"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum {
    Fit = "fit",
    Fill = "fill",
    Stretch = "stretch"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum {
    Equals = "equals",
    Range = "range",
    Gte = "gte",
    Gt = "gt",
    Lte = "lte",
    Lt = "lt"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum {
    ShrinkToFit = "shrink_to_fit",
    Truncate = "truncate"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum {
    Square = "square",
    Rectangle = "rectangle",
    Circle = "circle",
    Ellipse = "ellipse"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum {
    Equals = "equals",
    Contains = "contains",
    StartsWith = "starts_with",
    EndsWith = "ends_with",
    Regex = "regex"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsTypeEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    Date = "date",
    Address = "address",
    Country = "country",
    Email = "email",
    Url = "url",
    Image = "image",
    Signature = "signature",
    Barcode = "barcode",
    Combined = "combined"
}
export declare enum AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum {
    Bottom = "bottom",
    Center = "center",
    Top = "top"
}
export declare class AddFieldsToTemplateAddFieldsDataFields extends SpeakeasyBase {
    alignment?: AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum;
    autoCalculateMaxLength?: boolean;
    backgroundColor?: string;
    backgroundColorFieldName?: string;
    backgroundColorFieldRequired?: boolean;
    barcodeSymbology?: string;
    bold?: boolean;
    characterSpacing?: number;
    checkCharacter?: AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum;
    checkColor?: string;
    checkColorFieldName?: string;
    checkColorFieldRequired?: boolean;
    color?: string;
    colorFieldName?: string;
    colorFieldRequired?: boolean;
    comb?: boolean;
    combNumberOfCells?: number;
    combValueOffset?: number;
    combinedFieldFormat?: string;
    combinedFieldNames?: string;
    combinedFieldSeparator?: string;
    combinedFieldType?: string;
    condition?: string;
    currency?: boolean;
    dateTimeFormat?: string;
    decimalPlaces?: number;
    default?: string;
    description?: string;
    displayType?: AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum;
    exclusiveMaximum?: boolean;
    exclusiveMinimum?: boolean;
    falseText?: string;
    fontSize?: number;
    height?: number;
    hidden?: boolean;
    id?: number;
    imageGravity?: AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum;
    imageScaleType?: AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum;
    includeTime?: boolean;
    integer?: boolean;
    invertBooleanCondition?: boolean;
    maxLength?: number;
    maximum?: number;
    metadata?: string;
    minLength?: number;
    minimum?: number;
    multiline?: boolean;
    multilineLines?: number;
    name: string;
    numberConditionRangeExclusiveMax?: boolean;
    numberConditionRangeExclusiveMin?: boolean;
    numberConditionRangeMax?: number;
    numberConditionRangeMin?: number;
    numberConditionType?: AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum;
    opacity?: number;
    optionList?: string;
    overflow?: AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum;
    page: number;
    qrcodeColor?: string;
    qrcodeColorFieldName?: string;
    qrcodeColorFieldRequired?: boolean;
    required?: boolean;
    rotation?: number;
    shapeBorderColor?: string;
    shapeBorderColorFieldName?: string;
    shapeBorderColorFieldRequired?: boolean;
    shapeBorderWidth?: number;
    shapeFillColor?: string;
    shapeFillColorFieldName?: string;
    shapeFillColorFieldRequired?: boolean;
    shapeType?: AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum;
    signatureAllowDraw?: boolean;
    signatureAllowType?: boolean;
    static?: boolean;
    strikethrough?: boolean;
    stringConditionType?: AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum;
    title?: string;
    trueText?: string;
    type?: AddFieldsToTemplateAddFieldsDataFieldsTypeEnum;
    typeface?: string;
    uppercase?: boolean;
    vAlignment?: AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum;
    width?: number;
    x?: number;
    y?: number;
}
export declare class AddFieldsToTemplateAddFieldsData extends SpeakeasyBase {
    fields: AddFieldsToTemplateAddFieldsDataFields[];
}
export declare class AddFieldsToTemplateSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class AddFieldsToTemplateAddFieldsTemplateResponse extends SpeakeasyBase {
    errors?: string[];
    newFieldIds?: number[];
    status: AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum;
}
export declare class AddFieldsToTemplateRequest extends SpeakeasyBase {
    pathParams: AddFieldsToTemplatePathParams;
    request: AddFieldsToTemplateAddFieldsData;
    security: AddFieldsToTemplateSecurity;
}
export declare class AddFieldsToTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addFieldsTemplateResponse?: AddFieldsToTemplateAddFieldsTemplateResponse;
}
