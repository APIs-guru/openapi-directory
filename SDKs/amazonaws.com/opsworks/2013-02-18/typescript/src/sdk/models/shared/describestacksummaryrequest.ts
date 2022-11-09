import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeStackSummaryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
