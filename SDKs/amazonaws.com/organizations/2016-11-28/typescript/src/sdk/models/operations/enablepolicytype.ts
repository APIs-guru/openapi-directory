import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EnablePolicyTypeXAmzTargetEnum {
    AwsOrganizationsV20161128EnablePolicyType = "AWSOrganizationsV20161128.EnablePolicyType"
}


export class EnablePolicyTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnablePolicyTypeXAmzTargetEnum;
}


export class EnablePolicyTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EnablePolicyTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EnablePolicyTypeRequest;
}


export class EnablePolicyTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsOrganizationsNotInUseException?: any;

  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  constraintViolationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enablePolicyTypeResponse?: shared.EnablePolicyTypeResponse;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  policyChangesInProgressException?: any;

  @SpeakeasyMetadata()
  policyTypeAlreadyEnabledException?: any;

  @SpeakeasyMetadata()
  policyTypeNotAvailableForOrganizationException?: any;

  @SpeakeasyMetadata()
  rootNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unsupportedApiEndpointException?: any;
}
