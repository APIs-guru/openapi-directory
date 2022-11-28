import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsApiproductsRateplansListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ApigeeOrganizationsApiproductsRateplansListStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Published = "PUBLISHED"
}
export declare class ApigeeOrganizationsApiproductsRateplansListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    count?: number;
    expand?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startKey?: string;
    state?: ApigeeOrganizationsApiproductsRateplansListStateEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsApiproductsRateplansListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsApiproductsRateplansListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsApiproductsRateplansListPathParams;
    queryParams: ApigeeOrganizationsApiproductsRateplansListQueryParams;
    security: ApigeeOrganizationsApiproductsRateplansListSecurity;
}
export declare class ApigeeOrganizationsApiproductsRateplansListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListRatePlansResponse?: shared.GoogleCloudApigeeV1ListRatePlansResponse;
    statusCode: number;
}
