import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsApiproductsRateplansCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsApiproductsRateplansCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsApiproductsRateplansCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsApiproductsRateplansCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsApiproductsRateplansCreatePathParams;
    queryParams: ApigeeOrganizationsApiproductsRateplansCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1RatePlanInput;
    security: ApigeeOrganizationsApiproductsRateplansCreateSecurity;
}
export declare class ApigeeOrganizationsApiproductsRateplansCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1RatePlan?: shared.GoogleCloudApigeeV1RatePlan;
    statusCode: number;
}
