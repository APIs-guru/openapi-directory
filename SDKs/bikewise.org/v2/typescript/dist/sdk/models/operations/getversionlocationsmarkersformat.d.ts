import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetVersionLocationsMarkersFormatIncidentTypeEnum {
    Crash = "crash",
    Hazard = "hazard",
    Theft = "theft",
    Unconfirmed = "unconfirmed",
    InfrastructureIssue = "infrastructure_issue",
    ChopShop = "chop_shop"
}
export declare class GetVersionLocationsMarkersFormatQueryParams extends SpeakeasyBase {
    all?: boolean;
    incidentType?: GetVersionLocationsMarkersFormatIncidentTypeEnum;
    limit?: number;
    occurredAfter?: number;
    occurredBefore?: number;
    proximity?: string;
    proximitySquare?: number;
    query?: string;
}
export declare class GetVersionLocationsMarkersFormatRequest extends SpeakeasyBase {
    queryParams: GetVersionLocationsMarkersFormatQueryParams;
}
export declare class GetVersionLocationsMarkersFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
