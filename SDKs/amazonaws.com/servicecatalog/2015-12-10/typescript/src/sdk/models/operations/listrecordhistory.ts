import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListRecordHistoryXAmzTargetEnum {
    Aws242ServiceCatalogServiceListRecordHistory = "AWS242ServiceCatalogService.ListRecordHistory"
}


export class ListRecordHistoryHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListRecordHistoryXAmzTargetEnum;
}


export class ListRecordHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListRecordHistoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListRecordHistoryInput;
}


export class ListRecordHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  listRecordHistoryOutput?: shared.ListRecordHistoryOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
