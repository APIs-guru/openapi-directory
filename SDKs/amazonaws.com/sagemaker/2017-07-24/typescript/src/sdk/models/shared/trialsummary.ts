import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrialSource } from "./trialsource";



// TrialSummary
/** 
 * A summary of the properties of a trial. To get the complete set of properties, call the <a>DescribeTrial</a> API and provide the <code>TrialName</code>.
**/
export class TrialSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrialArn" })
  trialArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialSource" })
  trialSource?: TrialSource;
}
