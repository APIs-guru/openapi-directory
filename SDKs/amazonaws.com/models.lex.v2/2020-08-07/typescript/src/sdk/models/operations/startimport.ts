import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartImportHeaders extends SpeakeasyBase {
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

export enum StartImportRequestBodyMergeStrategyEnum {
    Overwrite = "Overwrite"
,    FailOnConflict = "FailOnConflict"
}


// StartImportRequestBodyResourceSpecification
/** 
 * Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
**/
export class StartImportRequestBodyResourceSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=botImportSpecification" })
  botImportSpecification?: shared.BotImportSpecification;

  @Metadata({ data: "json, name=botLocaleImportSpecification" })
  botLocaleImportSpecification?: shared.BotLocaleImportSpecification;
}


export class StartImportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePassword" })
  filePassword?: string;

  @Metadata({ data: "json, name=importId" })
  importId: string;

  @Metadata({ data: "json, name=mergeStrategy" })
  mergeStrategy: StartImportRequestBodyMergeStrategyEnum;

  @Metadata({ data: "json, name=resourceSpecification" })
  resourceSpecification: StartImportRequestBodyResourceSpecification;
}


export class StartImportRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartImportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartImportRequestBody;
}


export class StartImportResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  startImportResponse?: shared.StartImportResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
