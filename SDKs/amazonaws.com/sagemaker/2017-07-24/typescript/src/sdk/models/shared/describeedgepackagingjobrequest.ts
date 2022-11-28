import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEdgePackagingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobName" })
  edgePackagingJobName: string;
}
