import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsValidatePathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsValidateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsValidateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsValidateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsValidatePathParams;
    queryParams: AndroidpublisherEditsValidateQueryParams;
    security: AndroidpublisherEditsValidateSecurity;
}
export declare class AndroidpublisherEditsValidateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
