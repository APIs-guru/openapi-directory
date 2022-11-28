import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttackDetail } from "./attackdetail";



export class DescribeAttackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attack" })
  attack?: AttackDetail;
}
