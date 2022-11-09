import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyIdSuperPathParams extends SpeakeasyBase {
    country: string;
    id: string;
}
export declare enum CompanyIdSuperLangEnum {
    Unknown = "",
    Og = "OG",
    En = "EN"
}
export declare class CompanyIdSuperQueryParams extends SpeakeasyBase {
    lang?: CompanyIdSuperLangEnum;
}
export declare class CompanyIdSuperSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyIdSuperRequest extends SpeakeasyBase {
    pathParams: CompanyIdSuperPathParams;
    queryParams: CompanyIdSuperQueryParams;
    security: CompanyIdSuperSecurity;
}
export declare class CompanyIdSuperResponse extends SpeakeasyBase {
    companyIdSuper200ApplicationJsonAnies?: any[];
    companyIdSuperDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
