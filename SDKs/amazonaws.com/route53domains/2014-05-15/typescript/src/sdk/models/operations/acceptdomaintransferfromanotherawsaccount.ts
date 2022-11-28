import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount"
}


export class AcceptDomainTransferFromAnotherAwsAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
}


export class AcceptDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AcceptDomainTransferFromAnotherAwsAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AcceptDomainTransferFromAnotherAwsAccountRequest;
}


export class AcceptDomainTransferFromAnotherAwsAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptDomainTransferFromAnotherAwsAccountResponse?: shared.AcceptDomainTransferFromAnotherAwsAccountResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainLimitExceeded?: any;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  operationLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
