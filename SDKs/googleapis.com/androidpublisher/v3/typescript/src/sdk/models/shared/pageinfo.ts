import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PageInfo
/** 
 * Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
**/
export class PageInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=resultPerPage" })
  resultPerPage?: number;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
