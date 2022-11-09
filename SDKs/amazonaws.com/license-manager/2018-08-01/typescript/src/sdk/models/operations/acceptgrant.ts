import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AcceptGrantXAmzTargetEnum {
    AwsLicenseManagerAcceptGrant = "AWSLicenseManager.AcceptGrant"
}


export class AcceptGrantHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcceptGrantXAmzTargetEnum;
}


export class AcceptGrantRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcceptGrantHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AcceptGrantRequest;
}


export class AcceptGrantResponse extends SpeakeasyBase {
  @Metadata()
  acceptGrantResponse?: shared.AcceptGrantResponse;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  authorizationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  rateLimitExceededException?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
