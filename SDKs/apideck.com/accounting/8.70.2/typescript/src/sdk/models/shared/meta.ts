import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetaCursors
/** 
 * Cursors to navigate to previous or next pages through the API
**/
export class MetaCursors extends SpeakeasyBase {
  @Metadata({ data: "json, name=current" })
  current?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;
}


// Meta
/** 
 * Response metadata
**/
export class Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursors" })
  cursors?: MetaCursors;

  @Metadata({ data: "json, name=items_on_page" })
  itemsOnPage?: number;
}
