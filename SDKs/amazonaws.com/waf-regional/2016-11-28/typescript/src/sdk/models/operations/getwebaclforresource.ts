import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetWebAclForResourceXAmzTargetEnum {
    AwswafRegional20161128GetWebAclForResource = "AWSWAF_Regional_20161128.GetWebACLForResource"
}


export class GetWebAclForResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetWebAclForResourceXAmzTargetEnum;
}


export class GetWebAclForResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetWebAclForResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetWebAclForResourceRequest;
}


export class GetWebAclForResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getWebAclForResourceResponse?: shared.GetWebAclForResourceResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafNonexistentItemException?: any;

  @Metadata()
  wafUnavailableEntityException?: any;
}
