import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsCreateOrUpdateOrgSecretPathParams extends SpeakeasyBase {
    org: string;
    secretName: string;
}
export declare enum ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
export declare class ActionsCreateOrUpdateOrgSecretRequestBody extends SpeakeasyBase {
    encryptedValue?: string;
    keyId?: string;
    selectedRepositoryIds?: string[];
    visibility: ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;
}
export declare class ActionsCreateOrUpdateOrgSecretRequest extends SpeakeasyBase {
    pathParams: ActionsCreateOrUpdateOrgSecretPathParams;
    request?: ActionsCreateOrUpdateOrgSecretRequestBody;
}
export declare class ActionsCreateOrUpdateOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyObject?: Map<string, any>;
}
