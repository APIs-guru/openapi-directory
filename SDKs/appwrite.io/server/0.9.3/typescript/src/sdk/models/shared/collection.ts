import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";


// Collection
/** 
 * Collection
**/
export class Collection extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=$permissions" })
  dollarPermissions: Map<string, any>;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @Metadata({ data: "json, name=dateUpdated" })
  dateUpdated: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: Rule[];
}
