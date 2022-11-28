import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControlStatusEnum } from "./controlstatusenum";
import { SeverityRatingEnum } from "./severityratingenum";



// StandardsControl
/** 
 * Details for an individual security standard control.
**/
export class StandardsControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlId" })
  controlId?: string;

  @SpeakeasyMetadata({ data: "json, name=ControlStatus" })
  controlStatus?: ControlStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ControlStatusUpdatedAt" })
  controlStatusUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisabledReason" })
  disabledReason?: string;

  @SpeakeasyMetadata({ data: "json, name=RelatedRequirements" })
  relatedRequirements?: string[];

  @SpeakeasyMetadata({ data: "json, name=RemediationUrl" })
  remediationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=SeverityRating" })
  severityRating?: SeverityRatingEnum;

  @SpeakeasyMetadata({ data: "json, name=StandardsControlArn" })
  standardsControlArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
