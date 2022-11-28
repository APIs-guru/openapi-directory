import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsPatchGroupPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class TagsPatchGroupRequests extends SpeakeasyBase {
    apiCoreRequestsPatchBody?: shared.ApiCoreRequestsPatchBody;
    apiCoreRequestsPatchBody1?: shared.ApiCoreRequestsPatchBody;
    apiCoreRequestsPatchBody2?: shared.ApiCoreRequestsPatchBody;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class TagsPatchGroupRequest extends SpeakeasyBase {
    pathParams: TagsPatchGroupPathParams;
    request: TagsPatchGroupRequests;
}
export declare class TagsPatchGroupResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
