import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1CustomReportMetric } from "./googlecloudapigeev1customreportmetric";
import { GoogleCloudApigeeV1ReportProperty } from "./googlecloudapigeev1reportproperty";
export declare class GoogleCloudApigeeV1CustomReportInput extends SpeakeasyBase {
    chartType?: string;
    comments?: string[];
    dimensions?: string[];
    displayName?: string;
    filter?: string;
    fromTime?: string;
    limit?: string;
    metrics?: GoogleCloudApigeeV1CustomReportMetric[];
    name?: string;
    offset?: string;
    properties?: GoogleCloudApigeeV1ReportProperty[];
    sortByCols?: string[];
    sortOrder?: string;
    tags?: string[];
    timeUnit?: string;
    toTime?: string;
    topk?: string;
}
export declare class GoogleCloudApigeeV1CustomReport extends SpeakeasyBase {
    chartType?: string;
    comments?: string[];
    createdAt?: string;
    dimensions?: string[];
    displayName?: string;
    environment?: string;
    filter?: string;
    fromTime?: string;
    lastModifiedAt?: string;
    lastViewedAt?: string;
    limit?: string;
    metrics?: GoogleCloudApigeeV1CustomReportMetric[];
    name?: string;
    offset?: string;
    organization?: string;
    properties?: GoogleCloudApigeeV1ReportProperty[];
    sortByCols?: string[];
    sortOrder?: string;
    tags?: string[];
    timeUnit?: string;
    toTime?: string;
    topk?: string;
}
