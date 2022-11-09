import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FetchFarmOrganizationByTypeAndIdPathParams extends SpeakeasyBase {
    farmOrganizationId: string;
    farmOrganizationType: shared.FarmOrganizationTypeEnum;
}
export declare class FetchFarmOrganizationByTypeAndIdSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FetchFarmOrganizationByTypeAndIdSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchFarmOrganizationByTypeAndIdSecurity extends SpeakeasyBase {
    option1?: FetchFarmOrganizationByTypeAndIdSecurityOption1;
    option2?: FetchFarmOrganizationByTypeAndIdSecurityOption2;
}
export declare class FetchFarmOrganizationByTypeAndIdRequest extends SpeakeasyBase {
    pathParams: FetchFarmOrganizationByTypeAndIdPathParams;
    security: FetchFarmOrganizationByTypeAndIdSecurity;
}
export declare class FetchFarmOrganizationByTypeAndIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    farmOrganization?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
