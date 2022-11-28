import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorldGenerationJobErrorCodeEnum } from "./worldgenerationjoberrorcodeenum";



// WorldFailure
/** 
 * Information about a failed world.
**/
export class WorldFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: WorldGenerationJobErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @SpeakeasyMetadata({ data: "json, name=sampleFailureReason" })
  sampleFailureReason?: string;
}
