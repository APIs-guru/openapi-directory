import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1QueryMetadata } from "./googlecloudapigeev1querymetadata";
import { GoogleCloudApigeeV1AsyncQueryResult } from "./googlecloudapigeev1asyncqueryresult";
export declare class GoogleCloudApigeeV1AsyncQuery extends SpeakeasyBase {
    created?: string;
    envgroupHostname?: string;
    error?: string;
    executionTime?: string;
    name?: string;
    queryParams?: GoogleCloudApigeeV1QueryMetadata;
    reportDefinitionId?: string;
    result?: GoogleCloudApigeeV1AsyncQueryResult;
    resultFileSize?: string;
    resultRows?: string;
    self?: string;
    state?: string;
    updated?: string;
}
