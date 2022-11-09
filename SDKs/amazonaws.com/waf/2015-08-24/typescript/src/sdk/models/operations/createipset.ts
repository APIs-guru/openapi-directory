import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateIpSetXAmzTargetEnum {
    Awswaf20150824CreateIpSet = "AWSWAF_20150824.CreateIPSet"
}


export class CreateIpSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateIpSetXAmzTargetEnum;
}


export class CreateIpSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateIpSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateIpSetRequest;
}


export class CreateIpSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createIpSetResponse?: shared.CreateIpSetResponse;

  @Metadata()
  statusCode: number;

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
}
