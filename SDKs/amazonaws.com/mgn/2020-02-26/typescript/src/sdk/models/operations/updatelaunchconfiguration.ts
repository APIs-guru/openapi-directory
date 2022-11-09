import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLaunchConfigurationHeaders extends SpeakeasyBase {
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

export enum UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum {
    Stopped = "STOPPED"
,    Started = "STARTED"
}


// UpdateLaunchConfigurationRequestBodyLicensing
/** 
 * Configure Licensing.
**/
export class UpdateLaunchConfigurationRequestBodyLicensing extends SpeakeasyBase {
  @Metadata({ data: "json, name=osByol" })
  osByol?: boolean;
}

export enum UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum {
    None = "NONE"
,    Basic = "BASIC"
}


export class UpdateLaunchConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyPrivateIp" })
  copyPrivateIp?: boolean;

  @Metadata({ data: "json, name=copyTags" })
  copyTags?: boolean;

  @Metadata({ data: "json, name=launchDisposition" })
  launchDisposition?: UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;

  @Metadata({ data: "json, name=licensing" })
  licensing?: UpdateLaunchConfigurationRequestBodyLicensing;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sourceServerID" })
  sourceServerId: string;

  @Metadata({ data: "json, name=targetInstanceTypeRightSizingMethod" })
  targetInstanceTypeRightSizingMethod?: UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;
}


export class UpdateLaunchConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateLaunchConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateLaunchConfigurationRequestBody;
}


export class UpdateLaunchConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  launchConfiguration?: shared.LaunchConfiguration;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  uninitializedAccountException?: any;

  @Metadata()
  validationException?: any;
}
