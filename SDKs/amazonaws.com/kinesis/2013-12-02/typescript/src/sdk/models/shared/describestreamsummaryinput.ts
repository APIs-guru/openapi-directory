import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeStreamSummaryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
