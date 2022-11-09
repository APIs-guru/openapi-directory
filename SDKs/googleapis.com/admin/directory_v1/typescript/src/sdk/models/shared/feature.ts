import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Feature
/** 
 * JSON template for Feature object in Directory API.
**/
export class Feature extends SpeakeasyBase {
  @Metadata({ data: "json, name=etags" })
  etags?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
