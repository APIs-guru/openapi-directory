import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
export declare class GetCompanyResponse extends SpeakeasyBase {
    data: Company;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
