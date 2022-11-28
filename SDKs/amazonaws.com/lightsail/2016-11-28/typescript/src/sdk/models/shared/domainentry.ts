import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainEntry
/** 
 * Describes a domain recordset entry.
**/
export class DomainEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isAlias" })
  isAlias?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
