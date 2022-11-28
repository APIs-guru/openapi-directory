import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";



export class GoogleCloudApigeeV1Attributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute", elemType: GoogleCloudApigeeV1Attribute })
  attribute?: GoogleCloudApigeeV1Attribute[];
}
