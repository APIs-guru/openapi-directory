import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeverityLabelEnum } from "./severitylabelenum";



// FindingProviderSeverity
/** 
 * The severity assigned to the finding by the finding provider.
**/
export class FindingProviderSeverity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: SeverityLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=Original" })
  original?: string;
}
