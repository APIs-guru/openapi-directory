import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateIpGroupXAmzTargetEnum {
    WorkspacesServiceCreateIpGroup = "WorkspacesService.CreateIpGroup"
}


export class CreateIpGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateIpGroupXAmzTargetEnum;
}


export class CreateIpGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateIpGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateIpGroupRequest;
}


export class CreateIpGroupResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createIpGroupResult?: shared.CreateIpGroupResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceCreationFailedException?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
