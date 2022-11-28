import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostModifyClusterSnapshotScheduleActionEnum {
    ModifyClusterSnapshotSchedule = "ModifyClusterSnapshotSchedule"
}

export enum PostModifyClusterSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostModifyClusterSnapshotScheduleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyClusterSnapshotScheduleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyClusterSnapshotScheduleVersionEnum;
}


export class PostModifyClusterSnapshotScheduleHeaders extends SpeakeasyBase {
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


export class PostModifyClusterSnapshotScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostModifyClusterSnapshotScheduleQueryParams;

  @SpeakeasyMetadata()
  headers: PostModifyClusterSnapshotScheduleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyClusterSnapshotScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
