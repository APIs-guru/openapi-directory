import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Feature
/** 
 * JSON template for Feature object in Directory API.
**/
export class Feature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etags" })
  etags?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
