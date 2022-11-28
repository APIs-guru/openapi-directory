import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAbusesFilterEnum {
    Video = "video",
    Comment = "comment",
    Account = "account"
}
export declare enum GetAbusesVideoIsEnum {
    Deleted = "deleted",
    Blacklisted = "blacklisted"
}
export declare class GetAbusesQueryParams extends SpeakeasyBase {
    count?: number;
    filter?: GetAbusesFilterEnum;
    id?: number;
    predefinedReason?: shared.PredefinedAbuseReasonsEnum[];
    search?: string;
    searchReportee?: string;
    searchReporter?: string;
    searchVideo?: string;
    searchVideoChannel?: string;
    sort?: shared.AbusesSortEnum;
    start?: number;
    state?: number;
    videoIs?: GetAbusesVideoIsEnum;
}
export declare class GetAbusesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAbuses200ApplicationJson extends SpeakeasyBase {
    data?: any[];
    total?: number;
}
export declare class GetAbusesRequest extends SpeakeasyBase {
    queryParams: GetAbusesQueryParams;
    security: GetAbusesSecurity;
}
export declare class GetAbusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAbuses200ApplicationJsonObject?: GetAbuses200ApplicationJson;
}
