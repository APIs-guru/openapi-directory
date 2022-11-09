import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetXssMatchSetXAmzTargetEnum {
    Awswaf20150824GetXssMatchSet = "AWSWAF_20150824.GetXssMatchSet"
}


export class GetXssMatchSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetXssMatchSetXAmzTargetEnum;
}


export class GetXssMatchSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetXssMatchSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetXssMatchSetRequest;
}


export class GetXssMatchSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getXssMatchSetResponse?: shared.GetXssMatchSetResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
