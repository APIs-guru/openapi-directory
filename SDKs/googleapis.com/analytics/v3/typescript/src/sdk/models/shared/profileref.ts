import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProfileRef
/** 
 * JSON template for a linked view (profile).
**/
export class ProfileRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
