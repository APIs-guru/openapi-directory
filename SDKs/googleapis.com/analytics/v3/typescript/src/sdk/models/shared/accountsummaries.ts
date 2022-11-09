import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountSummary } from "./accountsummary";


// AccountSummaries
/** 
 * An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.
**/
export class AccountSummaries extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.AccountSummary })
  items?: AccountSummary[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @Metadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
