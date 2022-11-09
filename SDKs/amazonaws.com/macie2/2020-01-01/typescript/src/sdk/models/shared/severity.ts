import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SeverityDescriptionEnum } from "./severitydescriptionenum";


// Severity
/** 
 * Provides the numerical and qualitative representations of a finding's severity.
**/
export class Severity extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: SeverityDescriptionEnum;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
