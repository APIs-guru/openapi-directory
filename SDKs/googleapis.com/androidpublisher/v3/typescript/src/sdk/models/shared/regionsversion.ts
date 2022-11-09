import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionsVersion
/** 
 * The version of the available regions being used for the specified resource.
**/
export class RegionsVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: string;
}
