import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Aliases
/** 
 * JSON response template to list aliases in Directory API.
**/
export class Aliases extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases" })
  aliases?: any[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
