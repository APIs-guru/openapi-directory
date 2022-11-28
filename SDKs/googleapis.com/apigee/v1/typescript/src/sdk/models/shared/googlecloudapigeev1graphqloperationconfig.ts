import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1GraphQlOperation } from "./googlecloudapigeev1graphqloperation";
import { GoogleCloudApigeeV1Quota } from "./googlecloudapigeev1quota";



// GoogleCloudApigeeV1GraphQlOperationConfig
/** 
 * Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.
**/
export class GoogleCloudApigeeV1GraphQlOperationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiSource" })
  apiSource?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: GoogleCloudApigeeV1GraphQlOperation })
  operations?: GoogleCloudApigeeV1GraphQlOperation[];

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: GoogleCloudApigeeV1Quota;
}
