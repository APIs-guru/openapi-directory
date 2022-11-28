import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1ConfigVersion
/** 
 * Version of the API proxy configuration schema. Currently, only 4.0 is supported.
**/
export class GoogleCloudApigeeV1ConfigVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=minorVersion" })
  minorVersion?: number;
}
