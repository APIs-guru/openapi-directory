import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRobotApplicationHeaders extends SpeakeasyBase {
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


// UpdateRobotApplicationRequestBodyEnvironment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class UpdateRobotApplicationRequestBodyEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// UpdateRobotApplicationRequestBodyRobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class UpdateRobotApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.RobotSoftwareSuiteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}


export class UpdateRobotApplicationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application: string;

  @SpeakeasyMetadata({ data: "json, name=currentRevisionId" })
  currentRevisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: UpdateRobotApplicationRequestBodyEnvironment;

  @SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite: UpdateRobotApplicationRequestBodyRobotSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: shared.SourceConfig })
  sources?: shared.SourceConfig[];
}


export class UpdateRobotApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateRobotApplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateRobotApplicationRequestBody;
}


export class UpdateRobotApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateRobotApplicationResponse?: shared.UpdateRobotApplicationResponse;
}
