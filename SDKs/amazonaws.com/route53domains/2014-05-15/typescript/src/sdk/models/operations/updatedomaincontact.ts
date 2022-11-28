import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateDomainContactXAmzTargetEnum {
    Route53DomainsV20140515UpdateDomainContact = "Route53Domains_v20140515.UpdateDomainContact"
}


export class UpdateDomainContactHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateDomainContactXAmzTargetEnum;
}


export class UpdateDomainContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateDomainContactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateDomainContactRequest;
}


export class UpdateDomainContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

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

  @SpeakeasyMetadata()
  updateDomainContactResponse?: shared.UpdateDomainContactResponse;
}
