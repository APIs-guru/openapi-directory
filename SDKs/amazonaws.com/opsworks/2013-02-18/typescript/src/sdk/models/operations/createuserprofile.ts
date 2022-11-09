import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateUserProfileXAmzTargetEnum {
    OpsWorks20130218CreateUserProfile = "OpsWorks_20130218.CreateUserProfile"
}


export class CreateUserProfileHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateUserProfileXAmzTargetEnum;
}


export class CreateUserProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateUserProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateUserProfileRequest;
}


export class CreateUserProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createUserProfileResult?: shared.CreateUserProfileResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
