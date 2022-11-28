import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainConfiguration } from "./domainconfiguration";
import { DomainInfo } from "./domaininfo";



// DomainDetail
/** 
 * Contains details of a domain.
**/
export class DomainDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration: DomainConfiguration;

  @SpeakeasyMetadata({ data: "json, name=domainInfo" })
  domainInfo: DomainInfo;
}
