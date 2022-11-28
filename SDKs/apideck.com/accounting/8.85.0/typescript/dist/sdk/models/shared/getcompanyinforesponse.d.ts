import { SpeakeasyBase } from "../../../internal/utils";
import { CompanyInfo } from "./companyinfo";
export declare class GetCompanyInfoResponse extends SpeakeasyBase {
    data: CompanyInfo;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
