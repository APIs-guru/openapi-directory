import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUserAs2KeysRequestBody extends SpeakeasyBase {
    as2PartnershipName: string;
    publicKey: string;
    userId?: number;
}
export declare class PostUserAs2KeysRequest extends SpeakeasyBase {
    request?: PostUserAs2KeysRequestBody;
}
export declare class PostUserAs2KeysResponse extends SpeakeasyBase {
    as2KeyEntity?: shared.As2KeyEntity;
    contentType: string;
    statusCode: number;
}
