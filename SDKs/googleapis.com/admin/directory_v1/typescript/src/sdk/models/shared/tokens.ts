import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Token } from "./token";


// Tokens
/** 
 * JSON response template for List tokens operation in Directory API.
**/
export class Tokens extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Token })
  items?: Token[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
