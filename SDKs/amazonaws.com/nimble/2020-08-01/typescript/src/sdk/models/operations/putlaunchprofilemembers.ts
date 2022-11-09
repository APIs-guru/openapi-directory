import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutLaunchProfileMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=launchProfileId" })
  launchProfileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=studioId" })
  studioId: string;
}


export class PutLaunchProfileMembersHeaders extends SpeakeasyBase {
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


export class PutLaunchProfileMembersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityStoreId" })
  identityStoreId: string;

  @Metadata({ data: "json, name=members", elemType: shared.NewLaunchProfileMember })
  members: shared.NewLaunchProfileMember[];
}


export class PutLaunchProfileMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutLaunchProfileMembersPathParams;

  @Metadata()
  headers: PutLaunchProfileMembersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutLaunchProfileMembersRequestBody;
}


export class PutLaunchProfileMembersResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  putLaunchProfileMembersResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
