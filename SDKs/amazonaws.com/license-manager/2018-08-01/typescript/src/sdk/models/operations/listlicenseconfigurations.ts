import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListLicenseConfigurationsXAmzTargetEnum {
    AwsLicenseManagerListLicenseConfigurations = "AWSLicenseManager.ListLicenseConfigurations"
}


export class ListLicenseConfigurationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListLicenseConfigurationsXAmzTargetEnum;
}


export class ListLicenseConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListLicenseConfigurationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListLicenseConfigurationsRequest;
}


export class ListLicenseConfigurationsResponse extends SpeakeasyBase {
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
  listLicenseConfigurationsResponse?: shared.ListLicenseConfigurationsResponse;

  @SpeakeasyMetadata()
  rateLimitExceededException?: any;

  @SpeakeasyMetadata()
  serverInternalException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
