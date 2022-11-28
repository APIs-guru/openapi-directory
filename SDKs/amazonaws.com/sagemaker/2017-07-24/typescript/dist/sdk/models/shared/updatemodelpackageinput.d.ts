import { SpeakeasyBase } from "../../../internal/utils";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
export declare class UpdateModelPackageInput extends SpeakeasyBase {
    approvalDescription?: string;
    modelApprovalStatus: ModelApprovalStatusEnum;
    modelPackageArn: string;
}
