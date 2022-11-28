import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutParameterXAmzTargetEnum {
    AmazonSsmPutParameter = "AmazonSSM.PutParameter"
}


export class PutParameterHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutParameterXAmzTargetEnum;
}


export class PutParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutParameterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutParameterRequest;
}


export class PutParameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hierarchyLevelLimitExceededException?: any;

  @SpeakeasyMetadata()
  hierarchyTypeMismatchException?: any;

  @SpeakeasyMetadata()
  incompatiblePolicyException?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidAllowedPatternException?: any;

  @SpeakeasyMetadata()
  invalidKeyId?: any;

  @SpeakeasyMetadata()
  invalidPolicyAttributeException?: any;

  @SpeakeasyMetadata()
  invalidPolicyTypeException?: any;

  @SpeakeasyMetadata()
  parameterAlreadyExists?: any;

  @SpeakeasyMetadata()
  parameterLimitExceeded?: any;

  @SpeakeasyMetadata()
  parameterMaxVersionLimitExceeded?: any;

  @SpeakeasyMetadata()
  parameterPatternMismatchException?: any;

  @SpeakeasyMetadata()
  policiesLimitExceededException?: any;

  @SpeakeasyMetadata()
  putParameterResult?: shared.PutParameterResult;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyUpdates?: any;

  @SpeakeasyMetadata()
  unsupportedParameterType?: any;
}
