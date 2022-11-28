import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecord } from "./resourcerecord";
import { SslSettings } from "./sslsettings";



// DomainMapping
/** 
 * A domain serving an App Engine application.
**/
export class DomainMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceRecords", elemType: ResourceRecord })
  resourceRecords?: ResourceRecord[];

  @SpeakeasyMetadata({ data: "json, name=sslSettings" })
  sslSettings?: SslSettings;
}
