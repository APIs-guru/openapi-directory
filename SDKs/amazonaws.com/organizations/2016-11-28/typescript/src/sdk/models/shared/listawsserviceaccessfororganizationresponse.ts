import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnabledServicePrincipal } from "./enabledserviceprincipal";



export class ListAwsServiceAccessForOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnabledServicePrincipals", elemType: EnabledServicePrincipal })
  enabledServicePrincipals?: EnabledServicePrincipal[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
