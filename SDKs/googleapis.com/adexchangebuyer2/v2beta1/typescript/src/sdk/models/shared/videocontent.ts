import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoContent
/** 
 * Video content for a creative.
**/
export class VideoContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=videoUrl" })
  videoUrl?: string;

  @Metadata({ data: "json, name=videoVastXml" })
  videoVastXml?: string;
}
