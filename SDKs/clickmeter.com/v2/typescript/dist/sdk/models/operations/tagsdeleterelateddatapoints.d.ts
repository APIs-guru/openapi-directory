import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsDeleteRelatedDatapointsPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class TagsDeleteRelatedDatapointsRequest extends SpeakeasyBase {
    pathParams: TagsDeleteRelatedDatapointsPathParams;
}
export declare class TagsDeleteRelatedDatapointsResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
