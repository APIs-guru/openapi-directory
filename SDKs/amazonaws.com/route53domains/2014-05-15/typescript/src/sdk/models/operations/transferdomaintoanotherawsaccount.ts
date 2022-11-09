import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TransferDomainToAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515TransferDomainToAnotherAwsAccount = "Route53Domains_v20140515.TransferDomainToAnotherAwsAccount"
}


export class TransferDomainToAnotherAwsAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: TransferDomainToAnotherAwsAccountXAmzTargetEnum;
}


export class TransferDomainToAnotherAwsAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: TransferDomainToAnotherAwsAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TransferDomainToAnotherAwsAccountRequest;
}


export class TransferDomainToAnotherAwsAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  duplicateRequest?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  transferDomainToAnotherAwsAccountResponse?: shared.TransferDomainToAnotherAwsAccountResponse;
}
