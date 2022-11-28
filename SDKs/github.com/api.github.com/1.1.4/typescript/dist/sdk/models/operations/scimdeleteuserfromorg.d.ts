import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScimDeleteUserFromOrgPathParams extends SpeakeasyBase {
    org: string;
    scimUserId: string;
}
export declare class ScimDeleteUserFromOrgRequest extends SpeakeasyBase {
    pathParams: ScimDeleteUserFromOrgPathParams;
}
export declare class ScimDeleteUserFromOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimError?: shared.ScimError;
}
