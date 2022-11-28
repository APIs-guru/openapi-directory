import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountDeleteSessionsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountDeleteSessionsRequest extends SpeakeasyBase {
    security: AccountDeleteSessionsSecurity;
}
export declare class AccountDeleteSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
