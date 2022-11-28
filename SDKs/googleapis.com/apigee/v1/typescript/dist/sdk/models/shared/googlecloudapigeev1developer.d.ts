import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
export declare class GoogleCloudApigeeV1Developer extends SpeakeasyBase {
    accessType?: string;
    appFamily?: string;
    apps?: string[];
    attributes?: GoogleCloudApigeeV1Attribute[];
    companies?: string[];
    createdAt?: string;
    developerId?: string;
    email?: string;
    firstName?: string;
    lastModifiedAt?: string;
    lastName?: string;
    organizationName?: string;
    status?: string;
    userName?: string;
}
export declare class GoogleCloudApigeeV1DeveloperInput extends SpeakeasyBase {
    accessType?: string;
    appFamily?: string;
    apps?: string[];
    attributes?: GoogleCloudApigeeV1Attribute[];
    companies?: string[];
    developerId?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
}
