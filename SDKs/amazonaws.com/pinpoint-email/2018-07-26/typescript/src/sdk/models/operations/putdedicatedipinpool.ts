import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutDedicatedIpInPoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;
}


export class PutDedicatedIpInPoolHeaders extends SpeakeasyBase {
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


export class PutDedicatedIpInPoolRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationPoolName" })
  destinationPoolName: string;
}


export class PutDedicatedIpInPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDedicatedIpInPoolPathParams;

  @SpeakeasyMetadata()
  headers: PutDedicatedIpInPoolHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutDedicatedIpInPoolRequestBody;
}


export class PutDedicatedIpInPoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putDedicatedIpInPoolResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
