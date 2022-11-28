import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeDatabaseUserPasswordPathParams extends SpeakeasyBase {
    databaseName: string;
    userName: string;
}
export declare class ChangeDatabaseUserPasswordQueryParams extends SpeakeasyBase {
    databaseName: string;
    userName: string;
}
export declare class ChangeDatabaseUserPasswordRequest extends SpeakeasyBase {
    pathParams: ChangeDatabaseUserPasswordPathParams;
    queryParams: ChangeDatabaseUserPasswordQueryParams;
    request?: shared.UpdateUserPasswordRequest;
}
export declare class ChangeDatabaseUserPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
