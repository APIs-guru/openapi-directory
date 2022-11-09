import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEdgePackagingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EdgePackagingJobName" })
  edgePackagingJobName: string;
}
