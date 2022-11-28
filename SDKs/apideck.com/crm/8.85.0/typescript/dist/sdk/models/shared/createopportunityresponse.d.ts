import { SpeakeasyBase } from "../../../internal/utils";
import { UnifiedId } from "./unifiedid";
export declare class CreateOpportunityResponse extends SpeakeasyBase {
    data: UnifiedId;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
