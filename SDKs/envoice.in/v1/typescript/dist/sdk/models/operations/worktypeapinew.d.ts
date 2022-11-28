import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkTypeApiNewHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiNewRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textHtml: Uint8Array;
    textXml: Uint8Array;
    workTypeCreateApiModel?: shared.WorkTypeCreateApiModel;
    workTypeCreateApiModel1?: shared.WorkTypeCreateApiModel;
    workTypeCreateApiModel2?: shared.WorkTypeCreateApiModel;
}
export declare class WorkTypeApiNewRequest extends SpeakeasyBase {
    headers: WorkTypeApiNewHeaders;
    request: WorkTypeApiNewRequests;
}
export declare class WorkTypeApiNewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    workTypeApiNew200ApplicationJsonInt32Integer?: number;
    workTypeApiNew200TextJsonInt32Integer?: number;
}
