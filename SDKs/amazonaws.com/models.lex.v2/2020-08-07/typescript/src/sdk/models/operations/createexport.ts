import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateExportHeaders extends SpeakeasyBase {
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

export enum CreateExportRequestBodyFileFormatEnum {
    LexJson = "LexJson"
}


// CreateExportRequestBodyResourceSpecification
/** 
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
**/
export class CreateExportRequestBodyResourceSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botExportSpecification" })
  botExportSpecification?: shared.BotExportSpecification;

  @SpeakeasyMetadata({ data: "json, name=botLocaleExportSpecification" })
  botLocaleExportSpecification?: shared.BotLocaleExportSpecification;
}


export class CreateExportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileFormat" })
  fileFormat: CreateExportRequestBodyFileFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=filePassword" })
  filePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceSpecification" })
  resourceSpecification: CreateExportRequestBodyResourceSpecification;
}


export class CreateExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateExportHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateExportRequestBody;
}


export class CreateExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createExportResponse?: shared.CreateExportResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
