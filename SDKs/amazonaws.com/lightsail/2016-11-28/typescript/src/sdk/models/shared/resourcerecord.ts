import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceRecord
/** 
 * Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate.
**/
export class ResourceRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
