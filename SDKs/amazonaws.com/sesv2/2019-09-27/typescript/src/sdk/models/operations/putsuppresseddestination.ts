import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSuppressedDestinationHeaders extends SpeakeasyBase {
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
}

export enum PutSuppressedDestinationRequestBodyReasonEnum {
    Bounce = "BOUNCE",
    Complaint = "COMPLAINT"
}


export class PutSuppressedDestinationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason: PutSuppressedDestinationRequestBodyReasonEnum;
}


export class PutSuppressedDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutSuppressedDestinationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutSuppressedDestinationRequestBody;
}


export class PutSuppressedDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putSuppressedDestinationResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
