import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainConfiguration } from "./domainconfiguration";
import { DomainInfo } from "./domaininfo";


// DomainDetail
/** 
 * Contains details of a domain.
**/
export class DomainDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration: DomainConfiguration;

  @Metadata({ data: "json, name=domainInfo" })
  domainInfo: DomainInfo;
}
