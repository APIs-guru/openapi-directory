import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsRemoveSamlSsoAuthorizationPathParams extends SpeakeasyBase {
    credentialId: number;
    org: string;
}
export declare class OrgsRemoveSamlSsoAuthorizationRequest extends SpeakeasyBase {
    pathParams: OrgsRemoveSamlSsoAuthorizationPathParams;
}
export declare class OrgsRemoveSamlSsoAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
