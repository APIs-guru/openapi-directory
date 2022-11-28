import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum WorkTypeApiSearchQueryOptionsOrderEnum {
    None = "None",
    Asc = "Asc",
    Desc = "Desc"
}
export declare class WorkTypeApiSearchQueryParams extends SpeakeasyBase {
    queryOptionsOrder?: WorkTypeApiSearchQueryOptionsOrderEnum;
    queryOptionsOrderBy?: string;
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
    queryOptionsQuery?: string;
}
export declare class WorkTypeApiSearchHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiSearchRequest extends SpeakeasyBase {
    queryParams: WorkTypeApiSearchQueryParams;
    headers: WorkTypeApiSearchHeaders;
}
export declare class WorkTypeApiSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    workTypeDetailsApiModels?: shared.WorkTypeDetailsApiModel[];
}
