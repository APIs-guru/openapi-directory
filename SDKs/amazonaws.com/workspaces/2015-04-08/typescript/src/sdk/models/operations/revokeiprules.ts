import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RevokeIpRulesXAmzTargetEnum {
    WorkspacesServiceRevokeIpRules = "WorkspacesService.RevokeIpRules"
}


export class RevokeIpRulesHeaders extends SpeakeasyBase {
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
  xAmzTarget: RevokeIpRulesXAmzTargetEnum;
}


export class RevokeIpRulesRequest extends SpeakeasyBase {
  @Metadata()
  headers: RevokeIpRulesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RevokeIpRulesRequest;
}


export class RevokeIpRulesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  invalidResourceStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  revokeIpRulesResult?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
