import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Information about the type of the item.
**/
export declare class UsageReportEntity extends SpeakeasyBase {
    customerId?: string;
    entityId?: string;
    profileId?: string;
    type?: string;
    userEmail?: string;
}
export declare class UsageReportParameters extends SpeakeasyBase {
    boolValue?: boolean;
    datetimeValue?: Date;
    intValue?: string;
    msgValue?: Map<string, any>[];
    name?: string;
    stringValue?: string;
}
/**
 * JSON template for a usage report.
**/
export declare class UsageReport extends SpeakeasyBase {
    date?: string;
    entity?: UsageReportEntity;
    etag?: string;
    kind?: string;
    parameters?: UsageReportParameters[];
}
