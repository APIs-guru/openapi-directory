import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetChangeTokenXAmzTargetEnum {
    AwswafRegional20161128GetChangeToken = "AWSWAF_Regional_20161128.GetChangeToken"
}


export class GetChangeTokenHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetChangeTokenXAmzTargetEnum;
}


export class GetChangeTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetChangeTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetChangeTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChangeTokenResponse?: shared.GetChangeTokenResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;
}
