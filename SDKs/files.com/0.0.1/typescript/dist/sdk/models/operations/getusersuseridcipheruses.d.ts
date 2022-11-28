import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdCipherUsesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdCipherUsesQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetUsersUserIdCipherUsesRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdCipherUsesPathParams;
    queryParams: GetUsersUserIdCipherUsesQueryParams;
}
export declare class GetUsersUserIdCipherUsesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userCipherUseEntities?: shared.UserCipherUseEntity[];
}
