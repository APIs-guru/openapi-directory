import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetargetingPostPathParams extends SpeakeasyBase {
    id: number;
}
export declare class RetargetingPostRequests extends SpeakeasyBase {
    apiCoreDtoRetargetingRetargetingScript?: shared.ApiCoreDtoRetargetingRetargetingScript;
    apiCoreDtoRetargetingRetargetingScript1?: shared.ApiCoreDtoRetargetingRetargetingScript;
    apiCoreDtoRetargetingRetargetingScript2?: shared.ApiCoreDtoRetargetingRetargetingScript;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class RetargetingPostRequest extends SpeakeasyBase {
    pathParams: RetargetingPostPathParams;
    request: RetargetingPostRequests;
}
export declare class RetargetingPostResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
