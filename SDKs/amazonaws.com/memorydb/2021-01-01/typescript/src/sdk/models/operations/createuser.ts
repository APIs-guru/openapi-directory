import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateUserXAmzTargetEnum {
    AmazonMemoryDbCreateUser = "AmazonMemoryDB.CreateUser"
}


export class CreateUserHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateUserXAmzTargetEnum;
}


export class CreateUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateUserRequest;
}


export class CreateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createUserResponse?: shared.CreateUserResponse;

  @Metadata()
  duplicateUserNameFault?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagQuotaPerResourceExceeded?: any;

  @Metadata()
  userAlreadyExistsFault?: any;

  @Metadata()
  userQuotaExceededFault?: any;
}
