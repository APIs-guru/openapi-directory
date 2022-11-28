import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsDeletePathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare class ConversionsDeleteRequest extends SpeakeasyBase {
    pathParams: ConversionsDeletePathParams;
}
export declare class ConversionsDeleteResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
