import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CheckDomainTransferabilityXAmzTargetEnum {
    Route53DomainsV20140515CheckDomainTransferability = "Route53Domains_v20140515.CheckDomainTransferability"
}


export class CheckDomainTransferabilityHeaders extends SpeakeasyBase {
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
  xAmzTarget: CheckDomainTransferabilityXAmzTargetEnum;
}


export class CheckDomainTransferabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CheckDomainTransferabilityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CheckDomainTransferabilityRequest;
}


export class CheckDomainTransferabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkDomainTransferabilityResponse?: shared.CheckDomainTransferabilityResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedTld?: any;
}
