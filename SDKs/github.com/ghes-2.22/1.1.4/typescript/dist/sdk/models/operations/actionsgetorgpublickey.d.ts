import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetOrgPublicKeyPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsGetOrgPublicKeyRequest extends SpeakeasyBase {
    pathParams: ActionsGetOrgPublicKeyPathParams;
}
export declare class ActionsGetOrgPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsPublicKey?: shared.ActionsPublicKey;
}
