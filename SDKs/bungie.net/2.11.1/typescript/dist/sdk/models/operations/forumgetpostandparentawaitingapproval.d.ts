import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ForumGetPostAndParentAwaitingApprovalPathParams extends SpeakeasyBase {
    childPostId: number;
}
export declare class ForumGetPostAndParentAwaitingApprovalQueryParams extends SpeakeasyBase {
    showbanned?: string;
}
export declare class ForumGetPostAndParentAwaitingApprovalRequest extends SpeakeasyBase {
    pathParams: ForumGetPostAndParentAwaitingApprovalPathParams;
    queryParams: ForumGetPostAndParentAwaitingApprovalQueryParams;
}
export declare class ForumGetPostAndParentAwaitingApprovalResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
