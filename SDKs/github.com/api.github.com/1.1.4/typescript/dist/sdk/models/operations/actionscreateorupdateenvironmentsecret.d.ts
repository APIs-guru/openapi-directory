import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsCreateOrUpdateEnvironmentSecretPathParams extends SpeakeasyBase {
    environmentName: string;
    repositoryId: number;
    secretName: string;
}
export declare class ActionsCreateOrUpdateEnvironmentSecretRequestBody extends SpeakeasyBase {
    encryptedValue?: string;
    keyId?: string;
}
export declare class ActionsCreateOrUpdateEnvironmentSecretRequest extends SpeakeasyBase {
    pathParams: ActionsCreateOrUpdateEnvironmentSecretPathParams;
    request?: ActionsCreateOrUpdateEnvironmentSecretRequestBody;
}
export declare class ActionsCreateOrUpdateEnvironmentSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
