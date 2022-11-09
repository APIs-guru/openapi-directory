import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisableDomainTransferLockXAmzTargetEnum {
    Route53DomainsV20140515DisableDomainTransferLock = "Route53Domains_v20140515.DisableDomainTransferLock"
}


export class DisableDomainTransferLockHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableDomainTransferLockXAmzTargetEnum;
}


export class DisableDomainTransferLockRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableDomainTransferLockHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisableDomainTransferLockRequest;
}


export class DisableDomainTransferLockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disableDomainTransferLockResponse?: shared.DisableDomainTransferLockResponse;

  @Metadata()
  duplicateRequest?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tldRulesViolation?: any;

  @Metadata()
  unsupportedTld?: any;
}
