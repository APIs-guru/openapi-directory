import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationConfigurationHeaders extends SpeakeasyBase {
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


export class UpdateOrganizationConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoEnable" })
  autoEnable: boolean;
}


export class UpdateOrganizationConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateOrganizationConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateOrganizationConfigurationRequestBody;
}


export class UpdateOrganizationConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

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

  @Metadata()
  updateOrganizationConfigurationResponse?: Map<string, any>;
}
