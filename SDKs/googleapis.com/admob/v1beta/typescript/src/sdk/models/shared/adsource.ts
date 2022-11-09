import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdSource
/** 
 * Definition of a mediation ad source.
**/
export class AdSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=adSourceId" })
  adSourceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
