import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticsearchDomainServiceSoftwareOptions
/** 
 * Information about the state of the domain relative to the latest service software.
**/
export class AwsElasticsearchDomainServiceSoftwareOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomatedUpdateDate" })
  automatedUpdateDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Cancellable" })
  cancellable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CurrentVersion" })
  currentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=NewVersion" })
  newVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateAvailable" })
  updateAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UpdateStatus" })
  updateStatus?: string;
}
