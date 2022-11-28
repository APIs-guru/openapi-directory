import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateStudioComponentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioComponentId" })
  studioComponentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" })
  studioId: string;
}


export class UpdateStudioComponentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" })
  xAmzClientToken?: string;

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
}


// UpdateStudioComponentRequestBodyConfiguration
/** 
 * The configuration of the studio component, based on component type.
**/
export class UpdateStudioComponentRequestBodyConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeDirectoryConfiguration" })
  activeDirectoryConfiguration?: shared.ActiveDirectoryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=computeFarmConfiguration" })
  computeFarmConfiguration?: shared.ComputeFarmConfiguration;

  @SpeakeasyMetadata({ data: "json, name=licenseServiceConfiguration" })
  licenseServiceConfiguration?: shared.LicenseServiceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=sharedFileSystemConfiguration" })
  sharedFileSystemConfiguration?: shared.SharedFileSystemConfiguration;
}

export enum UpdateStudioComponentRequestBodySubtypeEnum {
    AwsManagedMicrosoftAd = "AWS_MANAGED_MICROSOFT_AD",
    AmazonFsxForWindows = "AMAZON_FSX_FOR_WINDOWS",
    AmazonFsxForLustre = "AMAZON_FSX_FOR_LUSTRE",
    Custom = "CUSTOM"
}

export enum UpdateStudioComponentRequestBodyTypeEnum {
    ActiveDirectory = "ACTIVE_DIRECTORY",
    SharedFileSystem = "SHARED_FILE_SYSTEM",
    ComputeFarm = "COMPUTE_FARM",
    LicenseService = "LICENSE_SERVICE",
    Custom = "CUSTOM"
}


export class UpdateStudioComponentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: UpdateStudioComponentRequestBodyConfiguration;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ec2SecurityGroupIds" })
  ec2SecurityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=initializationScripts", elemType: shared.StudioComponentInitializationScript })
  initializationScripts?: shared.StudioComponentInitializationScript[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptParameters", elemType: shared.ScriptParameterKeyValue })
  scriptParameters?: shared.ScriptParameterKeyValue[];

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: UpdateStudioComponentRequestBodySubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateStudioComponentRequestBodyTypeEnum;
}


export class UpdateStudioComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateStudioComponentPathParams;

  @SpeakeasyMetadata()
  headers: UpdateStudioComponentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateStudioComponentRequestBody;
}


export class UpdateStudioComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateStudioComponentResponse?: shared.UpdateStudioComponentResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
