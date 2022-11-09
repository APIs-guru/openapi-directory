import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAccountBalanceXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetAccountBalance = "MTurkRequesterServiceV20170117.GetAccountBalance"
}


export class GetAccountBalanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAccountBalanceXAmzTargetEnum;
}


export class GetAccountBalanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAccountBalanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetAccountBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAccountBalanceResponse?: shared.GetAccountBalanceResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
