import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesCreateLabelPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class IssuesCreateLabelRequestBody extends SpeakeasyBase {
    color?: string;
    description?: string;
    name: string;
}
export declare class IssuesCreateLabelRequest extends SpeakeasyBase {
    pathParams: IssuesCreateLabelPathParams;
    request?: IssuesCreateLabelRequestBody;
}
export declare class IssuesCreateLabelResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    label?: shared.Label;
    validationError?: shared.ValidationError;
}
