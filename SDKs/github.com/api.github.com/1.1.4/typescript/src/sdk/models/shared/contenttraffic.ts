import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContentTraffic
/** 
 * Content Traffic
**/
export class ContentTraffic extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=uniques" })
  uniques: number;
}
