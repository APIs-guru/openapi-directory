import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";
/**
 * OperationSummary includes the following elements.
**/
export declare class OperationSummary extends SpeakeasyBase {
    operationId: string;
    status: OperationStatusEnum;
    submittedDate: Date;
    type: OperationTypeEnum;
}
