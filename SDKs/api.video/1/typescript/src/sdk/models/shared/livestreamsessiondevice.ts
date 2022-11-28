import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LiveStreamSessionDevice
/** 
 * What type of device the user is on when in the live stream session.
**/
export class LiveStreamSessionDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;
}
