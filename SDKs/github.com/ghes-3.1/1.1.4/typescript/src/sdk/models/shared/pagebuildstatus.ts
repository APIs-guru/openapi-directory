import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PageBuildStatus
/** 
 * Page Build Status
**/
export class PageBuildStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
