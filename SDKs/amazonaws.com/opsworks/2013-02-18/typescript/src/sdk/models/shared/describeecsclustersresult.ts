import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EcsCluster } from "./ecscluster";


// DescribeEcsClustersResult
/** 
 * Contains the response to a <code>DescribeEcsClusters</code> request.
**/
export class DescribeEcsClustersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EcsClusters", elemType: shared.EcsCluster })
  ecsClusters?: EcsCluster[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
