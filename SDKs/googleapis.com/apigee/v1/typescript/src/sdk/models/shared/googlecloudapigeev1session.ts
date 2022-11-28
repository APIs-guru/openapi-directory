import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1Session
/** 
 * Session carries the debug session id and its creation time.
**/
export class GoogleCloudApigeeV1Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampMs" })
  timestampMs?: string;
}
