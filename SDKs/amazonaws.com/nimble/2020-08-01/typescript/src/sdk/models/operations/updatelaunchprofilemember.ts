import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLaunchProfileMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=launchProfileId" })
  launchProfileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=principalId" })
  principalId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=studioId" })
  studioId: string;
}


export class UpdateLaunchProfileMemberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" })
  xAmzClientToken?: string;

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
}

export enum UpdateLaunchProfileMemberRequestBodyPersonaEnum {
    User = "USER"
}


export class UpdateLaunchProfileMemberRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=persona" })
  persona: UpdateLaunchProfileMemberRequestBodyPersonaEnum;
}


export class UpdateLaunchProfileMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLaunchProfileMemberPathParams;

  @Metadata()
  headers: UpdateLaunchProfileMemberHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateLaunchProfileMemberRequestBody;
}


export class UpdateLaunchProfileMemberResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateLaunchProfileMemberResponse?: shared.UpdateLaunchProfileMemberResponse;

  @Metadata()
  validationException?: any;
}
