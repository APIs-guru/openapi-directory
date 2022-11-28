import { SpeakeasyBase } from "../../../internal/utils";
import { Supplier } from "./supplier";
export declare class GetSupplierResponse extends SpeakeasyBase {
    data: Supplier;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
