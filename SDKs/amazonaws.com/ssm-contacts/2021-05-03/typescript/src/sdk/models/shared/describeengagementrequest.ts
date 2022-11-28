import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEngagementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EngagementId" })
  engagementId: string;
}
