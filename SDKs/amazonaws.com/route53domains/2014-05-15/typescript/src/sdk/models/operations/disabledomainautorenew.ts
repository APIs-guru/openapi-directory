import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisableDomainAutoRenewXAmzTargetEnum {
    Route53DomainsV20140515DisableDomainAutoRenew = "Route53Domains_v20140515.DisableDomainAutoRenew"
}


export class DisableDomainAutoRenewHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableDomainAutoRenewXAmzTargetEnum;
}


export class DisableDomainAutoRenewRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableDomainAutoRenewHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisableDomainAutoRenewRequest;
}


export class DisableDomainAutoRenewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disableDomainAutoRenewResponse?: Map<string, any>;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
