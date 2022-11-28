import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataProvider
/** 
 * Contains details of the data provider.
**/
export class DataProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContact" })
  primaryContact?: string;
}
