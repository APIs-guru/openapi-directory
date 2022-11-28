import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxyTargetGroup } from "./dbproxytargetgroup";



export class ModifyDbProxyTargetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbProxyTargetGroup?: DbProxyTargetGroup;
}
