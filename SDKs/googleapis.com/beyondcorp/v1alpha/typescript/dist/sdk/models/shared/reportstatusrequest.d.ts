import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceInfo } from "./resourceinfo";
/**
 * Request report the connector status.
**/
export declare class ReportStatusRequest extends SpeakeasyBase {
    requestId?: string;
    resourceInfo?: ResourceInfo;
    validateOnly?: boolean;
}
