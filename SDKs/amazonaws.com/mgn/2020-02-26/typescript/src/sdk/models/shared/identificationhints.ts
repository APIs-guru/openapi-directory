import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentificationHints
/** 
 * Identification hints.
**/
export class IdentificationHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsInstanceID" })
  awsInstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=vmWareUuid" })
  vmWareUuid?: string;
}
