import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeploySystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeploySystemInstance = "IotThingsGraphFrontEndService.DeploySystemInstance"
}


export class DeploySystemInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeploySystemInstanceXAmzTargetEnum;
}


export class DeploySystemInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeploySystemInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeploySystemInstanceRequest;
}


export class DeploySystemInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deploySystemInstanceResponse?: shared.DeploySystemInstanceResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
