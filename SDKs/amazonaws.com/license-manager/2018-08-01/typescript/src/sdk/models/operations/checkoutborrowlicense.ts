import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CheckoutBorrowLicenseXAmzTargetEnum {
    AwsLicenseManagerCheckoutBorrowLicense = "AWSLicenseManager.CheckoutBorrowLicense"
}


export class CheckoutBorrowLicenseHeaders extends SpeakeasyBase {
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
  xAmzTarget: CheckoutBorrowLicenseXAmzTargetEnum;
}


export class CheckoutBorrowLicenseRequest extends SpeakeasyBase {
  @Metadata()
  headers: CheckoutBorrowLicenseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CheckoutBorrowLicenseRequest;
}


export class CheckoutBorrowLicenseResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  authorizationException?: any;

  @Metadata()
  checkoutBorrowLicenseResponse?: shared.CheckoutBorrowLicenseResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  entitlementNotAllowedException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  noEntitlementsAllowedException?: any;

  @Metadata()
  rateLimitExceededException?: any;

  @Metadata()
  redirectException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedDigitalSignatureMethodException?: any;

  @Metadata()
  validationException?: any;
}
