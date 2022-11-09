import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UnifiedId } from "./unifiedid";
export declare class UpdateLeadResponse extends SpeakeasyBase {
    data: UnifiedId;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
