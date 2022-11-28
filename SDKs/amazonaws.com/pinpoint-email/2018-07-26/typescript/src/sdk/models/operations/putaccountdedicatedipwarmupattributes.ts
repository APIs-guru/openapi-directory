import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAccountDedicatedIpWarmupAttributesHeaders extends SpeakeasyBase {
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


export class PutAccountDedicatedIpWarmupAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoWarmupEnabled" })
  autoWarmupEnabled?: boolean;
}


export class PutAccountDedicatedIpWarmupAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutAccountDedicatedIpWarmupAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutAccountDedicatedIpWarmupAttributesRequestBody;
}


export class PutAccountDedicatedIpWarmupAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putAccountDedicatedIpWarmupAttributesResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
