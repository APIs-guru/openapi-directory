import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1Operation } from "./googlecloudapigeev1operation";
import { GoogleCloudApigeeV1Quota } from "./googlecloudapigeev1quota";
/**
 * Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.
**/
export declare class GoogleCloudApigeeV1OperationConfig extends SpeakeasyBase {
    apiSource?: string;
    attributes?: GoogleCloudApigeeV1Attribute[];
    operations?: GoogleCloudApigeeV1Operation[];
    quota?: GoogleCloudApigeeV1Quota;
}
