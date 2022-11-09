import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminologyDataFormatEnum } from "./terminologydataformatenum";


// TerminologyData
/** 
 * The data associated with the custom terminology.
**/
export class TerminologyData extends SpeakeasyBase {
  @Metadata({ data: "json, name=File" })
  file: string;

  @Metadata({ data: "json, name=Format" })
  format: TerminologyDataFormatEnum;
}
