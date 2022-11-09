import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateExportHeaders extends SpeakeasyBase {
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

export enum CreateExportRequestBodyFileFormatEnum {
    LexJson = "LexJson"
}


// CreateExportRequestBodyResourceSpecification
/** 
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
**/
export class CreateExportRequestBodyResourceSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=botExportSpecification" })
  botExportSpecification?: shared.BotExportSpecification;

  @Metadata({ data: "json, name=botLocaleExportSpecification" })
  botLocaleExportSpecification?: shared.BotLocaleExportSpecification;
}


export class CreateExportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileFormat" })
  fileFormat: CreateExportRequestBodyFileFormatEnum;

  @Metadata({ data: "json, name=filePassword" })
  filePassword?: string;

  @Metadata({ data: "json, name=resourceSpecification" })
  resourceSpecification: CreateExportRequestBodyResourceSpecification;
}


export class CreateExportRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateExportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateExportRequestBody;
}


export class CreateExportResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createExportResponse?: shared.CreateExportResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
