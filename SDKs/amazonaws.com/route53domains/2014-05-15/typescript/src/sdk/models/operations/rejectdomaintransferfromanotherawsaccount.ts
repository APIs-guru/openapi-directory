import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515RejectDomainTransferFromAnotherAwsAccount = "Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount"
}


export class RejectDomainTransferFromAnotherAwsAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
}


export class RejectDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: RejectDomainTransferFromAnotherAwsAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RejectDomainTransferFromAnotherAwsAccountRequest;
}


export class RejectDomainTransferFromAnotherAwsAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  rejectDomainTransferFromAnotherAwsAccountResponse?: shared.RejectDomainTransferFromAnotherAwsAccountResponse;

  @Metadata()
  statusCode: number;
}
