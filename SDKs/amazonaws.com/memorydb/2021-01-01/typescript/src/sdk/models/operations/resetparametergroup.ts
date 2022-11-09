import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ResetParameterGroupXAmzTargetEnum {
    AmazonMemoryDbResetParameterGroup = "AmazonMemoryDB.ResetParameterGroup"
}


export class ResetParameterGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: ResetParameterGroupXAmzTargetEnum;
}


export class ResetParameterGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResetParameterGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResetParameterGroupRequest;
}


export class ResetParameterGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterGroupStateFault?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  parameterGroupNotFoundFault?: any;

  @Metadata()
  resetParameterGroupResponse?: shared.ResetParameterGroupResponse;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
