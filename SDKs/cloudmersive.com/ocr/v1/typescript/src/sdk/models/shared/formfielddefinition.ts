import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FormFieldDefinition
/** 
 * Definition of a form field for OCR data extraction from images
**/
export class FormFieldDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowNumericDigits" })
  allowNumericDigits?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AlternateAnchor" })
  alternateAnchor?: string;

  @SpeakeasyMetadata({ data: "json, name=AnchorMode" })
  anchorMode?: string;

  @SpeakeasyMetadata({ data: "json, name=BottomAnchor" })
  bottomAnchor?: string;

  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=FieldID" })
  fieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=HorizontalAlignmentType" })
  horizontalAlignmentType?: string;

  @SpeakeasyMetadata({ data: "json, name=Ignore" })
  ignore?: string[];

  @SpeakeasyMetadata({ data: "json, name=LeftAnchor" })
  leftAnchor?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumCharacterCount" })
  minimumCharacterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetDigitCount" })
  targetDigitCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetFieldHeight_Relative" })
  targetFieldHeightRelative?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetFieldHorizontalAdjustment" })
  targetFieldHorizontalAdjustment?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetFieldVerticalAdjustment" })
  targetFieldVerticalAdjustment?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetFieldWidth_Relative" })
  targetFieldWidthRelative?: number;

  @SpeakeasyMetadata({ data: "json, name=TopAnchor" })
  topAnchor?: string;

  @SpeakeasyMetadata({ data: "json, name=VerticalAlignmentType" })
  verticalAlignmentType?: string;
}
