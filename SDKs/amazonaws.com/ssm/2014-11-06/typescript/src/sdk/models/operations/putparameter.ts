import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutParameterXAmzTargetEnum {
    AmazonSsmPutParameter = "AmazonSSM.PutParameter"
}


export class PutParameterHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutParameterXAmzTargetEnum;
}


export class PutParameterRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutParameterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutParameterRequest;
}


export class PutParameterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hierarchyLevelLimitExceededException?: any;

  @Metadata()
  hierarchyTypeMismatchException?: any;

  @Metadata()
  incompatiblePolicyException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidAllowedPatternException?: any;

  @Metadata()
  invalidKeyId?: any;

  @Metadata()
  invalidPolicyAttributeException?: any;

  @Metadata()
  invalidPolicyTypeException?: any;

  @Metadata()
  parameterAlreadyExists?: any;

  @Metadata()
  parameterLimitExceeded?: any;

  @Metadata()
  parameterMaxVersionLimitExceeded?: any;

  @Metadata()
  parameterPatternMismatchException?: any;

  @Metadata()
  policiesLimitExceededException?: any;

  @Metadata()
  putParameterResult?: shared.PutParameterResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyUpdates?: any;

  @Metadata()
  unsupportedParameterType?: any;
}
