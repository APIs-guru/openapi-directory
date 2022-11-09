import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePresignedDomainUrlXAmzTargetEnum {
    SageMakerCreatePresignedDomainUrl = "SageMaker.CreatePresignedDomainUrl"
}


export class CreatePresignedDomainUrlHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePresignedDomainUrlXAmzTargetEnum;
}


export class CreatePresignedDomainUrlRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePresignedDomainUrlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePresignedDomainUrlRequest;
}


export class CreatePresignedDomainUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPresignedDomainUrlResponse?: shared.CreatePresignedDomainUrlResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
