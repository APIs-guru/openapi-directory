import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SeverityLabelEnum } from "./severitylabelenum";


// FindingProviderSeverity
/** 
 * The severity assigned to the finding by the finding provider.
**/
export class FindingProviderSeverity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Label" })
  label?: SeverityLabelEnum;

  @Metadata({ data: "json, name=Original" })
  original?: string;
}
