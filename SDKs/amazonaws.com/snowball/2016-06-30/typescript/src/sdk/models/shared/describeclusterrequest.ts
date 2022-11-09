import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
