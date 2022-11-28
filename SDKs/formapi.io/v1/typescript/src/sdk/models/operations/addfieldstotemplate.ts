import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddFieldsToTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}

export enum AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum {
    Left = "left",
    Center = "center",
    Right = "right"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum {
    AndNumber10003 = "&#10003;",
    AndNumber10004 = "&#10004;",
    AndNumber10006 = "&#10006;",
    AndNumber10007 = "&#10007;",
    AndNumber10008 = "&#10008;"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum {
    Text = "text",
    Check = "check",
    Qrcode = "qrcode",
    Barcode = "barcode",
    Image = "image",
    Shape = "shape"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum {
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

export enum AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum {
    Fit = "fit",
    Fill = "fill",
    Stretch = "stretch"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum {
    Equals = "equals",
    Range = "range",
    Gte = "gte",
    Gt = "gt",
    Lte = "lte",
    Lt = "lt"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum {
    ShrinkToFit = "shrink_to_fit",
    Truncate = "truncate"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum {
    Square = "square",
    Rectangle = "rectangle",
    Circle = "circle",
    Ellipse = "ellipse"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum {
    Equals = "equals",
    Contains = "contains",
    StartsWith = "starts_with",
    EndsWith = "ends_with",
    Regex = "regex"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsTypeEnum {
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

export enum AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum {
    Bottom = "bottom",
    Center = "center",
    Top = "top"
}


export class AddFieldsToTemplateAddFieldsDataFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alignment" })
  alignment?: AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=autoCalculateMaxLength" })
  autoCalculateMaxLength?: boolean;

  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=backgroundColorFieldName" })
  backgroundColorFieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=backgroundColorFieldRequired" })
  backgroundColorFieldRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=barcodeSymbology" })
  barcodeSymbology?: string;

  @SpeakeasyMetadata({ data: "json, name=bold" })
  bold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=characterSpacing" })
  characterSpacing?: number;

  @SpeakeasyMetadata({ data: "json, name=checkCharacter" })
  checkCharacter?: AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum;

  @SpeakeasyMetadata({ data: "json, name=checkColor" })
  checkColor?: string;

  @SpeakeasyMetadata({ data: "json, name=checkColorFieldName" })
  checkColorFieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=checkColorFieldRequired" })
  checkColorFieldRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=colorFieldName" })
  colorFieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=colorFieldRequired" })
  colorFieldRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comb" })
  comb?: boolean;

  @SpeakeasyMetadata({ data: "json, name=combNumberOfCells" })
  combNumberOfCells?: number;

  @SpeakeasyMetadata({ data: "json, name=combValueOffset" })
  combValueOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=combinedFieldFormat" })
  combinedFieldFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=combinedFieldNames" })
  combinedFieldNames?: string;

  @SpeakeasyMetadata({ data: "json, name=combinedFieldSeparator" })
  combinedFieldSeparator?: string;

  @SpeakeasyMetadata({ data: "json, name=combinedFieldType" })
  combinedFieldType?: string;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dateTimeFormat" })
  dateTimeFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=decimalPlaces" })
  decimalPlaces?: number;

  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayType" })
  displayType?: AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=exclusiveMaximum" })
  exclusiveMaximum?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exclusiveMinimum" })
  exclusiveMinimum?: boolean;

  @SpeakeasyMetadata({ data: "json, name=falseText" })
  falseText?: string;

  @SpeakeasyMetadata({ data: "json, name=fontSize" })
  fontSize?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=imageGravity" })
  imageGravity?: AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum;

  @SpeakeasyMetadata({ data: "json, name=imageScaleType" })
  imageScaleType?: AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=includeTime" })
  includeTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=integer" })
  integer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=invertBooleanCondition" })
  invertBooleanCondition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "json, name=maximum" })
  maximum?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: number;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: number;

  @SpeakeasyMetadata({ data: "json, name=multiline" })
  multiline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=multilineLines" })
  multilineLines?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=numberConditionRangeExclusiveMax" })
  numberConditionRangeExclusiveMax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=numberConditionRangeExclusiveMin" })
  numberConditionRangeExclusiveMin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=numberConditionRangeMax" })
  numberConditionRangeMax?: number;

  @SpeakeasyMetadata({ data: "json, name=numberConditionRangeMin" })
  numberConditionRangeMin?: number;

  @SpeakeasyMetadata({ data: "json, name=numberConditionType" })
  numberConditionType?: AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=opacity" })
  opacity?: number;

  @SpeakeasyMetadata({ data: "json, name=optionList" })
  optionList?: string;

  @SpeakeasyMetadata({ data: "json, name=overflow" })
  overflow?: AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=qrcodeColor" })
  qrcodeColor?: string;

  @SpeakeasyMetadata({ data: "json, name=qrcodeColorFieldName" })
  qrcodeColorFieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=qrcodeColorFieldRequired" })
  qrcodeColorFieldRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rotation" })
  rotation?: number;

  @SpeakeasyMetadata({ data: "json, name=shapeBorderColor" })
  shapeBorderColor?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeBorderColorFieldName" })
  shapeBorderColorFieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeBorderColorFieldRequired" })
  shapeBorderColorFieldRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shapeBorderWidth" })
  shapeBorderWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=shapeFillColor" })
  shapeFillColor?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeFillColorFieldName" })
  shapeFillColorFieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeFillColorFieldRequired" })
  shapeFillColorFieldRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shapeType" })
  shapeType?: AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=signatureAllowDraw" })
  signatureAllowDraw?: boolean;

  @SpeakeasyMetadata({ data: "json, name=signatureAllowType" })
  signatureAllowType?: boolean;

  @SpeakeasyMetadata({ data: "json, name=static" })
  static?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stringConditionType" })
  stringConditionType?: AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=trueText" })
  trueText?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AddFieldsToTemplateAddFieldsDataFieldsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=typeface" })
  typeface?: string;

  @SpeakeasyMetadata({ data: "json, name=uppercase" })
  uppercase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vAlignment" })
  vAlignment?: AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;

  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;
}


export class AddFieldsToTemplateAddFieldsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: AddFieldsToTemplateAddFieldsDataFields })
  fields: AddFieldsToTemplateAddFieldsDataFields[];
}


export class AddFieldsToTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum {
    Success = "success",
    Error = "error"
}


export class AddFieldsToTemplateAddFieldsTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=new_field_ids" })
  newFieldIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum;
}


export class AddFieldsToTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddFieldsToTemplatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddFieldsToTemplateAddFieldsData;

  @SpeakeasyMetadata()
  security: AddFieldsToTemplateSecurity;
}


export class AddFieldsToTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addFieldsTemplateResponse?: AddFieldsToTemplateAddFieldsTemplateResponse;
}
