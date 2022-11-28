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
    OverwriteLatest = "OVERWRITE_LATEST",
    FailOnConflict = "FAIL_ON_CONFLICT"
}

export enum StartImportRequestBodyResourceTypeEnum {
    Bot = "BOT",
    Intent = "INTENT",
    SlotType = "SLOT_TYPE"
}


export class StartImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mergeStrategy" })
  mergeStrategy: StartImportRequestBodyMergeStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: StartImportRequestBodyResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class StartImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartImportHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartImportRequestBody;
}


export class StartImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  startImportResponse?: shared.StartImportResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
