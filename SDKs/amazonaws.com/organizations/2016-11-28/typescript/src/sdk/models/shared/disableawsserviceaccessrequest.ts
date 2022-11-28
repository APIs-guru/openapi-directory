import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisableAwsServiceAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal: string;
}
