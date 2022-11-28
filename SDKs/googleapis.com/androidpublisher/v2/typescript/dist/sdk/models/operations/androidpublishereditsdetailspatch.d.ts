import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsDetailsPatchPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsDetailsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsDetailsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsDetailsPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsDetailsPatchPathParams;
    queryParams: AndroidpublisherEditsDetailsPatchQueryParams;
    request?: shared.AppDetails;
    security: AndroidpublisherEditsDetailsPatchSecurity;
}
export declare class AndroidpublisherEditsDetailsPatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
