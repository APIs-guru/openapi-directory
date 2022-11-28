import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";
/**
 * A complex type that contains information about a specified operation.
**/
export declare class Operation extends SpeakeasyBase {
    createDate?: Date;
    errorCode?: string;
    errorMessage?: string;
    id?: string;
    status?: OperationStatusEnum;
    targets?: Map<string, string>;
    type?: OperationTypeEnum;
    updateDate?: Date;
}
