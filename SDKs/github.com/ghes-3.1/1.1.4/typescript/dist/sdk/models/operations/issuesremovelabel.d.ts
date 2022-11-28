import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesRemoveLabelPathParams extends SpeakeasyBase {
    issueNumber: number;
    name: string;
    owner: string;
    repo: string;
}
export declare class IssuesRemoveLabelRequest extends SpeakeasyBase {
    pathParams: IssuesRemoveLabelPathParams;
}
export declare class IssuesRemoveLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    labels?: shared.Label[];
}
