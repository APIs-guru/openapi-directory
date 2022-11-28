import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsPatchDataPointPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class TagsPatchDataPointRequests extends SpeakeasyBase {
    apiCoreRequestsPatchBody?: shared.ApiCoreRequestsPatchBody;
    apiCoreRequestsPatchBody1?: shared.ApiCoreRequestsPatchBody;
    apiCoreRequestsPatchBody2?: shared.ApiCoreRequestsPatchBody;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class TagsPatchDataPointRequest extends SpeakeasyBase {
    pathParams: TagsPatchDataPointPathParams;
    request: TagsPatchDataPointRequests;
}
export declare class TagsPatchDataPointResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
