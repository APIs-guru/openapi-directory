import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRestoreDbInstanceToPointInTimeActionEnum {
    RestoreDbInstanceToPointInTime = "RestoreDBInstanceToPointInTime"
}

export enum PostRestoreDbInstanceToPointInTimeVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class PostRestoreDbInstanceToPointInTimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRestoreDbInstanceToPointInTimeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRestoreDbInstanceToPointInTimeVersionEnum;
}


export class PostRestoreDbInstanceToPointInTimeHeaders extends SpeakeasyBase {
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


export class PostRestoreDbInstanceToPointInTimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRestoreDbInstanceToPointInTimeQueryParams;

  @Metadata()
  headers: PostRestoreDbInstanceToPointInTimeHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRestoreDbInstanceToPointInTimeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
