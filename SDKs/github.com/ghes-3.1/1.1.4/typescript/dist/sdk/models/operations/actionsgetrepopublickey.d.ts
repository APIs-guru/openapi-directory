import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetRepoPublicKeyPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsGetRepoPublicKeyRequest extends SpeakeasyBase {
    pathParams: ActionsGetRepoPublicKeyPathParams;
}
export declare class ActionsGetRepoPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsPublicKey?: shared.ActionsPublicKey;
}
