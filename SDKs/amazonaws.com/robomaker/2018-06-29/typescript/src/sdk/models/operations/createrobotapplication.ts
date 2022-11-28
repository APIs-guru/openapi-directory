import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRobotApplicationHeaders extends SpeakeasyBase {
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


// CreateRobotApplicationRequestBodyEnvironment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class CreateRobotApplicationRequestBodyEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// CreateRobotApplicationRequestBodyRobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class CreateRobotApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.RobotSoftwareSuiteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}


export class CreateRobotApplicationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: CreateRobotApplicationRequestBodyEnvironment;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite: CreateRobotApplicationRequestBodyRobotSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: shared.SourceConfig })
  sources?: shared.SourceConfig[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateRobotApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateRobotApplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateRobotApplicationRequestBody;
}


export class CreateRobotApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createRobotApplicationResponse?: shared.CreateRobotApplicationResponse;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
