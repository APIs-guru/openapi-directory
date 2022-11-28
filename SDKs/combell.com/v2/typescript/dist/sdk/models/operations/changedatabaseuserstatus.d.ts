import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeDatabaseUserStatusPathParams extends SpeakeasyBase {
    databaseName: string;
    userName: string;
}
export declare class ChangeDatabaseUserStatusQueryParams extends SpeakeasyBase {
    databaseName: string;
    userName: string;
}
export declare class ChangeDatabaseUserStatusRequest extends SpeakeasyBase {
    pathParams: ChangeDatabaseUserStatusPathParams;
    queryParams: ChangeDatabaseUserStatusQueryParams;
    request?: shared.UpdateUserStatusRequest;
}
export declare class ChangeDatabaseUserStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
