import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDataIngestionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}
