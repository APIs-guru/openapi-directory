import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesGetLabelPathParams extends SpeakeasyBase {
    name: string;
    owner: string;
    repo: string;
}
export declare class IssuesGetLabelRequest extends SpeakeasyBase {
    pathParams: IssuesGetLabelPathParams;
}
export declare class IssuesGetLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    label?: shared.Label;
}
