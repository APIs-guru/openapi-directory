import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RenewDomainXAmzTargetEnum {
    Route53DomainsV20140515RenewDomain = "Route53Domains_v20140515.RenewDomain"
}


export class RenewDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: RenewDomainXAmzTargetEnum;
}


export class RenewDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: RenewDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RenewDomainRequest;
}


export class RenewDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  duplicateRequest?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  renewDomainResponse?: shared.RenewDomainResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tldRulesViolation?: any;

  @Metadata()
  unsupportedTld?: any;
}
