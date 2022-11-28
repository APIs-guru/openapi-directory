import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EstimationApiSendToClientHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiSendToClientRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    sendEstimationToClientApiModel?: shared.SendEstimationToClientApiModel;
    sendEstimationToClientApiModel1?: shared.SendEstimationToClientApiModel;
    sendEstimationToClientApiModel2?: shared.SendEstimationToClientApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class EstimationApiSendToClientRequest extends SpeakeasyBase {
    headers: EstimationApiSendToClientHeaders;
    request: EstimationApiSendToClientRequests;
}
export declare class EstimationApiSendToClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    estimationApiSendToClient200ApplicationJsonInt32Integer?: number;
    estimationApiSendToClient200TextJsonInt32Integer?: number;
    statusCode: number;
}
