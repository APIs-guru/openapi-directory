import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEngagementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngagementId" })
  engagementId: string;
}
