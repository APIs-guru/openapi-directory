import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecurityHubConfiguration } from "./securityhubconfiguration";


export class GetFindingsPublicationConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityHubConfiguration" })
  securityHubConfiguration?: SecurityHubConfiguration;
}
