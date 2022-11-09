import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebPropertySummary } from "./webpropertysummary";


// AccountSummary
/** 
 * JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
**/
export class AccountSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=starred" })
  starred?: boolean;

  @Metadata({ data: "json, name=webProperties", elemType: shared.WebPropertySummary })
  webProperties?: WebPropertySummary[];
}
