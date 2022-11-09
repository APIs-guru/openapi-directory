import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Alias
/** 
 * JSON template for Alias object in Directory API.
**/
export class Alias extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;
}
