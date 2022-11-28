import { SpeakeasyBase } from "../../../internal/utils";
import { InteractionGroupEnum } from "./interactiongroupenum";
/**
 * Interaction limit settings.
**/
export declare class InteractionLimitResponse extends SpeakeasyBase {
    expiresAt: Date;
    limit: InteractionGroupEnum;
    origin: string;
}
