import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsAddSelectedRepoToOrgSecretPathParams extends SpeakeasyBase {
    org: string;
    repositoryId: number;
    secretName: string;
}
export declare class ActionsAddSelectedRepoToOrgSecretRequest extends SpeakeasyBase {
    pathParams: ActionsAddSelectedRepoToOrgSecretPathParams;
}
export declare class ActionsAddSelectedRepoToOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
