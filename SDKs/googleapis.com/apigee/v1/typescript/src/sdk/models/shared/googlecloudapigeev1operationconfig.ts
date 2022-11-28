import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1Operation } from "./googlecloudapigeev1operation";
import { GoogleCloudApigeeV1Quota } from "./googlecloudapigeev1quota";



// GoogleCloudApigeeV1OperationConfig
/** 
 * Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.
**/
export class GoogleCloudApigeeV1OperationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiSource" })
  apiSource?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: GoogleCloudApigeeV1Operation })
  operations?: GoogleCloudApigeeV1Operation[];

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: GoogleCloudApigeeV1Quota;
}
