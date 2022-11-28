import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1GraphQlOperation } from "./googlecloudapigeev1graphqloperation";
import { GoogleCloudApigeeV1Quota } from "./googlecloudapigeev1quota";
/**
 * Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.
**/
export declare class GoogleCloudApigeeV1GraphQlOperationConfig extends SpeakeasyBase {
    apiSource?: string;
    attributes?: GoogleCloudApigeeV1Attribute[];
    operations?: GoogleCloudApigeeV1GraphQlOperation[];
    quota?: GoogleCloudApigeeV1Quota;
}
