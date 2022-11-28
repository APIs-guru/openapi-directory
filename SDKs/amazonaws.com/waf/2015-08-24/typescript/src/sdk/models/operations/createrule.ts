import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateRuleXAmzTargetEnum {
    Awswaf20150824CreateRule = "AWSWAF_20150824.CreateRule"
}


export class CreateRuleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateRuleXAmzTargetEnum;
}


export class CreateRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateRuleRequest;
}


export class CreateRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createRuleResponse?: shared.CreateRuleResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wafBadRequestException?: any;

  @SpeakeasyMetadata()
  wafDisallowedNameException?: any;

  @SpeakeasyMetadata()
  wafInternalErrorException?: any;

  @SpeakeasyMetadata()
  wafInvalidParameterException?: any;

  @SpeakeasyMetadata()
  wafLimitsExceededException?: any;

  @SpeakeasyMetadata()
  wafStaleDataException?: any;

  @SpeakeasyMetadata()
  wafTagOperationException?: any;

  @SpeakeasyMetadata()
  wafTagOperationInternalErrorException?: any;
}
