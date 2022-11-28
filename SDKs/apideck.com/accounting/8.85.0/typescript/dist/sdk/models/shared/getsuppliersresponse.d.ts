import { SpeakeasyBase } from "../../../internal/utils";
import { Supplier } from "./supplier";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetSuppliersResponse extends SpeakeasyBase {
    data: Supplier[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
