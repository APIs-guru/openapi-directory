import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";



export class DescribeTrackerResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=TrackerArn" })
  trackerArn: string;

  @SpeakeasyMetadata({ data: "json, name=TrackerName" })
  trackerName: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
