import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountChildLink } from "./account";



// Account1
/** 
 * JSON template for Analytics account entry.
**/
export class Account1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childLink" })
  childLink?: AccountChildLink;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
