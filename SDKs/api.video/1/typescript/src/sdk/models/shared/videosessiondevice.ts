import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoSessionDevice
/** 
 * What type of device the user is on when in the video session.
**/
export class VideoSessionDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;
}
