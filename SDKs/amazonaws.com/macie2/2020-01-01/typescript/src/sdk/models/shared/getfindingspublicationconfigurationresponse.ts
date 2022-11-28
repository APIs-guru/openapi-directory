import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityHubConfiguration } from "./securityhubconfiguration";



export class GetFindingsPublicationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityHubConfiguration" })
  securityHubConfiguration?: SecurityHubConfiguration;
}
