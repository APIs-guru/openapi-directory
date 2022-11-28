import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsRecordEntity
/** 
 * Show site DNS configuration.
**/
export class DnsRecordEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=rrtype" })
  rrtype?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
