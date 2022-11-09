import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CheckDomainTransferabilityXAmzTargetEnum {
    Route53DomainsV20140515CheckDomainTransferability = "Route53Domains_v20140515.CheckDomainTransferability"
}


export class CheckDomainTransferabilityHeaders extends SpeakeasyBase {
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
  xAmzTarget: CheckDomainTransferabilityXAmzTargetEnum;
}


export class CheckDomainTransferabilityRequest extends SpeakeasyBase {
  @Metadata()
  headers: CheckDomainTransferabilityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CheckDomainTransferabilityRequest;
}


export class CheckDomainTransferabilityResponse extends SpeakeasyBase {
  @Metadata()
  checkDomainTransferabilityResponse?: shared.CheckDomainTransferabilityResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
