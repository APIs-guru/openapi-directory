import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuleOption
/** 
 * Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.
**/
export class RuleOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=Keyword" })
  keyword: string;

  @Metadata({ data: "json, name=Settings" })
  settings?: string[];
}
