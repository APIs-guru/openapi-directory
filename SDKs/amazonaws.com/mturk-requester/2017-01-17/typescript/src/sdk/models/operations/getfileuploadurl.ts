import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFileUploadUrlxAmzTargetEnum {
    MTurkRequesterServiceV20170117GetFileUploadUrl = "MTurkRequesterServiceV20170117.GetFileUploadURL"
}


export class GetFileUploadUrlHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetFileUploadUrlxAmzTargetEnum;
}


export class GetFileUploadUrlRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetFileUploadUrlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetFileUploadUrlRequest;
}


export class GetFileUploadUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getFileUploadUrlResponse?: shared.GetFileUploadUrlResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
