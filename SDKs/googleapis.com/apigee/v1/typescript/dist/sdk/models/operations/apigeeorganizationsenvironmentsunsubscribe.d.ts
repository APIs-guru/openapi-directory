import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsUnsubscribePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsUnsubscribeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsUnsubscribeRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsUnsubscribePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams;
    request?: shared.GoogleCloudApigeeV1Subscription;
    security: ApigeeOrganizationsEnvironmentsUnsubscribeSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsUnsubscribeResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
