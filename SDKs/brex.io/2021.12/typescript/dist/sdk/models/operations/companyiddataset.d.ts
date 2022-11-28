import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CompanyIdDatasetDatasetEnum {
    Unknown = "",
    Mini = "mini",
    Master = "master",
    Full = "full",
    Refresh = "refresh"
}
export declare class CompanyIdDatasetPathParams extends SpeakeasyBase {
    dataset: CompanyIdDatasetDatasetEnum;
    id: string;
}
export declare enum CompanyIdDatasetLangEnum {
    Unknown = "",
    En = "EN",
    Es = "ES",
    Fr = "FR"
}
export declare class CompanyIdDatasetQueryParams extends SpeakeasyBase {
    checkStockListing?: boolean;
    lang?: CompanyIdDatasetLangEnum;
}
export declare class CompanyIdDatasetSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyIdDatasetRequest extends SpeakeasyBase {
    pathParams: CompanyIdDatasetPathParams;
    queryParams: CompanyIdDatasetQueryParams;
    security: CompanyIdDatasetSecurity;
}
export declare class CompanyIdDatasetResponse extends SpeakeasyBase {
    companyIdDatasetDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
    oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany?: any;
}
