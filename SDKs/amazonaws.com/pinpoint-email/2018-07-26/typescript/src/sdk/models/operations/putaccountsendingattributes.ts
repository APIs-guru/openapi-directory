import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAccountSendingAttributesHeaders extends SpeakeasyBase {
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


export class PutAccountSendingAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}


export class PutAccountSendingAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAccountSendingAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutAccountSendingAttributesRequestBody;
}


export class PutAccountSendingAttributesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  putAccountSendingAttributesResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
