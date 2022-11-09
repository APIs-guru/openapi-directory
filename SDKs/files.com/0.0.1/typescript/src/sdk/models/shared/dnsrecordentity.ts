import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DnsRecordEntity
/** 
 * Show site DNS configuration.
**/
export class DnsRecordEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=rrtype" })
  rrtype?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
