import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateRuleGroupXAmzTargetEnum {
    Awswaf20150824CreateRuleGroup = "AWSWAF_20150824.CreateRuleGroup"
}


export class CreateRuleGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateRuleGroupXAmzTargetEnum;
}


export class CreateRuleGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRuleGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateRuleGroupRequest;
}


export class CreateRuleGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createRuleGroupResponse?: shared.CreateRuleGroupResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafBadRequestException?: any;

  @Metadata()
  wafDisallowedNameException?: any;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafLimitsExceededException?: any;

  @Metadata()
  wafStaleDataException?: any;

  @Metadata()
  wafTagOperationException?: any;

  @Metadata()
  wafTagOperationInternalErrorException?: any;
}
