import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegionsVersion
/** 
 * The version of the available regions being used for the specified resource.
**/
export class RegionsVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
