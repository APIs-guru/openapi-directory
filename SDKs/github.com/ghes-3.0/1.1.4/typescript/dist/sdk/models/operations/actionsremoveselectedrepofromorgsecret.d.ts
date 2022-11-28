import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsRemoveSelectedRepoFromOrgSecretPathParams extends SpeakeasyBase {
    org: string;
    repositoryId: number;
    secretName: string;
}
export declare class ActionsRemoveSelectedRepoFromOrgSecretRequest extends SpeakeasyBase {
    pathParams: ActionsRemoveSelectedRepoFromOrgSecretPathParams;
}
export declare class ActionsRemoveSelectedRepoFromOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
