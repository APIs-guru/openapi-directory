import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams;
    security: ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
