import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendAlexaOfferToMasterHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class SendAlexaOfferToMasterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @SpeakeasyMetadata({ data: "json, name=MessagePayload" })
  messagePayload: string;

  @SpeakeasyMetadata({ data: "json, name=SenderClientId" })
  senderClientId: string;
}


export class SendAlexaOfferToMasterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendAlexaOfferToMasterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SendAlexaOfferToMasterRequestBody;
}


export class SendAlexaOfferToMasterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  sendAlexaOfferToMasterResponse?: shared.SendAlexaOfferToMasterResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
