import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum NotifyWorkersXAmzTargetEnum {
    MTurkRequesterServiceV20170117NotifyWorkers = "MTurkRequesterServiceV20170117.NotifyWorkers"
}


export class NotifyWorkersHeaders extends SpeakeasyBase {
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
  xAmzTarget: NotifyWorkersXAmzTargetEnum;
}


export class NotifyWorkersRequest extends SpeakeasyBase {
  @Metadata()
  headers: NotifyWorkersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NotifyWorkersRequest;
}


export class NotifyWorkersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notifyWorkersResponse?: shared.NotifyWorkersResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
