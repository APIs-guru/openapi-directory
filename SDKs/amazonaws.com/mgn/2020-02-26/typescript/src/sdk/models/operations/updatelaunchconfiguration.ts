import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLaunchConfigurationHeaders extends SpeakeasyBase {
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
}

export enum UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum {
    Stopped = "STOPPED",
    Started = "STARTED"
}


// UpdateLaunchConfigurationRequestBodyLicensing
/** 
 * Configure Licensing.
**/
export class UpdateLaunchConfigurationRequestBodyLicensing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=osByol" })
  osByol?: boolean;
}

export enum UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum {
    None = "NONE",
    Basic = "BASIC"
}


export class UpdateLaunchConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyPrivateIp" })
  copyPrivateIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=copyTags" })
  copyTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=launchDisposition" })
  launchDisposition?: UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;

  @SpeakeasyMetadata({ data: "json, name=licensing" })
  licensing?: UpdateLaunchConfigurationRequestBodyLicensing;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceServerID" })
  sourceServerId: string;

  @SpeakeasyMetadata({ data: "json, name=targetInstanceTypeRightSizingMethod" })
  targetInstanceTypeRightSizingMethod?: UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;
}


export class UpdateLaunchConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateLaunchConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateLaunchConfigurationRequestBody;
}


export class UpdateLaunchConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  launchConfiguration?: shared.LaunchConfiguration;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uninitializedAccountException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
