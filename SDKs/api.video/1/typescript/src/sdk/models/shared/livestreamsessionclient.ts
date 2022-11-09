import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LiveStreamSessionClient
/** 
 * What kind of browser the viewer is using for the live stream session.
**/
export class LiveStreamSessionClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
