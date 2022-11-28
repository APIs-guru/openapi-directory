import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesAddLabelsPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesAddLabelsRequestBody extends SpeakeasyBase {
    labels: string[];
}
export declare class IssuesAddLabelsRequest extends SpeakeasyBase {
    pathParams: IssuesAddLabelsPathParams;
    request?: IssuesAddLabelsRequestBody;
}
export declare class IssuesAddLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    labels?: shared.Label[];
    validationError?: shared.ValidationError;
}
