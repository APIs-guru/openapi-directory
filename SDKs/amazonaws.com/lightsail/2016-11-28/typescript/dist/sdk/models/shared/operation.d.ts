import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { OperationTypeEnum } from "./operationtypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { OperationStatusEnum } from "./operationstatusenum";
/**
 * Describes the API operation.
**/
export declare class Operation extends SpeakeasyBase {
    createdAt?: Date;
    errorCode?: string;
    errorDetails?: string;
    id?: string;
    isTerminal?: boolean;
    location?: ResourceLocation;
    operationDetails?: string;
    operationType?: OperationTypeEnum;
    resourceName?: string;
    resourceType?: ResourceTypeEnum;
    status?: OperationStatusEnum;
    statusChangedAt?: Date;
}
