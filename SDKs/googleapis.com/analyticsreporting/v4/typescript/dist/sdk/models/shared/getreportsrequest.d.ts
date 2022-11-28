import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRequest } from "./reportrequest";
/**
 * The batch request containing multiple report request.
**/
export declare class GetReportsRequest extends SpeakeasyBase {
    reportRequests?: ReportRequest[];
    useResourceQuotas?: boolean;
}
