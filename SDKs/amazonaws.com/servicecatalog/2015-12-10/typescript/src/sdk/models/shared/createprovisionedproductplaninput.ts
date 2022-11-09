import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
import { Tag } from "./tag";


export class CreateProvisionedProductPlanInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=NotificationArns" })
  notificationArns?: string[];

  @Metadata({ data: "json, name=PathId" })
  pathId?: string;

  @Metadata({ data: "json, name=PlanName" })
  planName: string;

  @Metadata({ data: "json, name=PlanType" })
  planType: ProvisionedProductPlanTypeEnum;

  @Metadata({ data: "json, name=ProductId" })
  productId: string;

  @Metadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;

  @Metadata({ data: "json, name=ProvisioningParameters", elemType: shared.UpdateProvisioningParameter })
  provisioningParameters?: UpdateProvisioningParameter[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
