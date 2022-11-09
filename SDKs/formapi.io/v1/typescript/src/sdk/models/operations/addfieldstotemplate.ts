import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddFieldsToTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}

export enum AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum {
    Left = "left"
,    Center = "center"
,    Right = "right"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum {
    AndNumber10003 = "&#10003;"
,    AndNumber10004 = "&#10004;"
,    AndNumber10006 = "&#10006;"
,    AndNumber10007 = "&#10007;"
,    AndNumber10008 = "&#10008;"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum {
    Text = "text"
,    Check = "check"
,    Qrcode = "qrcode"
,    Barcode = "barcode"
,    Image = "image"
,    Shape = "shape"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum {
    NorthWest = "NorthWest"
,    North = "North"
,    NorthEast = "NorthEast"
,    West = "West"
,    Center = "Center"
,    East = "East"
,    SouthWest = "SouthWest"
,    South = "South"
,    SouthEast = "SouthEast"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum {
    Fit = "fit"
,    Fill = "fill"
,    Stretch = "stretch"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum {
    Equals = "equals"
,    Range = "range"
,    Gte = "gte"
,    Gt = "gt"
,    Lte = "lte"
,    Lt = "lt"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum {
    ShrinkToFit = "shrink_to_fit"
,    Truncate = "truncate"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum {
    Square = "square"
,    Rectangle = "rectangle"
,    Circle = "circle"
,    Ellipse = "ellipse"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum {
    Equals = "equals"
,    Contains = "contains"
,    StartsWith = "starts_with"
,    EndsWith = "ends_with"
,    Regex = "regex"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsTypeEnum {
    String = "string"
,    Number = "number"
,    Boolean = "boolean"
,    Date = "date"
,    Address = "address"
,    Country = "country"
,    Email = "email"
,    Url = "url"
,    Image = "image"
,    Signature = "signature"
,    Barcode = "barcode"
,    Combined = "combined"
}

export enum AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum {
    Bottom = "bottom"
,    Center = "center"
,    Top = "top"
}


export class AddFieldsToTemplateAddFieldsDataFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=alignment" })
  alignment?: AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum;

  @Metadata({ data: "json, name=autoCalculateMaxLength" })
  autoCalculateMaxLength?: boolean;

  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=backgroundColorFieldName" })
  backgroundColorFieldName?: string;

  @Metadata({ data: "json, name=backgroundColorFieldRequired" })
  backgroundColorFieldRequired?: boolean;

  @Metadata({ data: "json, name=barcodeSymbology" })
  barcodeSymbology?: string;

  @Metadata({ data: "json, name=bold" })
  bold?: boolean;

  @Metadata({ data: "json, name=characterSpacing" })
  characterSpacing?: number;

  @Metadata({ data: "json, name=checkCharacter" })
  checkCharacter?: AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum;

  @Metadata({ data: "json, name=checkColor" })
  checkColor?: string;

  @Metadata({ data: "json, name=checkColorFieldName" })
  checkColorFieldName?: string;

  @Metadata({ data: "json, name=checkColorFieldRequired" })
  checkColorFieldRequired?: boolean;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=colorFieldName" })
  colorFieldName?: string;

  @Metadata({ data: "json, name=colorFieldRequired" })
  colorFieldRequired?: boolean;

  @Metadata({ data: "json, name=comb" })
  comb?: boolean;

  @Metadata({ data: "json, name=combNumberOfCells" })
  combNumberOfCells?: number;

  @Metadata({ data: "json, name=combValueOffset" })
  combValueOffset?: number;

  @Metadata({ data: "json, name=combinedFieldFormat" })
  combinedFieldFormat?: string;

  @Metadata({ data: "json, name=combinedFieldNames" })
  combinedFieldNames?: string;

  @Metadata({ data: "json, name=combinedFieldSeparator" })
  combinedFieldSeparator?: string;

  @Metadata({ data: "json, name=combinedFieldType" })
  combinedFieldType?: string;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: boolean;

  @Metadata({ data: "json, name=dateTimeFormat" })
  dateTimeFormat?: string;

  @Metadata({ data: "json, name=decimalPlaces" })
  decimalPlaces?: number;

  @Metadata({ data: "json, name=default" })
  default?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayType" })
  displayType?: AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum;

  @Metadata({ data: "json, name=exclusiveMaximum" })
  exclusiveMaximum?: boolean;

  @Metadata({ data: "json, name=exclusiveMinimum" })
  exclusiveMinimum?: boolean;

  @Metadata({ data: "json, name=falseText" })
  falseText?: string;

  @Metadata({ data: "json, name=fontSize" })
  fontSize?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=imageGravity" })
  imageGravity?: AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum;

  @Metadata({ data: "json, name=imageScaleType" })
  imageScaleType?: AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum;

  @Metadata({ data: "json, name=includeTime" })
  includeTime?: boolean;

  @Metadata({ data: "json, name=integer" })
  integer?: boolean;

  @Metadata({ data: "json, name=invertBooleanCondition" })
  invertBooleanCondition?: boolean;

  @Metadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "json, name=maximum" })
  maximum?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;

  @Metadata({ data: "json, name=minimum" })
  minimum?: number;

  @Metadata({ data: "json, name=multiline" })
  multiline?: boolean;

  @Metadata({ data: "json, name=multilineLines" })
  multilineLines?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=numberConditionRangeExclusiveMax" })
  numberConditionRangeExclusiveMax?: boolean;

  @Metadata({ data: "json, name=numberConditionRangeExclusiveMin" })
  numberConditionRangeExclusiveMin?: boolean;

  @Metadata({ data: "json, name=numberConditionRangeMax" })
  numberConditionRangeMax?: number;

  @Metadata({ data: "json, name=numberConditionRangeMin" })
  numberConditionRangeMin?: number;

  @Metadata({ data: "json, name=numberConditionType" })
  numberConditionType?: AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum;

  @Metadata({ data: "json, name=opacity" })
  opacity?: number;

  @Metadata({ data: "json, name=optionList" })
  optionList?: string;

  @Metadata({ data: "json, name=overflow" })
  overflow?: AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=qrcodeColor" })
  qrcodeColor?: string;

  @Metadata({ data: "json, name=qrcodeColorFieldName" })
  qrcodeColorFieldName?: string;

  @Metadata({ data: "json, name=qrcodeColorFieldRequired" })
  qrcodeColorFieldRequired?: boolean;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=rotation" })
  rotation?: number;

  @Metadata({ data: "json, name=shapeBorderColor" })
  shapeBorderColor?: string;

  @Metadata({ data: "json, name=shapeBorderColorFieldName" })
  shapeBorderColorFieldName?: string;

  @Metadata({ data: "json, name=shapeBorderColorFieldRequired" })
  shapeBorderColorFieldRequired?: boolean;

  @Metadata({ data: "json, name=shapeBorderWidth" })
  shapeBorderWidth?: number;

  @Metadata({ data: "json, name=shapeFillColor" })
  shapeFillColor?: string;

  @Metadata({ data: "json, name=shapeFillColorFieldName" })
  shapeFillColorFieldName?: string;

  @Metadata({ data: "json, name=shapeFillColorFieldRequired" })
  shapeFillColorFieldRequired?: boolean;

  @Metadata({ data: "json, name=shapeType" })
  shapeType?: AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum;

  @Metadata({ data: "json, name=signatureAllowDraw" })
  signatureAllowDraw?: boolean;

  @Metadata({ data: "json, name=signatureAllowType" })
  signatureAllowType?: boolean;

  @Metadata({ data: "json, name=static" })
  static?: boolean;

  @Metadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @Metadata({ data: "json, name=stringConditionType" })
  stringConditionType?: AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=trueText" })
  trueText?: string;

  @Metadata({ data: "json, name=type" })
  type?: AddFieldsToTemplateAddFieldsDataFieldsTypeEnum;

  @Metadata({ data: "json, name=typeface" })
  typeface?: string;

  @Metadata({ data: "json, name=uppercase" })
  uppercase?: boolean;

  @Metadata({ data: "json, name=vAlignment" })
  vAlignment?: AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum;

  @Metadata({ data: "json, name=width" })
  width?: number;

  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;
}


export class AddFieldsToTemplateAddFieldsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: operations.AddFieldsToTemplateAddFieldsDataFields })
  fields: AddFieldsToTemplateAddFieldsDataFields[];
}


export class AddFieldsToTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class AddFieldsToTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddFieldsToTemplatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddFieldsToTemplateAddFieldsData;

  @Metadata()
  security: AddFieldsToTemplateSecurity;
}

export enum AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum {
    Success = "success"
,    Error = "error"
}


export class AddFieldsToTemplateAddFieldsTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=new_field_ids" })
  newFieldIds?: number[];

  @Metadata({ data: "json, name=status" })
  status: AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum;
}


export class AddFieldsToTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addFieldsTemplateResponse?: AddFieldsToTemplateAddFieldsTemplateResponse;
}
