import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryOrgunitsListPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare enum DirectoryOrgunitsListTypeEnum {
    All = "all",
    Children = "children"
}
export declare class DirectoryOrgunitsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orgUnitPath?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    type?: DirectoryOrgunitsListTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryOrgunitsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryOrgunitsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryOrgunitsListSecurity extends SpeakeasyBase {
    option1?: DirectoryOrgunitsListSecurityOption1;
    option2?: DirectoryOrgunitsListSecurityOption2;
}
export declare class DirectoryOrgunitsListRequest extends SpeakeasyBase {
    pathParams: DirectoryOrgunitsListPathParams;
    queryParams: DirectoryOrgunitsListQueryParams;
    security: DirectoryOrgunitsListSecurity;
}
export declare class DirectoryOrgunitsListResponse extends SpeakeasyBase {
    contentType: string;
    orgUnits?: shared.OrgUnits;
    statusCode: number;
}
