import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Pose
/** 
 * Indicates the pose of the face as determined by its pitch, roll, and yaw.
**/
export class Pose extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pitch" })
  pitch?: number;

  @Metadata({ data: "json, name=Roll" })
  roll?: number;

  @Metadata({ data: "json, name=Yaw" })
  yaw?: number;
}
