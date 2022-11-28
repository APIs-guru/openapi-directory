import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuleOption
/** 
 * Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.
**/
export class RuleOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Keyword" })
  keyword: string;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: string[];
}
