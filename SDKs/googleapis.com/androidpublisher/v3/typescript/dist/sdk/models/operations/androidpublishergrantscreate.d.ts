import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherGrantsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroidpublisherGrantsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherGrantsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherGrantsCreateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherGrantsCreatePathParams;
    queryParams: AndroidpublisherGrantsCreateQueryParams;
    request?: shared.Grant;
    security: AndroidpublisherGrantsCreateSecurity;
}
export declare class AndroidpublisherGrantsCreateResponse extends SpeakeasyBase {
    contentType: string;
    grant?: shared.Grant;
    statusCode: number;
}
