import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStreamSummaryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
