import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForIssuePathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare enum ReactionsListForIssueContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForIssueQueryParams extends SpeakeasyBase {
    content?: ReactionsListForIssueContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForIssue415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsListForIssueRequest extends SpeakeasyBase {
    pathParams: ReactionsListForIssuePathParams;
    queryParams: ReactionsListForIssueQueryParams;
}
export declare class ReactionsListForIssueResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    reactions?: shared.Reaction[];
    reactionsListForIssue415ApplicationJsonObject?: ReactionsListForIssue415ApplicationJson;
}
