import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSecurityHubConfigurationHeaders extends SpeakeasyBase {
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


export class UpdateSecurityHubConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoEnableControls" })
  autoEnableControls?: boolean;
}


export class UpdateSecurityHubConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSecurityHubConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSecurityHubConfigurationRequestBody;
}


export class UpdateSecurityHubConfigurationResponse extends SpeakeasyBase {
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
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSecurityHubConfigurationResponse?: Map<string, any>;
}
