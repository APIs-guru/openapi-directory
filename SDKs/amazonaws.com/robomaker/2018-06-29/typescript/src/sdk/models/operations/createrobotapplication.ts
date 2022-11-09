import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRobotApplicationHeaders extends SpeakeasyBase {
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


// CreateRobotApplicationRequestBodyEnvironment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class CreateRobotApplicationRequestBodyEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// CreateRobotApplicationRequestBodyRobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class CreateRobotApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: shared.RobotSoftwareSuiteTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}


export class CreateRobotApplicationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: CreateRobotApplicationRequestBodyEnvironment;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite: CreateRobotApplicationRequestBodyRobotSoftwareSuite;

  @Metadata({ data: "json, name=sources", elemType: shared.SourceConfig })
  sources?: shared.SourceConfig[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateRobotApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRobotApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateRobotApplicationRequestBody;
}


export class CreateRobotApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createRobotApplicationResponse?: shared.CreateRobotApplicationResponse;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
