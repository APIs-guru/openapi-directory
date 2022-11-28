import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Describes the failure of a license operation.
**/
export declare class LicenseOperationFailure extends SpeakeasyBase {
    errorMessage?: string;
    failureTime?: Date;
    metadataList?: Metadata[];
    operationName?: string;
    operationRequestedBy?: string;
    resourceArn?: string;
    resourceOwnerId?: string;
    resourceType?: ResourceTypeEnum;
}
