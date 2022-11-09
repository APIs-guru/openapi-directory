import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UnifiedId } from "./unifiedid";
export declare class UpdateUserResponse extends SpeakeasyBase {
    data: UnifiedId;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
