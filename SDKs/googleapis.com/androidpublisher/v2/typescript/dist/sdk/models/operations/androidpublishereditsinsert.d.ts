import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsInsertPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherEditsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsInsertRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsInsertPathParams;
    queryParams: AndroidpublisherEditsInsertQueryParams;
    request?: shared.AppEdit;
    security: AndroidpublisherEditsInsertSecurity;
}
export declare class AndroidpublisherEditsInsertResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
