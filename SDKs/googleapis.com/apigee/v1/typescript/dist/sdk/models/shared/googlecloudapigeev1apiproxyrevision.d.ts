import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ConfigVersion } from "./googlecloudapigeev1configversion";
import { GoogleCloudApigeeV1ResourceFiles } from "./googlecloudapigeev1resourcefiles";
/**
 * API proxy revision.
**/
export declare class GoogleCloudApigeeV1ApiProxyRevision extends SpeakeasyBase {
    archive?: string;
    basepaths?: string[];
    configurationVersion?: GoogleCloudApigeeV1ConfigVersion;
    contextInfo?: string;
    createdAt?: string;
    description?: string;
    displayName?: string;
    entityMetaDataAsProperties?: Map<string, string>;
    integrationEndpoints?: string[];
    lastModifiedAt?: string;
    name?: string;
    policies?: string[];
    proxies?: string[];
    proxyEndpoints?: string[];
    resourceFiles?: GoogleCloudApigeeV1ResourceFiles;
    resources?: string[];
    revision?: string;
    sharedFlows?: string[];
    spec?: string;
    targetEndpoints?: string[];
    targetServers?: string[];
    targets?: string[];
    teams?: string[];
    type?: string;
}
