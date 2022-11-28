import { SpeakeasyBase } from "../../../internal/utils";
import { UnifiedId } from "./unifiedid";
export declare class CreateSupplierResponse extends SpeakeasyBase {
    data: UnifiedId;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
