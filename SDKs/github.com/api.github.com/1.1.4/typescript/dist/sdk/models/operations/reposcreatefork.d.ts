import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateForkPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposCreateForkQueryParams extends SpeakeasyBase {
    org?: string;
    organization?: string;
}
export declare class ReposCreateForkRequestBody extends SpeakeasyBase {
    organization?: string;
}
export declare class ReposCreateForkRequest extends SpeakeasyBase {
    pathParams: ReposCreateForkPathParams;
    queryParams: ReposCreateForkQueryParams;
    request?: ReposCreateForkRequestBody;
}
export declare class ReposCreateForkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    repository?: shared.Repository;
    scimError?: shared.ScimError;
    validationError?: shared.ValidationError;
}
