import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FetchFarmOrganizationByTypeAndIdPathParams extends SpeakeasyBase {
    farmOrganizationId: string;
    farmOrganizationType: shared.FarmOrganizationTypeEnum;
}
export declare class FetchFarmOrganizationByTypeAndIdSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
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
