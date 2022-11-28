import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDownloadDbLogFilePortionActionEnum {
    DownloadDbLogFilePortion = "DownloadDBLogFilePortion"
}

export enum GetDownloadDbLogFilePortionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}


export class GetDownloadDbLogFilePortionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDownloadDbLogFilePortionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LogFileName" })
  logFileName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NumberOfLines" })
  numberOfLines?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDownloadDbLogFilePortionVersionEnum;
}


export class GetDownloadDbLogFilePortionHeaders extends SpeakeasyBase {
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


export class GetDownloadDbLogFilePortionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDownloadDbLogFilePortionQueryParams;

  @SpeakeasyMetadata()
  headers: GetDownloadDbLogFilePortionHeaders;
}


export class GetDownloadDbLogFilePortionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
