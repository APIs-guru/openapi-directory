import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
import { ProvisionedProductPlanStatusEnum } from "./provisionedproductplanstatusenum";
import { Tag } from "./tag";


// ProvisionedProductPlanDetails
/** 
 * Information about a plan.
**/
export class ProvisionedProductPlanDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=NotificationArns" })
  notificationArns?: string[];

  @Metadata({ data: "json, name=PathId" })
  pathId?: string;

  @Metadata({ data: "json, name=PlanId" })
  planId?: string;

  @Metadata({ data: "json, name=PlanName" })
  planName?: string;

  @Metadata({ data: "json, name=PlanType" })
  planType?: ProvisionedProductPlanTypeEnum;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=ProvisionProductId" })
  provisionProductId?: string;

  @Metadata({ data: "json, name=ProvisionProductName" })
  provisionProductName?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @Metadata({ data: "json, name=ProvisioningParameters", elemType: shared.UpdateProvisioningParameter })
  provisioningParameters?: UpdateProvisioningParameter[];

  @Metadata({ data: "json, name=Status" })
  status?: ProvisionedProductPlanStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UpdatedTime" })
  updatedTime?: Date;
}
