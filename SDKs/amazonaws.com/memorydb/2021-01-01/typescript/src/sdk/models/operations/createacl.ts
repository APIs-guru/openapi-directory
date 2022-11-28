import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateAclxAmzTargetEnum {
    AmazonMemoryDbCreateAcl = "AmazonMemoryDB.CreateACL"
}


export class CreateAclHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAclxAmzTargetEnum;
}


export class CreateAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAclHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateAclRequest;
}


export class CreateAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aclAlreadyExistsFault?: any;

  @SpeakeasyMetadata()
  aclQuotaExceededFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAclResponse?: shared.CreateAclResponse;

  @SpeakeasyMetadata()
  defaultUserRequired?: any;

  @SpeakeasyMetadata()
  duplicateUserNameFault?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagQuotaPerResourceExceeded?: any;

  @SpeakeasyMetadata()
  userNotFoundFault?: any;
}
