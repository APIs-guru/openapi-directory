import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ConfigVersion } from "./googlecloudapigeev1configversion";
import { GoogleCloudApigeeV1ResourceFiles } from "./googlecloudapigeev1resourcefiles";
/**
 * The metadata describing a shared flow revision.
**/
export declare class GoogleCloudApigeeV1SharedFlowRevision extends SpeakeasyBase {
    configurationVersion?: GoogleCloudApigeeV1ConfigVersion;
    contextInfo?: string;
    createdAt?: string;
    description?: string;
    displayName?: string;
    entityMetaDataAsProperties?: Map<string, string>;
    lastModifiedAt?: string;
    name?: string;
    policies?: string[];
    resourceFiles?: GoogleCloudApigeeV1ResourceFiles;
    resources?: string[];
    revision?: string;
    sharedFlows?: string[];
    type?: string;
}
