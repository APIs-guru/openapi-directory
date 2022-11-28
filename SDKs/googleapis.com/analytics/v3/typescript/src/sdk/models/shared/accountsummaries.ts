import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountSummary } from "./accountsummary";



// AccountSummaries
/** 
 * An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.
**/
export class AccountSummaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: AccountSummary })
  items?: AccountSummary[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
