import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetElectionsSearchOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}
export declare class GetElectionsSearchQueryParams extends SpeakeasyBase {
    apiKey: string;
    cycle?: number[];
    district?: string[];
    office?: GetElectionsSearchOfficeEnum[];
    page?: number;
    perPage?: number;
    sort?: string[];
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string[];
    zip?: number[];
}
export declare class GetElectionsSearchRequest extends SpeakeasyBase {
    queryParams: GetElectionsSearchQueryParams;
}
export declare class GetElectionsSearchResponse extends SpeakeasyBase {
    contentType: string;
    electionsListPage?: shared.ElectionsListPage;
    statusCode: number;
}
