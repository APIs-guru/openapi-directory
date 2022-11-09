import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount"
}


export class AcceptDomainTransferFromAnotherAwsAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
}


export class AcceptDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcceptDomainTransferFromAnotherAwsAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AcceptDomainTransferFromAnotherAwsAccountRequest;
}


export class AcceptDomainTransferFromAnotherAwsAccountResponse extends SpeakeasyBase {
  @Metadata()
  acceptDomainTransferFromAnotherAwsAccountResponse?: shared.AcceptDomainTransferFromAnotherAwsAccountResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  domainLimitExceeded?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
