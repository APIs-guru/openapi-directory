import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsApiproductsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsApiproductsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsApiproductsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsApiproductsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsApiproductsCreatePathParams;
    queryParams: ApigeeOrganizationsApiproductsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1ApiProduct;
    security: ApigeeOrganizationsApiproductsCreateSecurity;
}
export declare class ApigeeOrganizationsApiproductsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ApiProduct?: shared.GoogleCloudApigeeV1ApiProduct;
    statusCode: number;
}
