import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1ApiSecurityConfigInput
/** 
 * Configurations of the API Security add-on.
**/
export class GoogleCloudApigeeV1ApiSecurityConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
