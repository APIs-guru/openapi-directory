import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisableAwsServiceAccessRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal: string;
}
