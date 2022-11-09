import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LiveStreamSessionDevice
/** 
 * What type of device the user is on when in the live stream session.
**/
export class LiveStreamSessionDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;
}
