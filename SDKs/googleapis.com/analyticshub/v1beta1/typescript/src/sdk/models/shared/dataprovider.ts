import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataProvider
/** 
 * Contains details of the data provider.
**/
export class DataProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primaryContact" })
  primaryContact?: string;
}
