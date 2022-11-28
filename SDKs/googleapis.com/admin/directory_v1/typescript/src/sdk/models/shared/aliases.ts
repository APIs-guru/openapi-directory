import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Aliases
/** 
 * JSON response template to list aliases in Directory API.
**/
export class Aliases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases" })
  aliases?: any[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
