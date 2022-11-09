import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComparedFace } from "./comparedface";
import { KnownGender } from "./knowngender";


// Celebrity
/** 
 * Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.
**/
export class Celebrity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Face" })
  face?: ComparedFace;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=KnownGender" })
  knownGender?: KnownGender;

  @Metadata({ data: "json, name=MatchConfidence" })
  matchConfidence?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Urls" })
  urls?: string[];
}
