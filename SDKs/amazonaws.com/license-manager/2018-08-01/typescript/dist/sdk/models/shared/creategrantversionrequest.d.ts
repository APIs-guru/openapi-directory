import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedOperationEnum } from "./allowedoperationenum";
import { GrantStatusEnum } from "./grantstatusenum";
export declare class CreateGrantVersionRequest extends SpeakeasyBase {
    allowedOperations?: AllowedOperationEnum[];
    clientToken: string;
    grantArn: string;
    grantName?: string;
    sourceVersion?: string;
    status?: GrantStatusEnum;
    statusReason?: string;
}
