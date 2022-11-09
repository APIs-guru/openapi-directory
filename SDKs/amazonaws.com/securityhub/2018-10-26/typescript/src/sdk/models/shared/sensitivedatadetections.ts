import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Occurrences } from "./occurrences";


// SensitiveDataDetections
/** 
 * The list of detected instances of sensitive data.
**/
export class SensitiveDataDetections extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Occurrences" })
  occurrences?: Occurrences;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
