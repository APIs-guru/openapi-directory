import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAttackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttackId" })
  attackId: string;
}
