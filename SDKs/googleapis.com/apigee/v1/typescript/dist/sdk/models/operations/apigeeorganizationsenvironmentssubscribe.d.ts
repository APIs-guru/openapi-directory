import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsSubscribePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsSubscribeQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsSubscribeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsSubscribeRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsSubscribePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsSubscribeQueryParams;
    security: ApigeeOrganizationsEnvironmentsSubscribeSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsSubscribeResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Subscription?: shared.GoogleCloudApigeeV1Subscription;
    statusCode: number;
}
