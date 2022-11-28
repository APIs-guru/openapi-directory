import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductStatusEnum } from "./provisionedproductstatusenum";
import { Tag } from "./tag";



// ProvisionedProductAttribute
/** 
 * Information about a provisioned product.
**/
export class ProvisionedProductAttribute extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PhysicalId" })
  physicalId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactName" })
  provisioningArtifactName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProvisionedProductStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=UserArn" })
  userArn?: string;

  @SpeakeasyMetadata({ data: "json, name=UserArnSession" })
  userArnSession?: string;
}
