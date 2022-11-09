import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnableDomainAutoRenewXAmzTargetEnum {
    Route53DomainsV20140515EnableDomainAutoRenew = "Route53Domains_v20140515.EnableDomainAutoRenew"
}


export class EnableDomainAutoRenewHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableDomainAutoRenewXAmzTargetEnum;
}


export class EnableDomainAutoRenewRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableDomainAutoRenewHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnableDomainAutoRenewRequest;
}


export class EnableDomainAutoRenewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  enableDomainAutoRenewResponse?: Map<string, any>;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tldRulesViolation?: any;

  @Metadata()
  unsupportedTld?: any;
}
