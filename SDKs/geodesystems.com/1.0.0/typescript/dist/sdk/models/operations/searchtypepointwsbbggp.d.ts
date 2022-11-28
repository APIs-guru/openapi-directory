import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointWsbbGgpQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchTypePointWsbbGgpAuthor?: string;
    searchTypePointWsbbGgpInstrument?: string;
    searchTypePointWsbbGgpStation?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointWsbbGgpRequest extends SpeakeasyBase {
    queryParams: SearchTypePointWsbbGgpQueryParams;
}
export declare class SearchTypePointWsbbGgpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
