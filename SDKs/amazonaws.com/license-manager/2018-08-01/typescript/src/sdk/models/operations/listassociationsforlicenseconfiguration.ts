import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListAssociationsForLicenseConfigurationXAmzTargetEnum {
    AwsLicenseManagerListAssociationsForLicenseConfiguration = "AWSLicenseManager.ListAssociationsForLicenseConfiguration"
}


export class ListAssociationsForLicenseConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAssociationsForLicenseConfigurationXAmzTargetEnum;
}


export class ListAssociationsForLicenseConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListAssociationsForLicenseConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListAssociationsForLicenseConfigurationRequest;
}


export class ListAssociationsForLicenseConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  authorizationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  filterLimitExceededException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  listAssociationsForLicenseConfigurationResponse?: shared.ListAssociationsForLicenseConfigurationResponse;

  @SpeakeasyMetadata()
  rateLimitExceededException?: any;

  @SpeakeasyMetadata()
  serverInternalException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
