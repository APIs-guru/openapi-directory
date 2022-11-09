import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Occurrences } from "./occurrences";


// CustomDataIdentifiersDetections
/** 
 * The list of detected instances of sensitive data.
**/
export class CustomDataIdentifiersDetections extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Occurrences" })
  occurrences?: Occurrences;
}
