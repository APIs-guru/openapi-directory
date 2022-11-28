import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdSource
/** 
 * Definition of a mediation ad source.
**/
export class AdSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adSourceId" })
  adSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
