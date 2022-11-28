import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesRemoveAllLabelsPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesRemoveAllLabelsRequest extends SpeakeasyBase {
    pathParams: IssuesRemoveAllLabelsPathParams;
}
export declare class IssuesRemoveAllLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
