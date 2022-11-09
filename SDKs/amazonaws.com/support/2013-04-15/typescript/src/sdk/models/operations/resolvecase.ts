import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ResolveCaseXAmzTargetEnum {
    AwsSupport20130415ResolveCase = "AWSSupport_20130415.ResolveCase"
}


export class ResolveCaseHeaders extends SpeakeasyBase {
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
  xAmzTarget: ResolveCaseXAmzTargetEnum;
}


export class ResolveCaseRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResolveCaseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResolveCaseRequest;
}


export class ResolveCaseResponse extends SpeakeasyBase {
  @Metadata()
  caseIdNotFound?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resolveCaseResponse?: shared.ResolveCaseResponse;

  @Metadata()
  statusCode: number;
}
