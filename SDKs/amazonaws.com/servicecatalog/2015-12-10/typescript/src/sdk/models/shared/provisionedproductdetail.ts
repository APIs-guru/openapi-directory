import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedProductStatusEnum } from "./provisionedproductstatusenum";


// ProvisionedProductDetail
/** 
 * Information about a provisioned product.
**/
export class ProvisionedProductDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @Metadata({ data: "json, name=LastProvisioningRecordId" })
  lastProvisioningRecordId?: string;

  @Metadata({ data: "json, name=LastRecordId" })
  lastRecordId?: string;

  @Metadata({ data: "json, name=LastSuccessfulProvisioningRecordId" })
  lastSuccessfulProvisioningRecordId?: string;

  @Metadata({ data: "json, name=LaunchRoleArn" })
  launchRoleArn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ProvisionedProductStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
