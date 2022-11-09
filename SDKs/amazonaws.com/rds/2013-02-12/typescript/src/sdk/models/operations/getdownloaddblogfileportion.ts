import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDownloadDbLogFilePortionActionEnum {
    DownloadDbLogFilePortion = "DownloadDBLogFilePortion"
}

export enum GetDownloadDbLogFilePortionVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetDownloadDbLogFilePortionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDownloadDbLogFilePortionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LogFileName" })
  logFileName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NumberOfLines" })
  numberOfLines?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDownloadDbLogFilePortionVersionEnum;
}


export class GetDownloadDbLogFilePortionHeaders extends SpeakeasyBase {
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


export class GetDownloadDbLogFilePortionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDownloadDbLogFilePortionQueryParams;

  @Metadata()
  headers: GetDownloadDbLogFilePortionHeaders;
}


export class GetDownloadDbLogFilePortionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
