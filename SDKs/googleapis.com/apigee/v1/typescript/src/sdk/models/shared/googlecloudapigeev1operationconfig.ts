import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1Operation } from "./googlecloudapigeev1operation";
import { GoogleCloudApigeeV1Quota } from "./googlecloudapigeev1quota";


// GoogleCloudApigeeV1OperationConfig
/** 
 * Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.
**/
export class GoogleCloudApigeeV1OperationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiSource" })
  apiSource?: string;

  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @Metadata({ data: "json, name=operations", elemType: shared.GoogleCloudApigeeV1Operation })
  operations?: GoogleCloudApigeeV1Operation[];

  @Metadata({ data: "json, name=quota" })
  quota?: GoogleCloudApigeeV1Quota;
}
