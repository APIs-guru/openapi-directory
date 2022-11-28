import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetEnvironmentPublicKeyPathParams extends SpeakeasyBase {
    environmentName: string;
    repositoryId: number;
}
export declare class ActionsGetEnvironmentPublicKeyRequest extends SpeakeasyBase {
    pathParams: ActionsGetEnvironmentPublicKeyPathParams;
}
export declare class ActionsGetEnvironmentPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsPublicKey?: shared.ActionsPublicKey;
}
