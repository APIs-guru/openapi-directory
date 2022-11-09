import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MoveAccountXAmzTargetEnum {
    AwsOrganizationsV20161128MoveAccount = "AWSOrganizationsV20161128.MoveAccount"
}


export class MoveAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: MoveAccountXAmzTargetEnum;
}


export class MoveAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: MoveAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MoveAccountRequest;
}


export class MoveAccountResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountNotFoundException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  destinationParentNotFoundException?: any;

  @Metadata()
  duplicateAccountException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  sourceParentNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
