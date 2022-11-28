import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainSuggestion
/** 
 * Information about one suggested domain name.
**/
export class DomainSuggestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Availability" })
  availability?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;
}
