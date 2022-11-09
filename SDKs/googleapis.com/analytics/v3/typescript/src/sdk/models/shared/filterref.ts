import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FilterRef
/** 
 * JSON template for a profile filter link.
**/
export class FilterRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
