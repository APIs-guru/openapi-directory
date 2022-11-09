import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAppValidationOutputXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetAppValidationOutput = "AWSServerMigrationService_V2016_10_24.GetAppValidationOutput"
}


export class GetAppValidationOutputHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAppValidationOutputXAmzTargetEnum;
}


export class GetAppValidationOutputRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAppValidationOutputHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAppValidationOutputRequest;
}


export class GetAppValidationOutputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAppValidationOutputResponse?: shared.GetAppValidationOutputResponse;

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
