import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxyTargetGroup } from "./dbproxytargetgroup";



export class DescribeDbProxyTargetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: DbProxyTargetGroup })
  targetGroups?: DbProxyTargetGroup[];
}
