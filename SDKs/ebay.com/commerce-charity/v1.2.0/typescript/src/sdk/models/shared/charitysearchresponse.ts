import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CharityOrg } from "./charityorg";


// CharitySearchResponse
/** 
 * A single set of search results, with information for accessing other sets.
**/
export class CharitySearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=charityOrgs", elemType: shared.CharityOrg })
  charityOrgs?: CharityOrg[];

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
