import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SendBonusXAmzTargetEnum {
    MTurkRequesterServiceV20170117SendBonus = "MTurkRequesterServiceV20170117.SendBonus"
}


export class SendBonusHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: SendBonusXAmzTargetEnum;
}


export class SendBonusRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendBonusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendBonusRequest;
}


export class SendBonusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  requestError?: any;

  @Metadata()
  sendBonusResponse?: Map<string, any>;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
