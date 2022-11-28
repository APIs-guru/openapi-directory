import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoaChange
/** 
 * Updated Start of Authority (SOA) properties for a public or private DNS namespace.
**/
export class SoaChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TTL" })
  ttl: number;
}
