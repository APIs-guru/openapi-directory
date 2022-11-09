import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FormFieldDefinition
/** 
 * Definition of a form field for OCR data extraction from images
**/
export class FormFieldDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowNumericDigits" })
  allowNumericDigits?: boolean;

  @Metadata({ data: "json, name=AlternateAnchor" })
  alternateAnchor?: string;

  @Metadata({ data: "json, name=AnchorMode" })
  anchorMode?: string;

  @Metadata({ data: "json, name=BottomAnchor" })
  bottomAnchor?: string;

  @Metadata({ data: "json, name=DataType" })
  dataType?: string;

  @Metadata({ data: "json, name=FieldID" })
  fieldId?: string;

  @Metadata({ data: "json, name=HorizontalAlignmentType" })
  horizontalAlignmentType?: string;

  @Metadata({ data: "json, name=Ignore" })
  ignore?: string[];

  @Metadata({ data: "json, name=LeftAnchor" })
  leftAnchor?: string;

  @Metadata({ data: "json, name=MinimumCharacterCount" })
  minimumCharacterCount?: number;

  @Metadata({ data: "json, name=Options" })
  options?: string;

  @Metadata({ data: "json, name=TargetDigitCount" })
  targetDigitCount?: number;

  @Metadata({ data: "json, name=TargetFieldHeight_Relative" })
  targetFieldHeightRelative?: number;

  @Metadata({ data: "json, name=TargetFieldHorizontalAdjustment" })
  targetFieldHorizontalAdjustment?: number;

  @Metadata({ data: "json, name=TargetFieldVerticalAdjustment" })
  targetFieldVerticalAdjustment?: number;

  @Metadata({ data: "json, name=TargetFieldWidth_Relative" })
  targetFieldWidthRelative?: number;

  @Metadata({ data: "json, name=TopAnchor" })
  topAnchor?: string;

  @Metadata({ data: "json, name=VerticalAlignmentType" })
  verticalAlignmentType?: string;
}
