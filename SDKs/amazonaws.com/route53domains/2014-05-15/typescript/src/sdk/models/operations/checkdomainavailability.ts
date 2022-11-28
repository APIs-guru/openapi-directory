import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CheckDomainAvailabilityXAmzTargetEnum {
    Route53DomainsV20140515CheckDomainAvailability = "Route53Domains_v20140515.CheckDomainAvailability"
}


export class CheckDomainAvailabilityHeaders extends SpeakeasyBase {
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
  xAmzTarget: CheckDomainAvailabilityXAmzTargetEnum;
}


export class CheckDomainAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CheckDomainAvailabilityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CheckDomainAvailabilityRequest;
}


export class CheckDomainAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkDomainAvailabilityResponse?: shared.CheckDomainAvailabilityResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedTld?: any;
}
