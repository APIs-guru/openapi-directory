import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsDeleteRelatedGroupsPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class TagsDeleteRelatedGroupsRequest extends SpeakeasyBase {
    pathParams: TagsDeleteRelatedGroupsPathParams;
}
export declare class TagsDeleteRelatedGroupsResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
