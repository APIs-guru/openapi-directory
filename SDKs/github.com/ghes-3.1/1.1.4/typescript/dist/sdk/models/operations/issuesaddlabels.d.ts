import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesAddLabelsPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesAddLabelsRequestBody1 extends SpeakeasyBase {
    labels?: string[];
}
export declare class IssuesAddLabelsRequestBody3Labels extends SpeakeasyBase {
    name: string;
}
export declare class IssuesAddLabelsRequestBody3 extends SpeakeasyBase {
    labels?: IssuesAddLabelsRequestBody3Labels[];
}
export declare class IssuesAddLabelsRequestBody4 extends SpeakeasyBase {
    name: string;
}
export declare class IssuesAddLabelsRequest extends SpeakeasyBase {
    pathParams: IssuesAddLabelsPathParams;
    request?: any;
}
export declare class IssuesAddLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    labels?: shared.Label[];
    validationError?: shared.ValidationError;
}
