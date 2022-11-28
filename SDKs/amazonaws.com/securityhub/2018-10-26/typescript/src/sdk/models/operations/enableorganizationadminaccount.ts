import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableOrganizationAdminAccountHeaders extends SpeakeasyBase {
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
}


export class EnableOrganizationAdminAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdminAccountId" })
  adminAccountId: string;
}


export class EnableOrganizationAdminAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EnableOrganizationAdminAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: EnableOrganizationAdminAccountRequestBody;
}


export class EnableOrganizationAdminAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enableOrganizationAdminAccountResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidAccessException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
