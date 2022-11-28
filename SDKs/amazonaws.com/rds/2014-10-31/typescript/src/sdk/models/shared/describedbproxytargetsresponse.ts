import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxyTarget } from "./dbproxytarget";



export class DescribeDbProxyTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: DbProxyTarget })
  targets?: DbProxyTarget[];
}
