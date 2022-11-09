import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldGenerationJobErrorCodeEnum } from "./worldgenerationjoberrorcodeenum";


// WorldFailure
/** 
 * Information about a failed world.
**/
export class WorldFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCode" })
  failureCode?: WorldGenerationJobErrorCodeEnum;

  @Metadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @Metadata({ data: "json, name=sampleFailureReason" })
  sampleFailureReason?: string;
}
