import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetElectionsOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}
export declare class GetElectionsQueryParams extends SpeakeasyBase {
    apiKey: string;
    cycle: number;
    district?: string;
    electionFull?: boolean;
    office: GetElectionsOfficeEnum;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string;
}
export declare class GetElectionsRequest extends SpeakeasyBase {
    queryParams: GetElectionsQueryParams;
}
export declare class GetElectionsResponse extends SpeakeasyBase {
    contentType: string;
    electionPage?: shared.ElectionPage;
    statusCode: number;
}
