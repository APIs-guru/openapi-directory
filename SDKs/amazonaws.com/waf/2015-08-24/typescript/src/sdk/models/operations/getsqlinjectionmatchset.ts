import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSqlInjectionMatchSetXAmzTargetEnum {
    Awswaf20150824GetSqlInjectionMatchSet = "AWSWAF_20150824.GetSqlInjectionMatchSet"
}


export class GetSqlInjectionMatchSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetSqlInjectionMatchSetXAmzTargetEnum;
}


export class GetSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetSqlInjectionMatchSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetSqlInjectionMatchSetRequest;
}


export class GetSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSqlInjectionMatchSetResponse?: shared.GetSqlInjectionMatchSetResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
