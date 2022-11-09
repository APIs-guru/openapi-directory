import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountGetLogsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountGetLogsRequest extends SpeakeasyBase {
    security: AccountGetLogsSecurity;
}
export declare class AccountGetLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    logList?: shared.LogList;
}
