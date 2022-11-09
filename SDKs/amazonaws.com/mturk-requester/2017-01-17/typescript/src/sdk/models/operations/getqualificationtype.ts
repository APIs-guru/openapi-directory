import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetQualificationType = "MTurkRequesterServiceV20170117.GetQualificationType"
}


export class GetQualificationTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetQualificationTypeXAmzTargetEnum;
}


export class GetQualificationTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetQualificationTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetQualificationTypeRequest;
}


export class GetQualificationTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQualificationTypeResponse?: shared.GetQualificationTypeResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
