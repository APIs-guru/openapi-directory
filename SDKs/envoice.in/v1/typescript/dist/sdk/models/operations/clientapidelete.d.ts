import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClientApiDeleteHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiDeleteRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    clientDeleteApiModel?: shared.ClientDeleteApiModel;
    clientDeleteApiModel1?: shared.ClientDeleteApiModel;
    clientDeleteApiModel2?: shared.ClientDeleteApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ClientApiDeleteRequest extends SpeakeasyBase {
    headers: ClientApiDeleteHeaders;
    request: ClientApiDeleteRequests;
}
export declare class ClientApiDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    clientApiDelete200ApplicationJsonInt32Integer?: number;
    clientApiDelete200TextJsonInt32Integer?: number;
    contentType: string;
    statusCode: number;
}
