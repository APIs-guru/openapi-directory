import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



// Collection
/** 
 * Collection
**/
export class Collection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=$permissions" })
  dollarPermissions: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @SpeakeasyMetadata({ data: "json, name=dateUpdated" })
  dateUpdated: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Rule })
  rules: Rule[];
}
