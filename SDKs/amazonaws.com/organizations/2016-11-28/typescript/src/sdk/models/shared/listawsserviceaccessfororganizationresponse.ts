import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnabledServicePrincipal } from "./enabledserviceprincipal";


export class ListAwsServiceAccessForOrganizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnabledServicePrincipals", elemType: shared.EnabledServicePrincipal })
  enabledServicePrincipals?: EnabledServicePrincipal[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
