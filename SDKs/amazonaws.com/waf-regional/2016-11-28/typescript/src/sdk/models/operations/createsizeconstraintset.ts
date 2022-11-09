import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateSizeConstraintSetXAmzTargetEnum {
    AwswafRegional20161128CreateSizeConstraintSet = "AWSWAF_Regional_20161128.CreateSizeConstraintSet"
}


export class CreateSizeConstraintSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateSizeConstraintSetXAmzTargetEnum;
}


export class CreateSizeConstraintSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSizeConstraintSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateSizeConstraintSetRequest;
}


export class CreateSizeConstraintSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSizeConstraintSetResponse?: shared.CreateSizeConstraintSetResponse;

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
