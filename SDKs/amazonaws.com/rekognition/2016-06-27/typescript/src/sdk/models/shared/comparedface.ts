import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Emotions", elemType: shared.Emotion })
  emotions?: Emotion[];

  @Metadata({ data: "json, name=Landmarks", elemType: shared.Landmark })
  landmarks?: Landmark[];

  @Metadata({ data: "json, name=Pose" })
  pose?: Pose;

  @Metadata({ data: "json, name=Quality" })
  quality?: ImageQuality;

  @Metadata({ data: "json, name=Smile" })
  smile?: Smile;
}
