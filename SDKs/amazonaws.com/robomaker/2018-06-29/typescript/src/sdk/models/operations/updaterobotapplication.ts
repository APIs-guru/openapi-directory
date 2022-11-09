import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRobotApplicationHeaders extends SpeakeasyBase {
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


// UpdateRobotApplicationRequestBodyEnvironment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class UpdateRobotApplicationRequestBodyEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// UpdateRobotApplicationRequestBodyRobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class UpdateRobotApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: shared.RobotSoftwareSuiteTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}


export class UpdateRobotApplicationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application: string;

  @Metadata({ data: "json, name=currentRevisionId" })
  currentRevisionId?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: UpdateRobotApplicationRequestBodyEnvironment;

  @Metadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite: UpdateRobotApplicationRequestBodyRobotSoftwareSuite;

  @Metadata({ data: "json, name=sources", elemType: shared.SourceConfig })
  sources?: shared.SourceConfig[];
}


export class UpdateRobotApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateRobotApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateRobotApplicationRequestBody;
}


export class UpdateRobotApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateRobotApplicationResponse?: shared.UpdateRobotApplicationResponse;
}
