import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1Credential } from "./googlecloudapigeev1credential";
export declare class GoogleCloudApigeeV1DeveloperApp extends SpeakeasyBase {
    apiProducts?: string[];
    appFamily?: string;
    appId?: string;
    attributes?: GoogleCloudApigeeV1Attribute[];
    callbackUrl?: string;
    createdAt?: string;
    credentials?: GoogleCloudApigeeV1Credential[];
    developerId?: string;
    keyExpiresIn?: string;
    lastModifiedAt?: string;
    name?: string;
    scopes?: string[];
    status?: string;
}
export declare class GoogleCloudApigeeV1DeveloperAppInput extends SpeakeasyBase {
    apiProducts?: string[];
    appFamily?: string;
    appId?: string;
    attributes?: GoogleCloudApigeeV1Attribute[];
    callbackUrl?: string;
    developerId?: string;
    keyExpiresIn?: string;
    name?: string;
    scopes?: string[];
    status?: string;
}
