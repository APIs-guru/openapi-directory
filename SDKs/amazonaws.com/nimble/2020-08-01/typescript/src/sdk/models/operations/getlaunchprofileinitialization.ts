import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLaunchProfileInitializationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=launchProfileId" })
  launchProfileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=studioId" })
  studioId: string;
}


export class GetLaunchProfileInitializationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=launchProfileProtocolVersions" })
  launchProfileProtocolVersions: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=launchPurpose" })
  launchPurpose: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform: string;
}


export class GetLaunchProfileInitializationHeaders extends SpeakeasyBase {
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
}


export class GetLaunchProfileInitializationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLaunchProfileInitializationPathParams;

  @Metadata()
  queryParams: GetLaunchProfileInitializationQueryParams;

  @Metadata()
  headers: GetLaunchProfileInitializationHeaders;
}


export class GetLaunchProfileInitializationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getLaunchProfileInitializationResponse?: shared.GetLaunchProfileInitializationResponse;

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
  validationException?: any;
}
