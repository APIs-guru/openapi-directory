import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InteractionGroupEnum } from "./interactiongroupenum";



// InteractionLimitResponse
/** 
 * Interaction limit settings.
**/
export class InteractionLimitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt: Date;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit: InteractionGroupEnum;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin: string;
}
