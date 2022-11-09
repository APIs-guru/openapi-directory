import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleTypeEnum } from "./ruletypeenum";


export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config: string;

  @Metadata({ data: "json, name=type" })
  type?: RuleTypeEnum;
}
