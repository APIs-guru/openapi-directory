import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAs2KeysRequestBody extends SpeakeasyBase {
    as2PartnershipName: string;
    publicKey: string;
    userId?: number;
}
export declare class PostAs2KeysRequest extends SpeakeasyBase {
    request?: PostAs2KeysRequestBody;
}
export declare class PostAs2KeysResponse extends SpeakeasyBase {
    as2KeyEntity?: shared.As2KeyEntity;
    contentType: string;
    statusCode: number;
}
