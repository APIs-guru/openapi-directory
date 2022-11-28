import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStackSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
