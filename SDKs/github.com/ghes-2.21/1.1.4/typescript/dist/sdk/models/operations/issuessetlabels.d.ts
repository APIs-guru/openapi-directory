import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesSetLabelsPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesSetLabelsRequestBody1 extends SpeakeasyBase {
    labels?: string[];
}
export declare class IssuesSetLabelsRequestBody3Labels extends SpeakeasyBase {
    name: string;
}
export declare class IssuesSetLabelsRequestBody3 extends SpeakeasyBase {
    labels?: IssuesSetLabelsRequestBody3Labels[];
}
export declare class IssuesSetLabelsRequestBody4 extends SpeakeasyBase {
    name: string;
}
export declare class IssuesSetLabelsRequest extends SpeakeasyBase {
    pathParams: IssuesSetLabelsPathParams;
    request?: any;
}
export declare class IssuesSetLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    labels?: shared.Label[];
    validationError?: shared.ValidationError;
}
