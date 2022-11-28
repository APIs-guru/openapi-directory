import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateLicenseSpecificationsForResourceXAmzTargetEnum {
    AwsLicenseManagerUpdateLicenseSpecificationsForResource = "AWSLicenseManager.UpdateLicenseSpecificationsForResource"
}


export class UpdateLicenseSpecificationsForResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateLicenseSpecificationsForResourceXAmzTargetEnum;
}


export class UpdateLicenseSpecificationsForResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateLicenseSpecificationsForResourceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateLicenseSpecificationsForResourceRequest;
}


export class UpdateLicenseSpecificationsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  authorizationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  invalidResourceStateException?: any;

  @SpeakeasyMetadata()
  licenseUsageException?: any;

  @SpeakeasyMetadata()
  rateLimitExceededException?: any;

  @SpeakeasyMetadata()
  serverInternalException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateLicenseSpecificationsForResourceResponse?: Map<string, any>;
}
