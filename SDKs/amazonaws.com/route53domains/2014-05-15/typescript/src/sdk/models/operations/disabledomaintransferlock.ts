import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DisableDomainTransferLockXAmzTargetEnum {
    Route53DomainsV20140515DisableDomainTransferLock = "Route53Domains_v20140515.DisableDomainTransferLock"
}


export class DisableDomainTransferLockHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableDomainTransferLockXAmzTargetEnum;
}


export class DisableDomainTransferLockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DisableDomainTransferLockHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DisableDomainTransferLockRequest;
}


export class DisableDomainTransferLockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disableDomainTransferLockResponse?: shared.DisableDomainTransferLockResponse;

  @SpeakeasyMetadata()
  duplicateRequest?: any;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  operationLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tldRulesViolation?: any;

  @SpeakeasyMetadata()
  unsupportedTld?: any;
}
