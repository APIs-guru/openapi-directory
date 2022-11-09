import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Links
/** 
 * Links to navigate to previous or next pages through the API
**/
export class Links extends SpeakeasyBase {
  @Metadata({ data: "json, name=current" })
  current?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;
}
