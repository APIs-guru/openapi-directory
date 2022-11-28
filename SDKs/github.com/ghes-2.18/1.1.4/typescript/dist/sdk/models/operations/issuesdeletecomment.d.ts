import { SpeakeasyBase } from "../../../internal/utils";
export declare class IssuesDeleteCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class IssuesDeleteCommentRequest extends SpeakeasyBase {
    pathParams: IssuesDeleteCommentPathParams;
}
export declare class IssuesDeleteCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
