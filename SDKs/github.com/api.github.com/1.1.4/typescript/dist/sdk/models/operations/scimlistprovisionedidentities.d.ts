import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScimListProvisionedIdentitiesPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ScimListProvisionedIdentitiesQueryParams extends SpeakeasyBase {
    count?: number;
    filter?: string;
    startIndex?: number;
}
export declare class ScimListProvisionedIdentitiesRequest extends SpeakeasyBase {
    pathParams: ScimListProvisionedIdentitiesPathParams;
    queryParams: ScimListProvisionedIdentitiesQueryParams;
}
export declare class ScimListProvisionedIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimError?: shared.ScimError;
    scimUserList?: shared.ScimUserList;
}
