import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateParameterGroupXAmzTargetEnum {
    AmazonMemoryDbCreateParameterGroup = "AmazonMemoryDB.CreateParameterGroup"
}


export class CreateParameterGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateParameterGroupXAmzTargetEnum;
}


export class CreateParameterGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateParameterGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateParameterGroupRequest;
}


export class CreateParameterGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createParameterGroupResponse?: shared.CreateParameterGroupResponse;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterGroupStateFault?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  parameterGroupAlreadyExistsFault?: any;

  @Metadata()
  parameterGroupQuotaExceededFault?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagQuotaPerResourceExceeded?: any;
}
