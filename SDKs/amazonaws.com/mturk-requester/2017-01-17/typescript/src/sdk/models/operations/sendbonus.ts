import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SendBonusXAmzTargetEnum {
    MTurkRequesterServiceV20170117SendBonus = "MTurkRequesterServiceV20170117.SendBonus"
}


export class SendBonusHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: SendBonusXAmzTargetEnum;
}


export class SendBonusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendBonusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SendBonusRequest;
}


export class SendBonusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  requestError?: any;

  @SpeakeasyMetadata()
  sendBonusResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  serviceFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
