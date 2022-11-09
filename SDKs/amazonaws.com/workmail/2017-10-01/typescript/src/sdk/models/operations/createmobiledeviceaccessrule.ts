import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateMobileDeviceAccessRuleXAmzTargetEnum {
    WorkMailServiceCreateMobileDeviceAccessRule = "WorkMailService.CreateMobileDeviceAccessRule"
}


export class CreateMobileDeviceAccessRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateMobileDeviceAccessRuleXAmzTargetEnum;
}


export class CreateMobileDeviceAccessRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateMobileDeviceAccessRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateMobileDeviceAccessRuleRequest;
}


export class CreateMobileDeviceAccessRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createMobileDeviceAccessRuleResponse?: shared.CreateMobileDeviceAccessRuleResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  statusCode: number;
}
