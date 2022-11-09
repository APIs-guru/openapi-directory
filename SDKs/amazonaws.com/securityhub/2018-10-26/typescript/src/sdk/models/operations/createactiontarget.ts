import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateActionTargetHeaders extends SpeakeasyBase {
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


export class CreateActionTargetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


export class CreateActionTargetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateActionTargetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateActionTargetRequestBody;
}


export class CreateActionTargetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createActionTargetResponse?: shared.CreateActionTargetResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  statusCode: number;
}
