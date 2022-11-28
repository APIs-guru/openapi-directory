import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Occurrences } from "./occurrences";



// CustomDataIdentifiersDetections
/** 
 * The list of detected instances of sensitive data.
**/
export class CustomDataIdentifiersDetections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Occurrences" })
  occurrences?: Occurrences;
}
