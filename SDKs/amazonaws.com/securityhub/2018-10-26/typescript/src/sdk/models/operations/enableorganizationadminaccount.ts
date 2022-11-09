import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnableOrganizationAdminAccountHeaders extends SpeakeasyBase {
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


export class EnableOrganizationAdminAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminAccountId" })
  adminAccountId: string;
}


export class EnableOrganizationAdminAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableOrganizationAdminAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: EnableOrganizationAdminAccountRequestBody;
}


export class EnableOrganizationAdminAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  enableOrganizationAdminAccountResponse?: Map<string, any>;

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
