import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparedFace } from "./comparedface";
import { KnownGender } from "./knowngender";



// Celebrity
/** 
 * Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.
**/
export class Celebrity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Face" })
  face?: ComparedFace;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=KnownGender" })
  knownGender?: KnownGender;

  @SpeakeasyMetadata({ data: "json, name=MatchConfidence" })
  matchConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Urls" })
  urls?: string[];
}
