import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ResolveCaseXAmzTargetEnum {
    AwsSupport20130415ResolveCase = "AWSSupport_20130415.ResolveCase"
}


export class ResolveCaseHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ResolveCaseXAmzTargetEnum;
}


export class ResolveCaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ResolveCaseHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ResolveCaseRequest;
}


export class ResolveCaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  caseIdNotFound?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  resolveCaseResponse?: shared.ResolveCaseResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
