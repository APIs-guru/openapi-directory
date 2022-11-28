import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    blocked?: boolean;
    count?: number;
    search?: string;
    sort?: shared.UsersSortEnum;
    start?: number;
}
export declare class GetUsersSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
    security: GetUsersSecurity;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: any[];
}
