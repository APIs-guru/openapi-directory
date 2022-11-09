import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateStudioComponentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=studioComponentId" })
  studioComponentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=studioId" })
  studioId: string;
}


export class UpdateStudioComponentHeaders extends SpeakeasyBase {
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


// UpdateStudioComponentRequestBodyConfiguration
/** 
 * The configuration of the studio component, based on component type.
**/
export class UpdateStudioComponentRequestBodyConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeDirectoryConfiguration" })
  activeDirectoryConfiguration?: shared.ActiveDirectoryConfiguration;

  @Metadata({ data: "json, name=computeFarmConfiguration" })
  computeFarmConfiguration?: shared.ComputeFarmConfiguration;

  @Metadata({ data: "json, name=licenseServiceConfiguration" })
  licenseServiceConfiguration?: shared.LicenseServiceConfiguration;

  @Metadata({ data: "json, name=sharedFileSystemConfiguration" })
  sharedFileSystemConfiguration?: shared.SharedFileSystemConfiguration;
}

export enum UpdateStudioComponentRequestBodySubtypeEnum {
    AwsManagedMicrosoftAd = "AWS_MANAGED_MICROSOFT_AD"
,    AmazonFsxForWindows = "AMAZON_FSX_FOR_WINDOWS"
,    AmazonFsxForLustre = "AMAZON_FSX_FOR_LUSTRE"
,    Custom = "CUSTOM"
}

export enum UpdateStudioComponentRequestBodyTypeEnum {
    ActiveDirectory = "ACTIVE_DIRECTORY"
,    SharedFileSystem = "SHARED_FILE_SYSTEM"
,    ComputeFarm = "COMPUTE_FARM"
,    LicenseService = "LICENSE_SERVICE"
,    Custom = "CUSTOM"
}


export class UpdateStudioComponentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: UpdateStudioComponentRequestBodyConfiguration;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ec2SecurityGroupIds" })
  ec2SecurityGroupIds?: string[];

  @Metadata({ data: "json, name=initializationScripts", elemType: shared.StudioComponentInitializationScript })
  initializationScripts?: shared.StudioComponentInitializationScript[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scriptParameters", elemType: shared.ScriptParameterKeyValue })
  scriptParameters?: shared.ScriptParameterKeyValue[];

  @Metadata({ data: "json, name=subtype" })
  subtype?: UpdateStudioComponentRequestBodySubtypeEnum;

  @Metadata({ data: "json, name=type" })
  type?: UpdateStudioComponentRequestBodyTypeEnum;
}


export class UpdateStudioComponentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateStudioComponentPathParams;

  @Metadata()
  headers: UpdateStudioComponentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateStudioComponentRequestBody;
}


export class UpdateStudioComponentResponse extends SpeakeasyBase {
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
  updateStudioComponentResponse?: shared.UpdateStudioComponentResponse;

  @Metadata()
  validationException?: any;
}
