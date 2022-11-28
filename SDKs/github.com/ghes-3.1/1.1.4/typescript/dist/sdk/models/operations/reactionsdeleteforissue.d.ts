import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReactionsDeleteForIssuePathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    reactionId: number;
    repo: string;
}
export declare class ReactionsDeleteForIssueRequest extends SpeakeasyBase {
    pathParams: ReactionsDeleteForIssuePathParams;
}
export declare class ReactionsDeleteForIssueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
