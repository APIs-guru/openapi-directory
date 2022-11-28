import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductStatusEnum } from "./provisionedproductstatusenum";



// ProvisionedProductDetail
/** 
 * Information about a provisioned product.
**/
export class ProvisionedProductDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @SpeakeasyMetadata({ data: "json, name=LastProvisioningRecordId" })
  lastProvisioningRecordId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastRecordId" })
  lastRecordId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastSuccessfulProvisioningRecordId" })
  lastSuccessfulProvisioningRecordId?: string;

  @SpeakeasyMetadata({ data: "json, name=LaunchRoleArn" })
  launchRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProvisionedProductStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
