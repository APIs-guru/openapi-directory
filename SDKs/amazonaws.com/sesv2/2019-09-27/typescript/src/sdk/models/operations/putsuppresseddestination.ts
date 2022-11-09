import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutSuppressedDestinationHeaders extends SpeakeasyBase {
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
}

export enum PutSuppressedDestinationRequestBodyReasonEnum {
    Bounce = "BOUNCE"
,    Complaint = "COMPLAINT"
}


export class PutSuppressedDestinationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @Metadata({ data: "json, name=Reason" })
  reason: PutSuppressedDestinationRequestBodyReasonEnum;
}


export class PutSuppressedDestinationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutSuppressedDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutSuppressedDestinationRequestBody;
}


export class PutSuppressedDestinationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  putSuppressedDestinationResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
