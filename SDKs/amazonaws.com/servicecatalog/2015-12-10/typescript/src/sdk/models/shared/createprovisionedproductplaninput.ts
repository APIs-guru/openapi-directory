import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
import { Tag } from "./tag";



export class CreateProvisionedProductPlanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationArns" })
  notificationArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=PathId" })
  pathId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlanName" })
  planName: string;

  @SpeakeasyMetadata({ data: "json, name=PlanType" })
  planType: ProvisionedProductPlanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningParameters", elemType: UpdateProvisioningParameter })
  provisioningParameters?: UpdateProvisioningParameter[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
