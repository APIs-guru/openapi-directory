import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RadiusChallengeResponse
/** 
 * RADIUS challenge reply
**/
export class RadiusChallengeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: number;

  @Metadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=replyMessage" })
  replyMessage: string;

  @Metadata({ data: "json, name=replyState" })
  replyState: string;
}
