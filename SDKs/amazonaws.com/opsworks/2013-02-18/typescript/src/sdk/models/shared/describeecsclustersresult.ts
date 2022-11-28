import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EcsCluster } from "./ecscluster";



// DescribeEcsClustersResult
/** 
 * Contains the response to a <code>DescribeEcsClusters</code> request.
**/
export class DescribeEcsClustersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EcsClusters", elemType: EcsCluster })
  ecsClusters?: EcsCluster[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
