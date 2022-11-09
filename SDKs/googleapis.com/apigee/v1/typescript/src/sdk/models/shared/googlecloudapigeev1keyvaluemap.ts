import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1KeyValueMap
/** 
 * Collection of key/value string pairs.
**/
export class GoogleCloudApigeeV1KeyValueMap extends SpeakeasyBase {
  @Metadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
