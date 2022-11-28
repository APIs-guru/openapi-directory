import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransferPathParams extends SpeakeasyBase {
    transferId: string;
}
export declare class GetTransferSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetTransferRequest extends SpeakeasyBase {
    pathParams: GetTransferPathParams;
    security: GetTransferSecurity;
}
export declare class GetTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transfer?: shared.Transfer;
}
