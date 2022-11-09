import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentificationHints
/** 
 * Identification hints.
**/
export class IdentificationHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsInstanceID" })
  awsInstanceId?: string;

  @Metadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=vmWareUuid" })
  vmWareUuid?: string;
}
