import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { UserContext } from "./usercontext";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { TrialComponentSource } from "./trialcomponentsource";


// TrialComponentSummary
/** 
 * A summary of the properties of a trial component. To get all the properties, call the <a>DescribeTrialComponent</a> API and provide the <code>TrialComponentName</code>.
**/
export class TrialComponentSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: TrialComponentStatus;

  @Metadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;

  @Metadata({ data: "json, name=TrialComponentName" })
  trialComponentName?: string;

  @Metadata({ data: "json, name=TrialComponentSource" })
  trialComponentSource?: TrialComponentSource;
}
