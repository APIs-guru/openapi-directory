import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutMetadataHeaders extends SpeakeasyBase {
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


export class PutMetadataRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelArn" })
  channelArn: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: string;
}


export class PutMetadataRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutMetadataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutMetadataRequestBody;
}


export class PutMetadataResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  channelNotBroadcasting?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
