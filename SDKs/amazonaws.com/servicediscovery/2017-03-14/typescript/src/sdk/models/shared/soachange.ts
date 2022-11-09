import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoaChange
/** 
 * Updated Start of Authority (SOA) properties for a public or private DNS namespace.
**/
export class SoaChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=TTL" })
  ttl: number;
}
