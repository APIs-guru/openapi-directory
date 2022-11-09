import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PageBuildStatus
/** 
 * Page Build Status
**/
export class PageBuildStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
