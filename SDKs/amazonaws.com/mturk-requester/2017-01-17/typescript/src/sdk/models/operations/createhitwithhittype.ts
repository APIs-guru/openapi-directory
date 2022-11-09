import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateHitWithHitTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateHitWithHitType = "MTurkRequesterServiceV20170117.CreateHITWithHITType"
}


export class CreateHitWithHitTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateHitWithHitTypeXAmzTargetEnum;
}


export class CreateHitWithHitTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateHitWithHitTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateHitWithHitTypeRequest;
}


export class CreateHitWithHitTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createHitWithHitTypeResponse?: shared.CreateHitWithHitTypeResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
