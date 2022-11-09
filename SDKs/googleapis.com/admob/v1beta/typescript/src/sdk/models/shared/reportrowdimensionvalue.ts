import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportRowDimensionValue
/** 
 * Representation of a dimension value.
**/
export class ReportRowDimensionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayLabel" })
  displayLabel?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
