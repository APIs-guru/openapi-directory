import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterResourceXAmzTargetEnum {
    AwsLakeFormationDeregisterResource = "AWSLakeFormation.DeregisterResource"
}


export class DeregisterResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterResourceXAmzTargetEnum;
}


export class DeregisterResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterResourceRequest;
}


export class DeregisterResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deregisterResourceResponse?: Map<string, any>;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
