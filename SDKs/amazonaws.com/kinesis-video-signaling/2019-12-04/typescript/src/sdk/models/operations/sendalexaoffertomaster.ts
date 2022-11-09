import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendAlexaOfferToMasterHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class SendAlexaOfferToMasterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @Metadata({ data: "json, name=MessagePayload" })
  messagePayload: string;

  @Metadata({ data: "json, name=SenderClientId" })
  senderClientId: string;
}


export class SendAlexaOfferToMasterRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendAlexaOfferToMasterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SendAlexaOfferToMasterRequestBody;
}


export class SendAlexaOfferToMasterResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  sendAlexaOfferToMasterResponse?: shared.SendAlexaOfferToMasterResponse;

  @Metadata()
  statusCode: number;
}
