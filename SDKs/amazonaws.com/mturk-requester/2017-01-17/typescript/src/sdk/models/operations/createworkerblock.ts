import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateWorkerBlockXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateWorkerBlock = "MTurkRequesterServiceV20170117.CreateWorkerBlock"
}


export class CreateWorkerBlockHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateWorkerBlockXAmzTargetEnum;
}


export class CreateWorkerBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateWorkerBlockHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateWorkerBlockRequest;
}


export class CreateWorkerBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createWorkerBlockResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  requestError?: any;

  @SpeakeasyMetadata()
  serviceFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
