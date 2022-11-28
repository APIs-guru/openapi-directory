import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515RejectDomainTransferFromAnotherAwsAccount = "Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount"
}


export class RejectDomainTransferFromAnotherAwsAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
}


export class RejectDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RejectDomainTransferFromAnotherAwsAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RejectDomainTransferFromAnotherAwsAccountRequest;
}


export class RejectDomainTransferFromAnotherAwsAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  operationLimitExceeded?: any;

  @SpeakeasyMetadata()
  rejectDomainTransferFromAnotherAwsAccountResponse?: shared.RejectDomainTransferFromAnotherAwsAccountResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
