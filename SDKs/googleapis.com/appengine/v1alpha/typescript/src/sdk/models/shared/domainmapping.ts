import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceRecord } from "./resourcerecord";
import { SslSettings } from "./sslsettings";


// DomainMapping
/** 
 * A domain serving an App Engine application.
**/
export class DomainMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceRecords", elemType: shared.ResourceRecord })
  resourceRecords?: ResourceRecord[];

  @Metadata({ data: "json, name=sslSettings" })
  sslSettings?: SslSettings;
}
