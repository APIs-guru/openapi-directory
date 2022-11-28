import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsCancelSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsCancelSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsCancelSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsCancelSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminOperationsCancelSecurity extends SpeakeasyBase {
    option1?: BigtableadminOperationsCancelSecurityOption1;
    option2?: BigtableadminOperationsCancelSecurityOption2;
    option3?: BigtableadminOperationsCancelSecurityOption3;
    option4?: BigtableadminOperationsCancelSecurityOption4;
    option5?: BigtableadminOperationsCancelSecurityOption5;
    option6?: BigtableadminOperationsCancelSecurityOption6;
}
export declare class BigtableadminOperationsCancelRequest extends SpeakeasyBase {
    pathParams: BigtableadminOperationsCancelPathParams;
    queryParams: BigtableadminOperationsCancelQueryParams;
    security: BigtableadminOperationsCancelSecurity;
}
export declare class BigtableadminOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
