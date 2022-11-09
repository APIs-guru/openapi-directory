import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ForumGetPostAndParentPathParams extends SpeakeasyBase {
    childPostId: number;
}
export declare class ForumGetPostAndParentQueryParams extends SpeakeasyBase {
    showbanned?: string;
}
export declare class ForumGetPostAndParentRequest extends SpeakeasyBase {
    pathParams: ForumGetPostAndParentPathParams;
    queryParams: ForumGetPostAndParentQueryParams;
}
export declare class ForumGetPostAndParentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
