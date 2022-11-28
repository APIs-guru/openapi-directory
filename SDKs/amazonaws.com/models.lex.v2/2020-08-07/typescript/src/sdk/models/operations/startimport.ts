import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartImportHeaders extends SpeakeasyBase {
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

export enum StartImportRequestBodyMergeStrategyEnum {
    Overwrite = "Overwrite",
    FailOnConflict = "FailOnConflict"
}


// StartImportRequestBodyResourceSpecification
/** 
 * Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
**/
export class StartImportRequestBodyResourceSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botImportSpecification" })
  botImportSpecification?: shared.BotImportSpecification;

  @SpeakeasyMetadata({ data: "json, name=botLocaleImportSpecification" })
  botLocaleImportSpecification?: shared.BotLocaleImportSpecification;
}


export class StartImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePassword" })
  filePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=importId" })
  importId: string;

  @SpeakeasyMetadata({ data: "json, name=mergeStrategy" })
  mergeStrategy: StartImportRequestBodyMergeStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceSpecification" })
  resourceSpecification: StartImportRequestBodyResourceSpecification;
}


export class StartImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartImportHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartImportRequestBody;
}


export class StartImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  startImportResponse?: shared.StartImportResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
