import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1KeyValueMap
/** 
 * Collection of key/value string pairs.
**/
export class GoogleCloudApigeeV1KeyValueMap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
