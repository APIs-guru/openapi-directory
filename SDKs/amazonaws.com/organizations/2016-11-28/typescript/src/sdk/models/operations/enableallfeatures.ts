import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EnableAllFeaturesXAmzTargetEnum {
    AwsOrganizationsV20161128EnableAllFeatures = "AWSOrganizationsV20161128.EnableAllFeatures"
}


export class EnableAllFeaturesHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableAllFeaturesXAmzTargetEnum;
}


export class EnableAllFeaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EnableAllFeaturesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class EnableAllFeaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsOrganizationsNotInUseException?: any;

  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enableAllFeaturesResponse?: shared.EnableAllFeaturesResponse;

  @SpeakeasyMetadata()
  handshakeConstraintViolationException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
