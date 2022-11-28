import { SpeakeasyBase } from "../../../internal/utils";
import { HrisCompany } from "./hriscompany";
export declare class GetHrisCompanyResponse extends SpeakeasyBase {
    data: HrisCompany;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
