import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoContent
/** 
 * Video content for a creative.
**/
export class VideoContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videoUrl" })
  videoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=videoVastXml" })
  videoVastXml?: string;
}
