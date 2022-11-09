import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListRecordHistoryXAmzTargetEnum {
    Aws242ServiceCatalogServiceListRecordHistory = "AWS242ServiceCatalogService.ListRecordHistory"
}


export class ListRecordHistoryHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListRecordHistoryXAmzTargetEnum;
}


export class ListRecordHistoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListRecordHistoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListRecordHistoryInput;
}


export class ListRecordHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  listRecordHistoryOutput?: shared.ListRecordHistoryOutput;

  @Metadata()
  statusCode: number;
}
