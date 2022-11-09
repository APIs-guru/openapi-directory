import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePlaybackKeyPairHeaders extends SpeakeasyBase {
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


export class DeletePlaybackKeyPairRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}


export class DeletePlaybackKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeletePlaybackKeyPairHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeletePlaybackKeyPairRequestBody;
}


export class DeletePlaybackKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deletePlaybackKeyPairResponse?: Map<string, any>;

  @Metadata()
  pendingVerification?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
