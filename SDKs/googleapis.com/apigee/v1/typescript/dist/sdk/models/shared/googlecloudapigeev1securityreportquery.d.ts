import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityReportQueryMetric } from "./googlecloudapigeev1securityreportquerymetric";
/**
 * Body structure when user makes a request to create a security report.
**/
export declare class GoogleCloudApigeeV1SecurityReportQuery extends SpeakeasyBase {
    csvDelimiter?: string;
    dimensions?: string[];
    displayName?: string;
    envgroupHostname?: string;
    filter?: string;
    groupByTimeUnit?: string;
    limit?: number;
    metrics?: GoogleCloudApigeeV1SecurityReportQueryMetric[];
    mimeType?: string;
    reportDefinitionId?: string;
    timeRange?: any;
}
