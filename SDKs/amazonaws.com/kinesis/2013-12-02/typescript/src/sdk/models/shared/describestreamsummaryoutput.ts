import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamDescriptionSummary } from "./streamdescriptionsummary";



export class DescribeStreamSummaryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamDescriptionSummary" })
  streamDescriptionSummary: StreamDescriptionSummary;
}
