import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesUpdateLabelPathParams extends SpeakeasyBase {
    name: string;
    owner: string;
    repo: string;
}
export declare class IssuesUpdateLabelRequestBody extends SpeakeasyBase {
    color?: string;
    description?: string;
    newName?: string;
}
export declare class IssuesUpdateLabelRequest extends SpeakeasyBase {
    pathParams: IssuesUpdateLabelPathParams;
    request?: IssuesUpdateLabelRequestBody;
}
export declare class IssuesUpdateLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    label?: shared.Label;
}
