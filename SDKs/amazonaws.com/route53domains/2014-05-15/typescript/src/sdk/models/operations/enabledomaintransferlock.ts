import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnableDomainTransferLockXAmzTargetEnum {
    Route53DomainsV20140515EnableDomainTransferLock = "Route53Domains_v20140515.EnableDomainTransferLock"
}


export class EnableDomainTransferLockHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableDomainTransferLockXAmzTargetEnum;
}


export class EnableDomainTransferLockRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableDomainTransferLockHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnableDomainTransferLockRequest;
}


export class EnableDomainTransferLockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  duplicateRequest?: any;

  @Metadata()
  enableDomainTransferLockResponse?: shared.EnableDomainTransferLockResponse;

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
