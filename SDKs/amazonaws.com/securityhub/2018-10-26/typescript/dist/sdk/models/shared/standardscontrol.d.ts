import { SpeakeasyBase } from "../../../internal/utils";
import { ControlStatusEnum } from "./controlstatusenum";
import { SeverityRatingEnum } from "./severityratingenum";
/**
 * Details for an individual security standard control.
**/
export declare class StandardsControl extends SpeakeasyBase {
    controlId?: string;
    controlStatus?: ControlStatusEnum;
    controlStatusUpdatedAt?: Date;
    description?: string;
    disabledReason?: string;
    relatedRequirements?: string[];
    remediationUrl?: string;
    severityRating?: SeverityRatingEnum;
    standardsControlArn?: string;
    title?: string;
}
