import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetargetingDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class RetargetingDeleteRequest extends SpeakeasyBase {
    pathParams: RetargetingDeletePathParams;
}
export declare class RetargetingDeleteResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
