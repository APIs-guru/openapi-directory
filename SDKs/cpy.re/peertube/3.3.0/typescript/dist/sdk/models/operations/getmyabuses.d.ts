import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyAbusesQueryParams extends SpeakeasyBase {
    count?: number;
    id?: number;
    sort?: shared.AbusesSortEnum;
    start?: number;
    state?: number;
}
export declare class GetMyAbusesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetMyAbuses200ApplicationJson extends SpeakeasyBase {
    data?: any[];
    total?: number;
}
export declare class GetMyAbusesRequest extends SpeakeasyBase {
    queryParams: GetMyAbusesQueryParams;
    security: GetMyAbusesSecurity;
}
export declare class GetMyAbusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMyAbuses200ApplicationJsonObject?: GetMyAbuses200ApplicationJson;
}
