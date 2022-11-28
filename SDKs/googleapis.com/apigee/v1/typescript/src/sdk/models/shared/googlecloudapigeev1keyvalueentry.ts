import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1KeyValueEntry
/** 
 * Key value map pair where the value represents the data associated with the corresponding key. **Note**: Supported for Apigee hybrid 1.8.x and higher.
**/
export class GoogleCloudApigeeV1KeyValueEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
