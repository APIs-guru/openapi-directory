import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRestoreDbClusterFromS3ActionEnum {
    RestoreDbClusterFromS3 = "RestoreDBClusterFromS3"
}

export enum PostRestoreDbClusterFromS3VersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostRestoreDbClusterFromS3QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRestoreDbClusterFromS3ActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRestoreDbClusterFromS3VersionEnum;
}


export class PostRestoreDbClusterFromS3Headers extends SpeakeasyBase {
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


export class PostRestoreDbClusterFromS3Request extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRestoreDbClusterFromS3QueryParams;

  @Metadata()
  headers: PostRestoreDbClusterFromS3Headers;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRestoreDbClusterFromS3Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
