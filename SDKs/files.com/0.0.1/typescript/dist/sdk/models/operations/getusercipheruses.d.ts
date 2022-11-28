import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserCipherUsesQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
    userId?: number;
}
export declare class GetUserCipherUsesRequest extends SpeakeasyBase {
    queryParams: GetUserCipherUsesQueryParams;
}
export declare class GetUserCipherUsesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userCipherUseEntities?: shared.UserCipherUseEntity[];
}
