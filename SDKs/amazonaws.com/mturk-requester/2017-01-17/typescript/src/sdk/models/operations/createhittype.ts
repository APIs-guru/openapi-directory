import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateHitTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateHitType = "MTurkRequesterServiceV20170117.CreateHITType"
}


export class CreateHitTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateHitTypeXAmzTargetEnum;
}


export class CreateHitTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateHitTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateHitTypeRequest;
}


export class CreateHitTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createHitTypeResponse?: shared.CreateHitTypeResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
