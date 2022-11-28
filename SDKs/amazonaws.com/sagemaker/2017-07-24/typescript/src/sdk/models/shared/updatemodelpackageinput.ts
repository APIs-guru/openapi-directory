import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";



export class UpdateModelPackageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApprovalDescription" })
  approvalDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus: ModelApprovalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageArn" })
  modelPackageArn: string;
}
