import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostModifySnapshotCopyRetentionPeriodActionEnum {
    ModifySnapshotCopyRetentionPeriod = "ModifySnapshotCopyRetentionPeriod"
}

export enum PostModifySnapshotCopyRetentionPeriodVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostModifySnapshotCopyRetentionPeriodQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifySnapshotCopyRetentionPeriodActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifySnapshotCopyRetentionPeriodVersionEnum;
}


export class PostModifySnapshotCopyRetentionPeriodHeaders extends SpeakeasyBase {
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


export class PostModifySnapshotCopyRetentionPeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostModifySnapshotCopyRetentionPeriodQueryParams;

  @SpeakeasyMetadata()
  headers: PostModifySnapshotCopyRetentionPeriodHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifySnapshotCopyRetentionPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
