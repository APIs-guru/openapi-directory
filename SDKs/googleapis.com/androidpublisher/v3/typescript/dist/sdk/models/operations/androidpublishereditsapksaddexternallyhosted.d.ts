import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsApksAddexternallyhostedPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsApksAddexternallyhostedQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsApksAddexternallyhostedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsApksAddexternallyhostedRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsApksAddexternallyhostedPathParams;
    queryParams: AndroidpublisherEditsApksAddexternallyhostedQueryParams;
    request?: shared.ApksAddExternallyHostedRequest;
    security: AndroidpublisherEditsApksAddexternallyhostedSecurity;
}
export declare class AndroidpublisherEditsApksAddexternallyhostedResponse extends SpeakeasyBase {
    apksAddExternallyHostedResponse?: shared.ApksAddExternallyHostedResponse;
    contentType: string;
    statusCode: number;
}
