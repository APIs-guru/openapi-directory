import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Face } from "./face";


// FaceMatch
/** 
 * Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.
**/
export class FaceMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=Face" })
  face?: Face;

  @Metadata({ data: "json, name=Similarity" })
  similarity?: number;
}
