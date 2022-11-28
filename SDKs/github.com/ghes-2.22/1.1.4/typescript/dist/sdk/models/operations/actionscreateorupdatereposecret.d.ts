import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsCreateOrUpdateRepoSecretPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    secretName: string;
}
export declare class ActionsCreateOrUpdateRepoSecretRequestBody extends SpeakeasyBase {
    encryptedValue?: string;
    keyId?: string;
}
export declare class ActionsCreateOrUpdateRepoSecretRequest extends SpeakeasyBase {
    pathParams: ActionsCreateOrUpdateRepoSecretPathParams;
    request?: ActionsCreateOrUpdateRepoSecretRequestBody;
}
export declare class ActionsCreateOrUpdateRepoSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsCreateOrUpdateRepoSecret201ApplicationJsonObject?: Map<string, any>;
}
