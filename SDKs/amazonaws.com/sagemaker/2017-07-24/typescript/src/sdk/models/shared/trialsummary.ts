import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrialSource } from "./trialsource";


// TrialSummary
/** 
 * A summary of the properties of a trial. To get the complete set of properties, call the <a>DescribeTrial</a> API and provide the <code>TrialName</code>.
**/
export class TrialSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=TrialArn" })
  trialArn?: string;

  @Metadata({ data: "json, name=TrialName" })
  trialName?: string;

  @Metadata({ data: "json, name=TrialSource" })
  trialSource?: TrialSource;
}
