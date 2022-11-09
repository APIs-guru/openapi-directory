import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecordError } from "./recorderror";
import { RecordTag } from "./recordtag";
import { RecordStatusEnum } from "./recordstatusenum";


// RecordDetail
/** 
 * Information about a request operation.
**/
export class RecordDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=LaunchRoleArn" })
  launchRoleArn?: string;

  @Metadata({ data: "json, name=PathId" })
  pathId?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @Metadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;

  @Metadata({ data: "json, name=ProvisionedProductType" })
  provisionedProductType?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @Metadata({ data: "json, name=RecordErrors", elemType: shared.RecordError })
  recordErrors?: RecordError[];

  @Metadata({ data: "json, name=RecordId" })
  recordId?: string;

  @Metadata({ data: "json, name=RecordTags", elemType: shared.RecordTag })
  recordTags?: RecordTag[];

  @Metadata({ data: "json, name=RecordType" })
  recordType?: string;

  @Metadata({ data: "json, name=Status" })
  status?: RecordStatusEnum;

  @Metadata({ data: "json, name=UpdatedTime" })
  updatedTime?: Date;
}
