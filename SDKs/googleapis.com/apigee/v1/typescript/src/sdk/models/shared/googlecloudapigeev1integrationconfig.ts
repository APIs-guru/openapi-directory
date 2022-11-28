import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1IntegrationConfig
/** 
 * Configuration for the Integration add-on.
**/
export class GoogleCloudApigeeV1IntegrationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
