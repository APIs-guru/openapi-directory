import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EstimationApiDeleteHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiDeleteRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    estimationDeleteApiModel?: shared.EstimationDeleteApiModel;
    estimationDeleteApiModel1?: shared.EstimationDeleteApiModel;
    estimationDeleteApiModel2?: shared.EstimationDeleteApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class EstimationApiDeleteRequest extends SpeakeasyBase {
    headers: EstimationApiDeleteHeaders;
    request: EstimationApiDeleteRequests;
}
export declare class EstimationApiDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    estimationApiDelete200ApplicationJsonInt32Integer?: number;
    estimationApiDelete200TextJsonInt32Integer?: number;
    statusCode: number;
}
