import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateQualificationType = "MTurkRequesterServiceV20170117.CreateQualificationType"
}


export class CreateQualificationTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateQualificationTypeXAmzTargetEnum;
}


export class CreateQualificationTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateQualificationTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateQualificationTypeRequest;
}


export class CreateQualificationTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createQualificationTypeResponse?: shared.CreateQualificationTypeResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
