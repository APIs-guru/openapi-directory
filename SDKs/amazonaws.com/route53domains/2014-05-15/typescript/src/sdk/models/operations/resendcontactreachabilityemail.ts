import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ResendContactReachabilityEmailXAmzTargetEnum {
    Route53DomainsV20140515ResendContactReachabilityEmail = "Route53Domains_v20140515.ResendContactReachabilityEmail"
}


export class ResendContactReachabilityEmailHeaders extends SpeakeasyBase {
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
  xAmzTarget: ResendContactReachabilityEmailXAmzTargetEnum;
}


export class ResendContactReachabilityEmailRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResendContactReachabilityEmailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResendContactReachabilityEmailRequest;
}


export class ResendContactReachabilityEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  resendContactReachabilityEmailResponse?: shared.ResendContactReachabilityEmailResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
