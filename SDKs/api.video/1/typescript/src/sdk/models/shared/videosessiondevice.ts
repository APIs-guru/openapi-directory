import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoSessionDevice
/** 
 * What type of device the user is on when in the video session.
**/
export class VideoSessionDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;
}
