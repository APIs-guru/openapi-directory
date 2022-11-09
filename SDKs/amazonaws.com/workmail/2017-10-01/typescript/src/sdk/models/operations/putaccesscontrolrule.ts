import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutAccessControlRuleXAmzTargetEnum {
    WorkMailServicePutAccessControlRule = "WorkMailService.PutAccessControlRule"
}


export class PutAccessControlRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutAccessControlRuleXAmzTargetEnum;
}


export class PutAccessControlRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAccessControlRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutAccessControlRuleRequest;
}


export class PutAccessControlRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  putAccessControlRuleResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
