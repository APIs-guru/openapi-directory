import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCancelExportTaskActionEnum {
    CancelExportTask = "CancelExportTask"
}

export enum GetCancelExportTaskVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetCancelExportTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCancelExportTaskActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExportTaskIdentifier" })
  exportTaskIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCancelExportTaskVersionEnum;
}


export class GetCancelExportTaskHeaders extends SpeakeasyBase {
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


export class GetCancelExportTaskRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCancelExportTaskQueryParams;

  @Metadata()
  headers: GetCancelExportTaskHeaders;
}


export class GetCancelExportTaskResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
