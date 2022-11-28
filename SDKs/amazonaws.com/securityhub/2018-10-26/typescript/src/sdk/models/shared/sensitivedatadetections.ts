import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Occurrences } from "./occurrences";



// SensitiveDataDetections
/** 
 * The list of detected instances of sensitive data.
**/
export class SensitiveDataDetections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Occurrences" })
  occurrences?: Occurrences;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
