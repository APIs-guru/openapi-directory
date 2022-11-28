import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeDbSnapshotAttributesActionEnum {
    DescribeDbSnapshotAttributes = "DescribeDBSnapshotAttributes"
}

export enum GetDescribeDbSnapshotAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDescribeDbSnapshotAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDbSnapshotAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" })
  dbSnapshotIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDbSnapshotAttributesVersionEnum;
}


export class GetDescribeDbSnapshotAttributesHeaders extends SpeakeasyBase {
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


export class GetDescribeDbSnapshotAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeDbSnapshotAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeDbSnapshotAttributesHeaders;
}


export class GetDescribeDbSnapshotAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
