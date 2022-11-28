import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContentTraffic
/** 
 * Content Traffic
**/
export class ContentTraffic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=uniques" })
  uniques: number;
}
