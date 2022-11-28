import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetCompaniesResponse extends SpeakeasyBase {
    data: Company[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
