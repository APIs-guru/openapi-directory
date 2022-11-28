import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostRestoreDbInstanceToPointInTimeActionEnum {
    RestoreDbInstanceToPointInTime = "RestoreDBInstanceToPointInTime"
}

export enum PostRestoreDbInstanceToPointInTimeVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class PostRestoreDbInstanceToPointInTimeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRestoreDbInstanceToPointInTimeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRestoreDbInstanceToPointInTimeVersionEnum;
}


export class PostRestoreDbInstanceToPointInTimeHeaders extends SpeakeasyBase {
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


export class PostRestoreDbInstanceToPointInTimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostRestoreDbInstanceToPointInTimeQueryParams;

  @SpeakeasyMetadata()
  headers: PostRestoreDbInstanceToPointInTimeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRestoreDbInstanceToPointInTimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
