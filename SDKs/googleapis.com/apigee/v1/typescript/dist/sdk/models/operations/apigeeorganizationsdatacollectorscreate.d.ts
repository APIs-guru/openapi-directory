import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDatacollectorsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDatacollectorsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dataCollectorId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsDatacollectorsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDatacollectorsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDatacollectorsCreatePathParams;
    queryParams: ApigeeOrganizationsDatacollectorsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1DataCollectorInput;
    security: ApigeeOrganizationsDatacollectorsCreateSecurity;
}
export declare class ApigeeOrganizationsDatacollectorsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DataCollector?: shared.GoogleCloudApigeeV1DataCollector;
    statusCode: number;
}
