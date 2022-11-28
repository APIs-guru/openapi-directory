import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkTypeApiUpdateHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiUpdateRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textHtml: Uint8Array;
    textXml: Uint8Array;
    workTypeUpdateApiModel?: shared.WorkTypeUpdateApiModel;
    workTypeUpdateApiModel1?: shared.WorkTypeUpdateApiModel;
    workTypeUpdateApiModel2?: shared.WorkTypeUpdateApiModel;
}
export declare class WorkTypeApiUpdateRequest extends SpeakeasyBase {
    headers: WorkTypeApiUpdateHeaders;
    request: WorkTypeApiUpdateRequests;
}
export declare class WorkTypeApiUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
