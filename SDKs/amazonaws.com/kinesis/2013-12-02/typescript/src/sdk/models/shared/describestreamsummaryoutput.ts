import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamDescriptionSummary } from "./streamdescriptionsummary";


export class DescribeStreamSummaryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamDescriptionSummary" })
  streamDescriptionSummary: StreamDescriptionSummary;
}
