import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetVersionLocationsFormatIncidentTypeEnum {
    Crash = "crash",
    Hazard = "hazard",
    Theft = "theft",
    Unconfirmed = "unconfirmed",
    InfrastructureIssue = "infrastructure_issue",
    ChopShop = "chop_shop"
}
export declare class GetVersionLocationsFormatQueryParams extends SpeakeasyBase {
    all?: boolean;
    incidentType?: GetVersionLocationsFormatIncidentTypeEnum;
    limit?: number;
    occurredAfter?: number;
    occurredBefore?: number;
    proximity?: string;
    proximitySquare?: number;
    query?: string;
}
export declare class GetVersionLocationsFormatRequest extends SpeakeasyBase {
    queryParams: GetVersionLocationsFormatQueryParams;
}
export declare class GetVersionLocationsFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
