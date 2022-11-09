import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControlStatusEnum } from "./controlstatusenum";
import { SeverityRatingEnum } from "./severityratingenum";


// StandardsControl
/** 
 * Details for an individual security standard control.
**/
export class StandardsControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlId" })
  controlId?: string;

  @Metadata({ data: "json, name=ControlStatus" })
  controlStatus?: ControlStatusEnum;

  @Metadata({ data: "json, name=ControlStatusUpdatedAt" })
  controlStatusUpdatedAt?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisabledReason" })
  disabledReason?: string;

  @Metadata({ data: "json, name=RelatedRequirements" })
  relatedRequirements?: string[];

  @Metadata({ data: "json, name=RemediationUrl" })
  remediationUrl?: string;

  @Metadata({ data: "json, name=SeverityRating" })
  severityRating?: SeverityRatingEnum;

  @Metadata({ data: "json, name=StandardsControlArn" })
  standardsControlArn?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
