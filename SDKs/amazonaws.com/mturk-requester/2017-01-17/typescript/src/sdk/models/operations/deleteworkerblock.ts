import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteWorkerBlockXAmzTargetEnum {
    MTurkRequesterServiceV20170117DeleteWorkerBlock = "MTurkRequesterServiceV20170117.DeleteWorkerBlock"
}


export class DeleteWorkerBlockHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteWorkerBlockXAmzTargetEnum;
}


export class DeleteWorkerBlockRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteWorkerBlockHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteWorkerBlockRequest;
}


export class DeleteWorkerBlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteWorkerBlockResponse?: Map<string, any>;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
