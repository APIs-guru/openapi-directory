import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeEnum } from "./ruletypeenum";



export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RuleTypeEnum;
}
