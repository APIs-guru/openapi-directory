import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAclxAmzTargetEnum {
    AmazonMemoryDbCreateAcl = "AmazonMemoryDB.CreateACL"
}


export class CreateAclHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAclxAmzTargetEnum;
}


export class CreateAclRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAclHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAclRequest;
}


export class CreateAclResponse extends SpeakeasyBase {
  @Metadata()
  aclAlreadyExistsFault?: any;

  @Metadata()
  aclQuotaExceededFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAclResponse?: shared.CreateAclResponse;

  @Metadata()
  defaultUserRequired?: any;

  @Metadata()
  duplicateUserNameFault?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagQuotaPerResourceExceeded?: any;

  @Metadata()
  userNotFoundFault?: any;
}
