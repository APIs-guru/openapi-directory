import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostRestoreDbClusterFromS3ActionEnum {
    RestoreDbClusterFromS3 = "RestoreDBClusterFromS3"
}

export enum PostRestoreDbClusterFromS3VersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostRestoreDbClusterFromS3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRestoreDbClusterFromS3ActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRestoreDbClusterFromS3VersionEnum;
}


export class PostRestoreDbClusterFromS3Headers extends SpeakeasyBase {
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


export class PostRestoreDbClusterFromS3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostRestoreDbClusterFromS3QueryParams;

  @SpeakeasyMetadata()
  headers: PostRestoreDbClusterFromS3Headers;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRestoreDbClusterFromS3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
