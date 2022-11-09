import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1ConfigVersion
/** 
 * Version of the API proxy configuration schema. Currently, only 4.0 is supported.
**/
export class GoogleCloudApigeeV1ConfigVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=majorVersion" })
  majorVersion?: number;

  @Metadata({ data: "json, name=minorVersion" })
  minorVersion?: number;
}
