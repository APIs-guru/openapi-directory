import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetVersionIncidentsFormatIncidentTypeEnum {
    Crash = "crash",
    Hazard = "hazard",
    Theft = "theft",
    Unconfirmed = "unconfirmed",
    InfrastructureIssue = "infrastructure_issue",
    ChopShop = "chop_shop"
}
export declare class GetVersionIncidentsFormatQueryParams extends SpeakeasyBase {
    incidentType?: GetVersionIncidentsFormatIncidentTypeEnum;
    occurredAfter?: number;
    occurredBefore?: number;
    page?: number;
    perPage?: number;
    proximity?: string;
    proximitySquare?: number;
    query?: string;
}
export declare class GetVersionIncidentsFormatRequest extends SpeakeasyBase {
    queryParams: GetVersionIncidentsFormatQueryParams;
}
export declare class GetVersionIncidentsFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
