import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1GraphQlOperation } from "./googlecloudapigeev1graphqloperation";
import { GoogleCloudApigeeV1Quota } from "./googlecloudapigeev1quota";


// GoogleCloudApigeeV1GraphQlOperationConfig
/** 
 * Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.
**/
export class GoogleCloudApigeeV1GraphQlOperationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiSource" })
  apiSource?: string;

  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @Metadata({ data: "json, name=operations", elemType: shared.GoogleCloudApigeeV1GraphQlOperation })
  operations?: GoogleCloudApigeeV1GraphQlOperation[];

  @Metadata({ data: "json, name=quota" })
  quota?: GoogleCloudApigeeV1Quota;
}
