import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxyTarget } from "./dbproxytarget";



export class RegisterDbProxyTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbProxyTarget })
  dbProxyTargets?: DbProxyTarget[];
}
