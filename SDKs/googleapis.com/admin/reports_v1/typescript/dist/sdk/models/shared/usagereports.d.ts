import { SpeakeasyBase } from "../../../internal/utils";
import { UsageReport } from "./usagereport";
export declare class UsageReportsWarningsData extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class UsageReportsWarnings extends SpeakeasyBase {
    code?: string;
    data?: UsageReportsWarningsData[];
    message?: string;
}
export declare class UsageReports extends SpeakeasyBase {
    etag?: string;
    kind?: string;
    nextPageToken?: string;
    usageReports?: UsageReport[];
    warnings?: UsageReportsWarnings[];
}
