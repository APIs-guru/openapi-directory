import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsPutRequests extends SpeakeasyBase {
    apiCoreDtoTagsTag?: shared.ApiCoreDtoTagsTag;
    apiCoreDtoTagsTag1?: shared.ApiCoreDtoTagsTag;
    apiCoreDtoTagsTag2?: shared.ApiCoreDtoTagsTag;
}
export declare class TagsPutRequest extends SpeakeasyBase {
    request: TagsPutRequests;
}
export declare class TagsPutResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
