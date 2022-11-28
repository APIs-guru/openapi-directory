import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";



export class DescribeGeofenceCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionArn" })
  collectionArn: string;

  @SpeakeasyMetadata({ data: "json, name=CollectionName" })
  collectionName: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=PricingPlanDataSource" })
  pricingPlanDataSource?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
