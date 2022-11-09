import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutDedicatedIpInPoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;
}


export class PutDedicatedIpInPoolHeaders extends SpeakeasyBase {
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


export class PutDedicatedIpInPoolRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationPoolName" })
  destinationPoolName: string;
}


export class PutDedicatedIpInPoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDedicatedIpInPoolPathParams;

  @Metadata()
  headers: PutDedicatedIpInPoolHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutDedicatedIpInPoolRequestBody;
}


export class PutDedicatedIpInPoolResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putDedicatedIpInPoolResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
