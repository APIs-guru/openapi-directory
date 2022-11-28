import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LiveStreamSessionClient
/** 
 * What kind of browser the viewer is using for the live stream session.
**/
export class LiveStreamSessionClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
