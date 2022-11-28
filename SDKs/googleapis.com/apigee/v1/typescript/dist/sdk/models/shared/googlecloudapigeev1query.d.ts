import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1QueryMetric } from "./googlecloudapigeev1querymetric";
export declare class GoogleCloudApigeeV1Query extends SpeakeasyBase {
    csvDelimiter?: string;
    dimensions?: string[];
    envgroupHostname?: string;
    filter?: string;
    groupByTimeUnit?: string;
    limit?: number;
    metrics?: GoogleCloudApigeeV1QueryMetric[];
    name?: string;
    outputFormat?: string;
    reportDefinitionId?: string;
    timeRange?: any;
}
