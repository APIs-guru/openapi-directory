import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDeleteOrgSecretPathParams extends SpeakeasyBase {
    org: string;
    secretName: string;
}
export declare class ActionsDeleteOrgSecretRequest extends SpeakeasyBase {
    pathParams: ActionsDeleteOrgSecretPathParams;
}
export declare class ActionsDeleteOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
