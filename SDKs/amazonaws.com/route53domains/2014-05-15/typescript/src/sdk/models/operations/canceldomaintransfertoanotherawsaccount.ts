import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515CancelDomainTransferToAnotherAwsAccount = "Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount"
}


export class CancelDomainTransferToAnotherAwsAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum;
}


export class CancelDomainTransferToAnotherAwsAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelDomainTransferToAnotherAwsAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelDomainTransferToAnotherAwsAccountRequest;
}


export class CancelDomainTransferToAnotherAwsAccountResponse extends SpeakeasyBase {
  @Metadata()
  cancelDomainTransferToAnotherAwsAccountResponse?: shared.CancelDomainTransferToAnotherAwsAccountResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
