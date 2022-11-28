import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportRowDimensionValue
/** 
 * Representation of a dimension value.
**/
export class ReportRowDimensionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayLabel" })
  displayLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
