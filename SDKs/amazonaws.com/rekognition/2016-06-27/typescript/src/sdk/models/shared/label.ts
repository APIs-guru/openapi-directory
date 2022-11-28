import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
import { Parent } from "./parent";



// Label
/** 
 * <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p>
**/
export class Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Instances", elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Parents", elemType: Parent })
  parents?: Parent[];
}
