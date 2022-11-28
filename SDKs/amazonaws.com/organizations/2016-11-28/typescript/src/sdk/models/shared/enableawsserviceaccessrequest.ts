import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableAwsServiceAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal: string;
}
