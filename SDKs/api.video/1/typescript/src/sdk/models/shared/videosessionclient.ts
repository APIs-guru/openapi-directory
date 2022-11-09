import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoSessionClient
/** 
 * What kind of browser the viewer is using for the video session.
**/
export class VideoSessionClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
