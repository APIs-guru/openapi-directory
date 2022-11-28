import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { Emotion } from "./emotion";
import { Landmark } from "./landmark";
import { Pose } from "./pose";
import { ImageQuality } from "./imagequality";
import { Smile } from "./smile";



// ComparedFace
/** 
 * Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.
**/
export class ComparedFace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Emotions", elemType: Emotion })
  emotions?: Emotion[];

  @SpeakeasyMetadata({ data: "json, name=Landmarks", elemType: Landmark })
  landmarks?: Landmark[];

  @SpeakeasyMetadata({ data: "json, name=Pose" })
  pose?: Pose;

  @SpeakeasyMetadata({ data: "json, name=Quality" })
  quality?: ImageQuality;

  @SpeakeasyMetadata({ data: "json, name=Smile" })
  smile?: Smile;
}
