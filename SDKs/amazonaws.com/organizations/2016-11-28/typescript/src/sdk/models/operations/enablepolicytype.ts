import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnablePolicyTypeXAmzTargetEnum {
    AwsOrganizationsV20161128EnablePolicyType = "AWSOrganizationsV20161128.EnablePolicyType"
}


export class EnablePolicyTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnablePolicyTypeXAmzTargetEnum;
}


export class EnablePolicyTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnablePolicyTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnablePolicyTypeRequest;
}


export class EnablePolicyTypeResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  constraintViolationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  enablePolicyTypeResponse?: shared.EnablePolicyTypeResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  policyChangesInProgressException?: any;

  @Metadata()
  policyTypeAlreadyEnabledException?: any;

  @Metadata()
  policyTypeNotAvailableForOrganizationException?: any;

  @Metadata()
  rootNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsupportedApiEndpointException?: any;
}
