import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountGetSessionsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountGetSessionsRequest extends SpeakeasyBase {
    security: AccountGetSessionsSecurity;
}
export declare class AccountGetSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sessionList?: shared.SessionList;
}
