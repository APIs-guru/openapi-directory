import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteResourcePolicyStatementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=statementId" })
  statementId: string;
}


export class DeleteResourcePolicyStatementQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expectedRevisionId" })
  expectedRevisionId?: string;
}


export class DeleteResourcePolicyStatementHeaders extends SpeakeasyBase {
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


export class DeleteResourcePolicyStatementRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteResourcePolicyStatementPathParams;

  @Metadata()
  queryParams: DeleteResourcePolicyStatementQueryParams;

  @Metadata()
  headers: DeleteResourcePolicyStatementHeaders;
}


export class DeleteResourcePolicyStatementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteResourcePolicyStatementResponse?: shared.DeleteResourcePolicyStatementResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
