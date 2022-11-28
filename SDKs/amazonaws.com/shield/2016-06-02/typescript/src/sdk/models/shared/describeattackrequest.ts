import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAttackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttackId" })
  attackId: string;
}
