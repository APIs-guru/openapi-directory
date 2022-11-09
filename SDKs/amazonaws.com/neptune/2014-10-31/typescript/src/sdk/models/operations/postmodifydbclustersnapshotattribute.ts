import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostModifyDbClusterSnapshotAttributeActionEnum {
    ModifyDbClusterSnapshotAttribute = "ModifyDBClusterSnapshotAttribute"
}

export enum PostModifyDbClusterSnapshotAttributeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostModifyDbClusterSnapshotAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyDbClusterSnapshotAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyDbClusterSnapshotAttributeVersionEnum;
}


export class PostModifyDbClusterSnapshotAttributeHeaders extends SpeakeasyBase {
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


export class PostModifyDbClusterSnapshotAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostModifyDbClusterSnapshotAttributeQueryParams;

  @Metadata()
  headers: PostModifyDbClusterSnapshotAttributeHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyDbClusterSnapshotAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
