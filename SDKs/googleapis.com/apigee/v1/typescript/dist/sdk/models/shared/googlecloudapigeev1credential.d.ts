import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ApiProductRef } from "./googlecloudapigeev1apiproductref";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
export declare class GoogleCloudApigeeV1Credential extends SpeakeasyBase {
    apiProducts?: GoogleCloudApigeeV1ApiProductRef[];
    attributes?: GoogleCloudApigeeV1Attribute[];
    consumerKey?: string;
    consumerSecret?: string;
    expiresAt?: string;
    issuedAt?: string;
    scopes?: string[];
    status?: string;
}
