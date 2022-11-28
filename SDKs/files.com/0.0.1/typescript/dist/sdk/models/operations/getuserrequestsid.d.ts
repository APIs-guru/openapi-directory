import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserRequestsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUserRequestsIdRequest extends SpeakeasyBase {
    pathParams: GetUserRequestsIdPathParams;
}
export declare class GetUserRequestsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRequestEntity?: shared.UserRequestEntity;
}
