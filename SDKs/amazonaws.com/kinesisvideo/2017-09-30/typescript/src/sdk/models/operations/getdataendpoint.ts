import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDataEndpointHeaders extends SpeakeasyBase {
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

export enum GetDataEndpointRequestBodyApiNameEnum {
    PutMedia = "PUT_MEDIA"
,    GetMedia = "GET_MEDIA"
,    ListFragments = "LIST_FRAGMENTS"
,    GetMediaForFragmentList = "GET_MEDIA_FOR_FRAGMENT_LIST"
,    GetHlsStreamingSessionUrl = "GET_HLS_STREAMING_SESSION_URL"
,    GetDashStreamingSessionUrl = "GET_DASH_STREAMING_SESSION_URL"
,    GetClip = "GET_CLIP"
}


export class GetDataEndpointRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=APIName" })
  apiName: GetDataEndpointRequestBodyApiNameEnum;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class GetDataEndpointRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDataEndpointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetDataEndpointRequestBody;
}


export class GetDataEndpointResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getDataEndpointOutput?: shared.GetDataEndpointOutput;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
