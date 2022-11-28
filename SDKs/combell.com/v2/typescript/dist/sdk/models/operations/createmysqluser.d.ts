import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMySqlUserPathParams extends SpeakeasyBase {
    databaseName: string;
}
export declare class CreateMySqlUserQueryParams extends SpeakeasyBase {
    databaseName: string;
}
export declare class CreateMySqlUserRequest extends SpeakeasyBase {
    pathParams: CreateMySqlUserPathParams;
    queryParams: CreateMySqlUserQueryParams;
    request?: shared.CreateMySqlUser;
}
export declare class CreateMySqlUserResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    statusCode: number;
}
