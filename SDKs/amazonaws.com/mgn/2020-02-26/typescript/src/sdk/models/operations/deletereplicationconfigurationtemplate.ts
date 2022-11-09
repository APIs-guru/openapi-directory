import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteReplicationConfigurationTemplateHeaders extends SpeakeasyBase {
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


export class DeleteReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicationConfigurationTemplateID" })
  replicationConfigurationTemplateId: string;
}


export class DeleteReplicationConfigurationTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteReplicationConfigurationTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteReplicationConfigurationTemplateRequestBody;
}


export class DeleteReplicationConfigurationTemplateResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteReplicationConfigurationTemplateResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  uninitializedAccountException?: any;
}
