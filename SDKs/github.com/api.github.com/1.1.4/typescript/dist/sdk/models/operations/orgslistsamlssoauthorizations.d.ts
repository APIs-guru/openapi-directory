import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListSamlSsoAuthorizationsPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsListSamlSsoAuthorizationsRequest extends SpeakeasyBase {
    pathParams: OrgsListSamlSsoAuthorizationsPathParams;
}
export declare class OrgsListSamlSsoAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    credentialAuthorizations?: shared.CredentialAuthorization[];
}
