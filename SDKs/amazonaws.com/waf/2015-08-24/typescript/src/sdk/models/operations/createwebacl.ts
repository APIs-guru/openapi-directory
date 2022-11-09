import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateWebAclxAmzTargetEnum {
    Awswaf20150824CreateWebAcl = "AWSWAF_20150824.CreateWebACL"
}


export class CreateWebAclHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateWebAclxAmzTargetEnum;
}


export class CreateWebAclRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateWebAclHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateWebAclRequest;
}


export class CreateWebAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createWebAclResponse?: shared.CreateWebAclResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafBadRequestException?: any;

  @Metadata()
  wafDisallowedNameException?: any;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafLimitsExceededException?: any;

  @Metadata()
  wafStaleDataException?: any;

  @Metadata()
  wafTagOperationException?: any;

  @Metadata()
  wafTagOperationInternalErrorException?: any;
}
