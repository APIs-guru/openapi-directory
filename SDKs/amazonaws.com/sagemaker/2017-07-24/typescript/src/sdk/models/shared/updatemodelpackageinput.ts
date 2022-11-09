import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";


export class UpdateModelPackageInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApprovalDescription" })
  approvalDescription?: string;

  @Metadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus: ModelApprovalStatusEnum;

  @Metadata({ data: "json, name=ModelPackageArn" })
  modelPackageArn: string;
}
