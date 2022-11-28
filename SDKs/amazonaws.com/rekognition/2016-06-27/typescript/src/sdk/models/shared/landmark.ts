import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandmarkTypeEnum } from "./landmarktypeenum";



// Landmark
/** 
 * Indicates the location of the landmark on the face.
**/
export class Landmark extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: LandmarkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=X" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=Y" })
  y?: number;
}
