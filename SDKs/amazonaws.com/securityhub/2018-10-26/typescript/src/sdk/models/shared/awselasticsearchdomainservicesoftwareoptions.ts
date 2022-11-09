import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticsearchDomainServiceSoftwareOptions
/** 
 * Information about the state of the domain relative to the latest service software.
**/
export class AwsElasticsearchDomainServiceSoftwareOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomatedUpdateDate" })
  automatedUpdateDate?: string;

  @Metadata({ data: "json, name=Cancellable" })
  cancellable?: boolean;

  @Metadata({ data: "json, name=CurrentVersion" })
  currentVersion?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=NewVersion" })
  newVersion?: string;

  @Metadata({ data: "json, name=UpdateAvailable" })
  updateAvailable?: boolean;

  @Metadata({ data: "json, name=UpdateStatus" })
  updateStatus?: string;
}
