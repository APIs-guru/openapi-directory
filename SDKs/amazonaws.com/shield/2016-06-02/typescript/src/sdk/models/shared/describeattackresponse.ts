import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttackDetail } from "./attackdetail";


export class DescribeAttackResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attack" })
  attack?: AttackDetail;
}
