import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateReplicationSetHeaders extends SpeakeasyBase {
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


export class UpdateReplicationSetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.UpdateReplicationSetAction })
  actions: shared.UpdateReplicationSetAction[];

  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;
}


export class UpdateReplicationSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateReplicationSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateReplicationSetRequestBody;
}


export class UpdateReplicationSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateReplicationSetOutput?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
