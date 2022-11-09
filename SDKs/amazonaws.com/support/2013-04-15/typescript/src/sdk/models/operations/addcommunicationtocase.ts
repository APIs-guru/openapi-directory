import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddCommunicationToCaseXAmzTargetEnum {
    AwsSupport20130415AddCommunicationToCase = "AWSSupport_20130415.AddCommunicationToCase"
}


export class AddCommunicationToCaseHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddCommunicationToCaseXAmzTargetEnum;
}


export class AddCommunicationToCaseRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddCommunicationToCaseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddCommunicationToCaseRequest;
}


export class AddCommunicationToCaseResponse extends SpeakeasyBase {
  @Metadata()
  addCommunicationToCaseResponse?: shared.AddCommunicationToCaseResponse;

  @Metadata()
  attachmentSetExpired?: any;

  @Metadata()
  attachmentSetIdNotFound?: any;

  @Metadata()
  caseIdNotFound?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
