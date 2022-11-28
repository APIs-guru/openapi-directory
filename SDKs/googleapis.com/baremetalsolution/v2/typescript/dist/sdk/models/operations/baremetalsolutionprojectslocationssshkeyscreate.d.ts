import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsSshKeysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsSshKeysCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sshKeyId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BaremetalsolutionProjectsLocationsSshKeysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsSshKeysCreateRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsSshKeysCreatePathParams;
    queryParams: BaremetalsolutionProjectsLocationsSshKeysCreateQueryParams;
    request?: shared.SshKeyInput;
    security: BaremetalsolutionProjectsLocationsSshKeysCreateSecurity;
}
export declare class BaremetalsolutionProjectsLocationsSshKeysCreateResponse extends SpeakeasyBase {
    contentType: string;
    sshKey?: shared.SshKey;
    statusCode: number;
}
