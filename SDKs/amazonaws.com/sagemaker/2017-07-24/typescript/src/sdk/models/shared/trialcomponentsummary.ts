import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { TrialComponentSource } from "./trialcomponentsource";



// TrialComponentSummary
/** 
 * A summary of the properties of a trial component. To get all the properties, call the <a>DescribeTrialComponent</a> API and provide the <code>TrialComponentName</code>.
**/
export class TrialComponentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TrialComponentStatus;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentName" })
  trialComponentName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentSource" })
  trialComponentSource?: TrialComponentSource;
}
