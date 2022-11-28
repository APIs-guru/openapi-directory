import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";
/**
 * The GetOperationDetail response includes the following elements.
**/
export declare class GetOperationDetailResponse extends SpeakeasyBase {
    domainName?: string;
    message?: string;
    operationId?: string;
    status?: OperationStatusEnum;
    submittedDate?: Date;
    type?: OperationTypeEnum;
}
