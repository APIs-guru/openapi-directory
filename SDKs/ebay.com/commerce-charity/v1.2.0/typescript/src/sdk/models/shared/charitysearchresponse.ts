import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharityOrg } from "./charityorg";



// CharitySearchResponse
/** 
 * A single set of search results, with information for accessing other sets.
**/
export class CharitySearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charityOrgs", elemType: CharityOrg })
  charityOrgs?: CharityOrg[];

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
