import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListLicenseSpecificationsForResourceXAmzTargetEnum {
    AwsLicenseManagerListLicenseSpecificationsForResource = "AWSLicenseManager.ListLicenseSpecificationsForResource"
}


export class ListLicenseSpecificationsForResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListLicenseSpecificationsForResourceXAmzTargetEnum;
}


export class ListLicenseSpecificationsForResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListLicenseSpecificationsForResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListLicenseSpecificationsForResourceRequest;
}


export class ListLicenseSpecificationsForResourceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  authorizationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  listLicenseSpecificationsForResourceResponse?: shared.ListLicenseSpecificationsForResourceResponse;

  @Metadata()
  rateLimitExceededException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  statusCode: number;
}
