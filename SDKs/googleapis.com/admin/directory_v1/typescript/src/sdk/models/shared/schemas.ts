import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Schema } from "./schema";


// Schemas
/** 
 * JSON response template for List Schema operation in Directory API.
**/
export class Schemas extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=schemas", elemType: shared.Schema })
  schemas?: Schema[];
}
