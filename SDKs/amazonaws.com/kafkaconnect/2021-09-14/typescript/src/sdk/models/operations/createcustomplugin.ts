import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCustomPluginHeaders extends SpeakeasyBase {
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

export enum CreateCustomPluginRequestBodyContentTypeEnum {
    Jar = "JAR"
,    Zip = "ZIP"
}


// CreateCustomPluginRequestBodyLocation
/** 
 * Information about the location of a custom plugin.
**/
export class CreateCustomPluginRequestBodyLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Location" })
  s3Location?: shared.S3Location;
}


export class CreateCustomPluginRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType: CreateCustomPluginRequestBodyContentTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=location" })
  location: CreateCustomPluginRequestBodyLocation;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CreateCustomPluginRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCustomPluginHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCustomPluginRequestBody;
}


export class CreateCustomPluginResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCustomPluginResponse?: shared.CreateCustomPluginResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
