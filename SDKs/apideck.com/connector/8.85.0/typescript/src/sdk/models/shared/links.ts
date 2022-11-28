import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Links
/** 
 * Links to navigate to previous or next pages through the API
**/
export class Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}
