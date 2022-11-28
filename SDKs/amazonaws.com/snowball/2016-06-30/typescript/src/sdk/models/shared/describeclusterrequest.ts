import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
