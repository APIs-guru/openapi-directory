import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityReportMetadata } from "./googlecloudapigeev1securityreportmetadata";
import { GoogleCloudApigeeV1SecurityReportResultMetadata } from "./googlecloudapigeev1securityreportresultmetadata";
/**
 * SecurityReport saves all the information about the created security report.
**/
export declare class GoogleCloudApigeeV1SecurityReport extends SpeakeasyBase {
    created?: string;
    displayName?: string;
    envgroupHostname?: string;
    error?: string;
    executionTime?: string;
    queryParams?: GoogleCloudApigeeV1SecurityReportMetadata;
    reportDefinitionId?: string;
    result?: GoogleCloudApigeeV1SecurityReportResultMetadata;
    resultFileSize?: string;
    resultRows?: string;
    self?: string;
    state?: string;
    updated?: string;
}
