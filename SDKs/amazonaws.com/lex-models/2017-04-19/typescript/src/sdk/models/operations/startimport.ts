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
    OverwriteLatest = "OVERWRITE_LATEST"
,    FailOnConflict = "FAIL_ON_CONFLICT"
}

export enum StartImportRequestBodyResourceTypeEnum {
    Bot = "BOT"
,    Intent = "INTENT"
,    SlotType = "SLOT_TYPE"
}


export class StartImportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=mergeStrategy" })
  mergeStrategy: StartImportRequestBodyMergeStrategyEnum;

  @Metadata({ data: "json, name=payload" })
  payload: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: StartImportRequestBodyResourceTypeEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class StartImportRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartImportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartImportRequestBody;
}


export class StartImportResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  startImportResponse?: shared.StartImportResponse;

  @Metadata()
  statusCode: number;
}
