import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Rule
/** 
 * Rule
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$collection" })
  dollarCollection: string;

  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=array" })
  array: boolean;

  @SpeakeasyMetadata({ data: "json, name=default" })
  default: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=list" })
  list: string[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
