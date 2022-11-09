import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PricingPlanEnum } from "./pricingplanenum";


export class DescribeGeofenceCollectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionArn" })
  collectionArn: string;

  @Metadata({ data: "json, name=CollectionName" })
  collectionName: string;

  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @Metadata({ data: "json, name=PricingPlanDataSource" })
  pricingPlanDataSource?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
