import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserIdAs2KeysPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class PostUsersUserIdAs2KeysRequestBody extends SpeakeasyBase {
    as2PartnershipName: string;
    publicKey: string;
}
export declare class PostUsersUserIdAs2KeysRequest extends SpeakeasyBase {
    pathParams: PostUsersUserIdAs2KeysPathParams;
    request: PostUsersUserIdAs2KeysRequestBody;
}
export declare class PostUsersUserIdAs2KeysResponse extends SpeakeasyBase {
    as2KeyEntity?: shared.As2KeyEntity;
    contentType: string;
    statusCode: number;
}
