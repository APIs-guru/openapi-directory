import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Alias
/** 
 * JSON template for Alias object in Directory API.
**/
export class Alias extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;
}
