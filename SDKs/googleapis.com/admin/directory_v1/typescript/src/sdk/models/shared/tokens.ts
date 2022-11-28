import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Token } from "./token";



// Tokens
/** 
 * JSON response template for List tokens operation in Directory API.
**/
export class Tokens extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Token })
  items?: Token[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
