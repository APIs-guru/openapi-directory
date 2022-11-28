import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersDeleteSessionsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersDeleteSessionsSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersDeleteSessionsRequest extends SpeakeasyBase {
    pathParams: UsersDeleteSessionsPathParams;
    security: UsersDeleteSessionsSecurity;
}
export declare class UsersDeleteSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
