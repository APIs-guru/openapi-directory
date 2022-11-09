import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateQualificationType = "MTurkRequesterServiceV20170117.UpdateQualificationType"
}


export class UpdateQualificationTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateQualificationTypeXAmzTargetEnum;
}


export class UpdateQualificationTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateQualificationTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateQualificationTypeRequest;
}


export class UpdateQualificationTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateQualificationTypeResponse?: shared.UpdateQualificationTypeResponse;
}
