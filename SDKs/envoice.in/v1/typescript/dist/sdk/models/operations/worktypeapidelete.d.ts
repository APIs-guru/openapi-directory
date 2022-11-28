import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkTypeApiDeleteHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiDeleteRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textHtml: Uint8Array;
    textXml: Uint8Array;
    workTypeDeleteApiModel?: shared.WorkTypeDeleteApiModel;
    workTypeDeleteApiModel1?: shared.WorkTypeDeleteApiModel;
    workTypeDeleteApiModel2?: shared.WorkTypeDeleteApiModel;
}
export declare class WorkTypeApiDeleteRequest extends SpeakeasyBase {
    headers: WorkTypeApiDeleteHeaders;
    request: WorkTypeApiDeleteRequests;
}
export declare class WorkTypeApiDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    workTypeApiDelete200ApplicationJsonInt32Integer?: number;
    workTypeApiDelete200TextJsonInt32Integer?: number;
}
