import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetContactReachabilityStatusXAmzTargetEnum {
    Route53DomainsV20140515GetContactReachabilityStatus = "Route53Domains_v20140515.GetContactReachabilityStatus"
}


export class GetContactReachabilityStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetContactReachabilityStatusXAmzTargetEnum;
}


export class GetContactReachabilityStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetContactReachabilityStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetContactReachabilityStatusRequest;
}


export class GetContactReachabilityStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContactReachabilityStatusResponse?: shared.GetContactReachabilityStatusResponse;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
