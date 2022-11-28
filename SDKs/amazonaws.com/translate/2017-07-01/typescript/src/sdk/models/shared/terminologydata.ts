import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TerminologyDataFormatEnum } from "./terminologydataformatenum";



// TerminologyData
/** 
 * The data associated with the custom terminology.
**/
export class TerminologyData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=File" })
  file: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format: TerminologyDataFormatEnum;
}
