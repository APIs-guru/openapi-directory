import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GenerateChangeSetXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GenerateChangeSet = "AWSServerMigrationService_V2016_10_24.GenerateChangeSet"
}


export class GenerateChangeSetHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GenerateChangeSetXAmzTargetEnum;
}


export class GenerateChangeSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: GenerateChangeSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GenerateChangeSetRequest;
}


export class GenerateChangeSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  generateChangeSetResponse?: shared.GenerateChangeSetResponse;

  @Metadata()
  internalError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedOperationException?: any;
}
