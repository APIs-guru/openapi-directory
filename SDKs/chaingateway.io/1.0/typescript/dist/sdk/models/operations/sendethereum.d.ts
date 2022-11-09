import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SendEthereumHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class SendEthereumRequest extends SpeakeasyBase {
    headers: SendEthereumHeaders;
    request: shared.SendEthereumRequest;
}
export declare class SendEthereumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sendEthereum?: shared.SendEthereum;
}
