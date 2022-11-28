import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitDeleteRefPathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class GitDeleteRefRequest extends SpeakeasyBase {
    pathParams: GitDeleteRefPathParams;
}
export declare class GitDeleteRefResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationError?: shared.ValidationError;
}
