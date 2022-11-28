import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CheckoutBorrowLicenseXAmzTargetEnum {
    AwsLicenseManagerCheckoutBorrowLicense = "AWSLicenseManager.CheckoutBorrowLicense"
}


export class CheckoutBorrowLicenseHeaders extends SpeakeasyBase {
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
  xAmzTarget: CheckoutBorrowLicenseXAmzTargetEnum;
}


export class CheckoutBorrowLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CheckoutBorrowLicenseHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CheckoutBorrowLicenseRequest;
}


export class CheckoutBorrowLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  authorizationException?: any;

  @SpeakeasyMetadata()
  checkoutBorrowLicenseResponse?: shared.CheckoutBorrowLicenseResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entitlementNotAllowedException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  noEntitlementsAllowedException?: any;

  @SpeakeasyMetadata()
  rateLimitExceededException?: any;

  @SpeakeasyMetadata()
  redirectException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serverInternalException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedDigitalSignatureMethodException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
