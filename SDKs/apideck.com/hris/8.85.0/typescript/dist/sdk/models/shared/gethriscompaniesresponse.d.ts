import { SpeakeasyBase } from "../../../internal/utils";
import { HrisCompany } from "./hriscompany";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetHrisCompaniesResponse extends SpeakeasyBase {
    data: HrisCompany[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
