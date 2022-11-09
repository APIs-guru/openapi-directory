import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateSqlInjectionMatchSetXAmzTargetEnum {
    Awswaf20150824UpdateSqlInjectionMatchSet = "AWSWAF_20150824.UpdateSqlInjectionMatchSet"
}


export class UpdateSqlInjectionMatchSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateSqlInjectionMatchSetXAmzTargetEnum;
}


export class UpdateSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSqlInjectionMatchSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateSqlInjectionMatchSetRequest;
}


export class UpdateSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSqlInjectionMatchSetResponse?: shared.UpdateSqlInjectionMatchSetResponse;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafInvalidOperationException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafLimitsExceededException?: any;

  @Metadata()
  wafNonexistentContainerException?: any;

  @Metadata()
  wafNonexistentItemException?: any;

  @Metadata()
  wafStaleDataException?: any;
}
