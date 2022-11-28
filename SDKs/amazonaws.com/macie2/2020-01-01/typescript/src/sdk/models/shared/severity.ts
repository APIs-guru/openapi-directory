import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeverityDescriptionEnum } from "./severitydescriptionenum";



// Severity
/** 
 * Provides the numerical and qualitative representations of a finding's severity.
**/
export class Severity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: SeverityDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
