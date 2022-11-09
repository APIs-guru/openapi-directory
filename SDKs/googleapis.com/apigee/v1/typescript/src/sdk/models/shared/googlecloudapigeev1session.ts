import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1Session
/** 
 * Session carries the debug session id and its creation time.
**/
export class GoogleCloudApigeeV1Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=timestampMs" })
  timestampMs?: string;
}
