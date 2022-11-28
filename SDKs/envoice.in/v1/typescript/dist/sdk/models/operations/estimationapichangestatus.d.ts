import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EstimationApiChangeStatusHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiChangeStatusRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    estimationChangeStatusApiModel?: shared.EstimationChangeStatusApiModel;
    estimationChangeStatusApiModel1?: shared.EstimationChangeStatusApiModel;
    estimationChangeStatusApiModel2?: shared.EstimationChangeStatusApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class EstimationApiChangeStatusRequest extends SpeakeasyBase {
    headers: EstimationApiChangeStatusHeaders;
    request: EstimationApiChangeStatusRequests;
}
export declare class EstimationApiChangeStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    estimationApiChangeStatus200ApplicationJsonBoolean?: boolean;
    estimationApiChangeStatus200TextJsonBoolean?: boolean;
    statusCode: number;
}
