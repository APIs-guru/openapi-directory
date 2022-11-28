import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClientApiAllHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiAllRequest extends SpeakeasyBase {
    headers: ClientApiAllHeaders;
}
export declare class ClientApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    clientDetailsApiModels?: shared.ClientDetailsApiModel[];
    contentType: string;
    statusCode: number;
}
