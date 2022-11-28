import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetaCursors
/** 
 * Cursors to navigate to previous or next pages through the API
**/
export class MetaCursors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


// Meta
/** 
 * Response metadata
**/
export class Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursors" })
  cursors?: MetaCursors;

  @SpeakeasyMetadata({ data: "json, name=items_on_page" })
  itemsOnPage?: number;
}
