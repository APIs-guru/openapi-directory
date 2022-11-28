import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
