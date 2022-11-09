import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InteractionGroupEnum } from "./interactiongroupenum";


// InteractionLimitResponse
/** 
 * Interaction limit settings.
**/
export class InteractionLimitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=expires_at" })
  expiresAt: Date;

  @Metadata({ data: "json, name=limit" })
  limit: InteractionGroupEnum;

  @Metadata({ data: "json, name=origin" })
  origin: string;
}
