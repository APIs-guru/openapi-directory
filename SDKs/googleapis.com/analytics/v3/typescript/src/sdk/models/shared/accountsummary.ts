import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebPropertySummary } from "./webpropertysummary";



// AccountSummary
/** 
 * JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
**/
export class AccountSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webProperties", elemType: WebPropertySummary })
  webProperties?: WebPropertySummary[];
}
