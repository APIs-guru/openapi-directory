import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateRateBasedRuleXAmzTargetEnum {
    AwswafRegional20161128CreateRateBasedRule = "AWSWAF_Regional_20161128.CreateRateBasedRule"
}


export class CreateRateBasedRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateRateBasedRuleXAmzTargetEnum;
}


export class CreateRateBasedRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRateBasedRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateRateBasedRuleRequest;
}


export class CreateRateBasedRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createRateBasedRuleResponse?: shared.CreateRateBasedRuleResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafBadRequestException?: any;

  @Metadata()
  wafDisallowedNameException?: any;

  @Metadata()
  wafInternalErrorException?: any;

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
