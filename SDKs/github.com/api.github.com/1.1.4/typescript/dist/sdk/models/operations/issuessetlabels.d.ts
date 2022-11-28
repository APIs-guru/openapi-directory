import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesSetLabelsPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesSetLabelsRequestBody extends SpeakeasyBase {
    labels?: string[];
}
export declare class IssuesSetLabelsRequest extends SpeakeasyBase {
    pathParams: IssuesSetLabelsPathParams;
    request?: IssuesSetLabelsRequestBody;
}
export declare class IssuesSetLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    labels?: shared.Label[];
    validationError?: shared.ValidationError;
}
