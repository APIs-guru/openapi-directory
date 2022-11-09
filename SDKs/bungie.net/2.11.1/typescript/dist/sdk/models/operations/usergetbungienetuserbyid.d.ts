import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UserGetBungieNetUserByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UserGetBungieNetUserByIdRequest extends SpeakeasyBase {
    pathParams: UserGetBungieNetUserByIdPathParams;
}
export declare class UserGetBungieNetUserByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
