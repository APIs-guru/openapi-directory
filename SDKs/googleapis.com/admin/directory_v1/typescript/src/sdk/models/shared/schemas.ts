import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Schema } from "./schema";



// Schemas
/** 
 * JSON response template for List Schema operation in Directory API.
**/
export class Schemas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=schemas", elemType: Schema })
  schemas?: Schema[];
}
