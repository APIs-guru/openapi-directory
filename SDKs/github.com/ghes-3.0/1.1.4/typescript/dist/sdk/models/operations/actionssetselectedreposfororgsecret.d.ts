import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsSetSelectedReposForOrgSecretPathParams extends SpeakeasyBase {
    org: string;
    secretName: string;
}
export declare class ActionsSetSelectedReposForOrgSecretRequestBody extends SpeakeasyBase {
    selectedRepositoryIds?: number[];
}
export declare class ActionsSetSelectedReposForOrgSecretRequest extends SpeakeasyBase {
    pathParams: ActionsSetSelectedReposForOrgSecretPathParams;
    request?: ActionsSetSelectedReposForOrgSecretRequestBody;
}
export declare class ActionsSetSelectedReposForOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
