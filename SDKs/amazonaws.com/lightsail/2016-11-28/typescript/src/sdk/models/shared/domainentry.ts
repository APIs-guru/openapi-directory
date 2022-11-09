import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainEntry
/** 
 * Describes a domain recordset entry.
**/
export class DomainEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isAlias" })
  isAlias?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options" })
  options?: Map<string, string>;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
