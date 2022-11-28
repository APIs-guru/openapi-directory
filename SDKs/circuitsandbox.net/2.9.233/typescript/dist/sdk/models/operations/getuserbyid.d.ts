import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetUserByIdSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetUserByIdRequest extends SpeakeasyBase {
    pathParams: GetUserByIdPathParams;
    security: GetUserByIdSecurity;
}
export declare class GetUserByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    user?: any;
}
