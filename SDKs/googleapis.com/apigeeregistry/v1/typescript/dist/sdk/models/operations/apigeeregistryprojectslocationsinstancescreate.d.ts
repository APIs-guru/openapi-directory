import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsInstancesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    instanceId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsInstancesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsInstancesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsInstancesCreatePathParams;
    queryParams: ApigeeregistryProjectsLocationsInstancesCreateQueryParams;
    request?: shared.InstanceInput;
    security: ApigeeregistryProjectsLocationsInstancesCreateSecurity;
}
export declare class ApigeeregistryProjectsLocationsInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
