import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Face } from "./face";



// FaceMatch
/** 
 * Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.
**/
export class FaceMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Face" })
  face?: Face;

  @SpeakeasyMetadata({ data: "json, name=Similarity" })
  similarity?: number;
}
