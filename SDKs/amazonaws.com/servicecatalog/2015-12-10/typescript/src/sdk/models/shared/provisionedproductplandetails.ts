import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
import { ProvisionedProductPlanStatusEnum } from "./provisionedproductplanstatusenum";
import { Tag } from "./tag";



// ProvisionedProductPlanDetails
/** 
 * Information about a plan.
**/
export class ProvisionedProductPlanDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NotificationArns" })
  notificationArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=PathId" })
  pathId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlanId" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlanName" })
  planName?: string;

  @SpeakeasyMetadata({ data: "json, name=PlanType" })
  planType?: ProvisionedProductPlanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionProductId" })
  provisionProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionProductName" })
  provisionProductName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningParameters", elemType: UpdateProvisioningParameter })
  provisioningParameters?: UpdateProvisioningParameter[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProvisionedProductPlanStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UpdatedTime" })
  updatedTime?: Date;
}
