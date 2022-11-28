import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RadiusChallengeResponse
/** 
 * RADIUS challenge reply
**/
export class RadiusChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: number;

  @SpeakeasyMetadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=replyMessage" })
  replyMessage: string;

  @SpeakeasyMetadata({ data: "json, name=replyState" })
  replyState: string;
}
