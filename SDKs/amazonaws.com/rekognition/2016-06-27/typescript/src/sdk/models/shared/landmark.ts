import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LandmarkTypeEnum } from "./landmarktypeenum";


// Landmark
/** 
 * Indicates the location of the landmark on the face.
**/
export class Landmark extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: LandmarkTypeEnum;

  @Metadata({ data: "json, name=X" })
  x?: number;

  @Metadata({ data: "json, name=Y" })
  y?: number;
}
