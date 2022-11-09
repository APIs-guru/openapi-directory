import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationStatusEnum } from "./operationstatusenum";
/**
 * A complex type that contains information about an operation that matches the criteria that you specified in a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a> request.
**/
export declare class OperationSummary extends SpeakeasyBase {
    id?: string;
    status?: OperationStatusEnum;
}
