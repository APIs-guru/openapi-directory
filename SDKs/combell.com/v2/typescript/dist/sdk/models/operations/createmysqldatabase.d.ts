import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMySqlDatabaseRequest extends SpeakeasyBase {
    request?: shared.CreateMySqlDatabase;
}
export declare class CreateMySqlDatabaseResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    statusCode: number;
}
