import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutDedicatedIpWarmupAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;
}


export class PutDedicatedIpWarmupAttributesHeaders extends SpeakeasyBase {
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


export class PutDedicatedIpWarmupAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=WarmupPercentage" })
  warmupPercentage: number;
}


export class PutDedicatedIpWarmupAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDedicatedIpWarmupAttributesPathParams;

  @Metadata()
  headers: PutDedicatedIpWarmupAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutDedicatedIpWarmupAttributesRequestBody;
}


export class PutDedicatedIpWarmupAttributesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putDedicatedIpWarmupAttributesResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
