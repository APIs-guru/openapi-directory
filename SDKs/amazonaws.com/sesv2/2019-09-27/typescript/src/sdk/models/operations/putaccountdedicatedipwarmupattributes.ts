import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAccountDedicatedIpWarmupAttributesHeaders extends SpeakeasyBase {
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


export class PutAccountDedicatedIpWarmupAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoWarmupEnabled" })
  autoWarmupEnabled?: boolean;
}


export class PutAccountDedicatedIpWarmupAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAccountDedicatedIpWarmupAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutAccountDedicatedIpWarmupAttributesRequestBody;
}


export class PutAccountDedicatedIpWarmupAttributesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  putAccountDedicatedIpWarmupAttributesResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
