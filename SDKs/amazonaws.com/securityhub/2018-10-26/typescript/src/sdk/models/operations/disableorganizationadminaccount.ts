import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisableOrganizationAdminAccountHeaders extends SpeakeasyBase {
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
}


export class DisableOrganizationAdminAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminAccountId" })
  adminAccountId: string;
}


export class DisableOrganizationAdminAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableOrganizationAdminAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DisableOrganizationAdminAccountRequestBody;
}


export class DisableOrganizationAdminAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disableOrganizationAdminAccountResponse?: Map<string, any>;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
