import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainSuggestion
/** 
 * Information about one suggested domain name.
**/
export class DomainSuggestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Availability" })
  availability?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;
}
