import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Rule
/** 
 * Rule
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=$collection" })
  dollarCollection: string;

  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=array" })
  array: boolean;

  @Metadata({ data: "json, name=default" })
  default: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=list" })
  list: string[];

  @Metadata({ data: "json, name=required" })
  required: boolean;

  @Metadata({ data: "json, name=type" })
  type: string;
}
