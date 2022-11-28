import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1AdvancedApiOpsConfig
/** 
 * Configuration for the Advanced API Ops add-on.
**/
export class GoogleCloudApigeeV1AdvancedApiOpsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
