import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddCommunicationToCaseXAmzTargetEnum {
    AwsSupport20130415AddCommunicationToCase = "AWSSupport_20130415.AddCommunicationToCase"
}


export class AddCommunicationToCaseHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddCommunicationToCaseXAmzTargetEnum;
}


export class AddCommunicationToCaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddCommunicationToCaseHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddCommunicationToCaseRequest;
}


export class AddCommunicationToCaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addCommunicationToCaseResponse?: shared.AddCommunicationToCaseResponse;

  @SpeakeasyMetadata()
  attachmentSetExpired?: any;

  @SpeakeasyMetadata()
  attachmentSetIdNotFound?: any;

  @SpeakeasyMetadata()
  caseIdNotFound?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
