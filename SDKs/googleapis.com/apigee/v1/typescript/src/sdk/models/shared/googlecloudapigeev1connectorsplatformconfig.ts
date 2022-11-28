import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1ConnectorsPlatformConfigInput
/** 
 * Configuration for the Connectors Platform add-on.
**/
export class GoogleCloudApigeeV1ConnectorsPlatformConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
