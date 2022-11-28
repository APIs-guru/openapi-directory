import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Pose
/** 
 * Indicates the pose of the face as determined by its pitch, roll, and yaw.
**/
export class Pose extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pitch" })
  pitch?: number;

  @SpeakeasyMetadata({ data: "json, name=Roll" })
  roll?: number;

  @SpeakeasyMetadata({ data: "json, name=Yaw" })
  yaw?: number;
}
