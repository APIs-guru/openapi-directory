import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataEndpointHeaders extends SpeakeasyBase {
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

export enum GetDataEndpointRequestBodyApiNameEnum {
    PutMedia = "PUT_MEDIA",
    GetMedia = "GET_MEDIA",
    ListFragments = "LIST_FRAGMENTS",
    GetMediaForFragmentList = "GET_MEDIA_FOR_FRAGMENT_LIST",
    GetHlsStreamingSessionUrl = "GET_HLS_STREAMING_SESSION_URL",
    GetDashStreamingSessionUrl = "GET_DASH_STREAMING_SESSION_URL",
    GetClip = "GET_CLIP"
}


export class GetDataEndpointRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APIName" })
  apiName: GetDataEndpointRequestBodyApiNameEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class GetDataEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetDataEndpointHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetDataEndpointRequestBody;
}


export class GetDataEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDataEndpointOutput?: shared.GetDataEndpointOutput;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
