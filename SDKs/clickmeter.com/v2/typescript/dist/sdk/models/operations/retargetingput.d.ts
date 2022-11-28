import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetargetingPutRequests extends SpeakeasyBase {
    apiCoreDtoRetargetingRetargetingScript?: shared.ApiCoreDtoRetargetingRetargetingScript;
    apiCoreDtoRetargetingRetargetingScript1?: shared.ApiCoreDtoRetargetingRetargetingScript;
    apiCoreDtoRetargetingRetargetingScript2?: shared.ApiCoreDtoRetargetingRetargetingScript;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class RetargetingPutRequest extends SpeakeasyBase {
    request: RetargetingPutRequests;
}
export declare class RetargetingPutResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
