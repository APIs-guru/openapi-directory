import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordError } from "./recorderror";
import { RecordTag } from "./recordtag";
import { RecordStatusEnum } from "./recordstatusenum";



// RecordDetail
/** 
 * Information about a request operation.
**/
export class RecordDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LaunchRoleArn" })
  launchRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PathId" })
  pathId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductType" })
  provisionedProductType?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordErrors", elemType: RecordError })
  recordErrors?: RecordError[];

  @SpeakeasyMetadata({ data: "json, name=RecordId" })
  recordId?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordTags", elemType: RecordTag })
  recordTags?: RecordTag[];

  @SpeakeasyMetadata({ data: "json, name=RecordType" })
  recordType?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RecordStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedTime" })
  updatedTime?: Date;
}
