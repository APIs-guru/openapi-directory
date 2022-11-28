import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRetargetingIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetRetargetingIdRequest extends SpeakeasyBase {
    pathParams: GetRetargetingIdPathParams;
}
export declare class GetRetargetingIdResponse extends SpeakeasyBase {
    apiCoreDtoRetargetingRetargetingScript?: shared.ApiCoreDtoRetargetingRetargetingScript;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
