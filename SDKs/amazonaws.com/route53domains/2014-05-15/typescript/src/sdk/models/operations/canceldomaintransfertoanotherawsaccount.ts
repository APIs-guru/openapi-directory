import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515CancelDomainTransferToAnotherAwsAccount = "Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount"
}


export class CancelDomainTransferToAnotherAwsAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum;
}


export class CancelDomainTransferToAnotherAwsAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CancelDomainTransferToAnotherAwsAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CancelDomainTransferToAnotherAwsAccountRequest;
}


export class CancelDomainTransferToAnotherAwsAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cancelDomainTransferToAnotherAwsAccountResponse?: shared.CancelDomainTransferToAnotherAwsAccountResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  operationLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
