import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceRecord
/** 
 * Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate.
**/
export class ResourceRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
