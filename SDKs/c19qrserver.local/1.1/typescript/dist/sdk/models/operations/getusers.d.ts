import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
    userRecords?: shared.UserRecord[];
}
