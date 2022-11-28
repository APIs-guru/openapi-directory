import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EnableDomainTransferLockXAmzTargetEnum {
    Route53DomainsV20140515EnableDomainTransferLock = "Route53Domains_v20140515.EnableDomainTransferLock"
}


export class EnableDomainTransferLockHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableDomainTransferLockXAmzTargetEnum;
}


export class EnableDomainTransferLockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EnableDomainTransferLockHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EnableDomainTransferLockRequest;
}


export class EnableDomainTransferLockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  duplicateRequest?: any;

  @SpeakeasyMetadata()
  enableDomainTransferLockResponse?: shared.EnableDomainTransferLockResponse;

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
