import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountRef
/** 
 * JSON template for a linked account.
**/
export class AccountRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
