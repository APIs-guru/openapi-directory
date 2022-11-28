import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDeleteEnvironmentSecretPathParams extends SpeakeasyBase {
    environmentName: string;
    repositoryId: number;
    secretName: string;
}
export declare class ActionsDeleteEnvironmentSecretRequest extends SpeakeasyBase {
    pathParams: ActionsDeleteEnvironmentSecretPathParams;
}
export declare class ActionsDeleteEnvironmentSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
