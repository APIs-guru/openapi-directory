import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsApiproductsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsApiproductsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    attributename?: string;
    attributevalue?: string;
    callback?: string;
    count?: string;
    expand?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startKey?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsApiproductsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsApiproductsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsApiproductsListPathParams;
    queryParams: ApigeeOrganizationsApiproductsListQueryParams;
    security: ApigeeOrganizationsApiproductsListSecurity;
}
export declare class ApigeeOrganizationsApiproductsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListApiProductsResponse?: shared.GoogleCloudApigeeV1ListApiProductsResponse;
    statusCode: number;
}
