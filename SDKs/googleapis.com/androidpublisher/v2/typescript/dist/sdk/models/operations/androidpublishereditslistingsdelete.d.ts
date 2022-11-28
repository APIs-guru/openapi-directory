import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsListingsDeletePathParams extends SpeakeasyBase {
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsListingsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsListingsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsListingsDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsListingsDeletePathParams;
    queryParams: AndroidpublisherEditsListingsDeleteQueryParams;
    security: AndroidpublisherEditsListingsDeleteSecurity;
}
export declare class AndroidpublisherEditsListingsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
