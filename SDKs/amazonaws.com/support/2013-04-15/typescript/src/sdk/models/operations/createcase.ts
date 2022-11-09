import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCaseXAmzTargetEnum {
    AwsSupport20130415CreateCase = "AWSSupport_20130415.CreateCase"
}


export class CreateCaseHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCaseXAmzTargetEnum;
}


export class CreateCaseRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCaseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCaseRequest;
}


export class CreateCaseResponse extends SpeakeasyBase {
  @Metadata()
  attachmentSetExpired?: any;

  @Metadata()
  attachmentSetIdNotFound?: any;

  @Metadata()
  caseCreationLimitExceeded?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCaseResponse?: shared.CreateCaseResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
