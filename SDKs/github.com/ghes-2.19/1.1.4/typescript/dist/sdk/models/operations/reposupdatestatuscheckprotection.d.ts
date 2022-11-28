import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateStatusCheckProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposUpdateStatusCheckProtectionRequestBody extends SpeakeasyBase {
    contexts?: string[];
    strict?: boolean;
}
export declare class ReposUpdateStatusCheckProtectionRequest extends SpeakeasyBase {
    pathParams: ReposUpdateStatusCheckProtectionPathParams;
    request?: ReposUpdateStatusCheckProtectionRequestBody;
}
export declare class ReposUpdateStatusCheckProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    statusCheckPolicy?: shared.StatusCheckPolicy;
    validationError?: shared.ValidationError;
}
