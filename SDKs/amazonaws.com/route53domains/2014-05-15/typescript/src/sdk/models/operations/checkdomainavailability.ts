import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CheckDomainAvailabilityXAmzTargetEnum {
    Route53DomainsV20140515CheckDomainAvailability = "Route53Domains_v20140515.CheckDomainAvailability"
}


export class CheckDomainAvailabilityHeaders extends SpeakeasyBase {
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
  xAmzTarget: CheckDomainAvailabilityXAmzTargetEnum;
}


export class CheckDomainAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  headers: CheckDomainAvailabilityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CheckDomainAvailabilityRequest;
}


export class CheckDomainAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  checkDomainAvailabilityResponse?: shared.CheckDomainAvailabilityResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
