import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostRemoveTagsFromResourceActionEnum {
    RemoveTagsFromResource = "RemoveTagsFromResource"
}

export enum PostRemoveTagsFromResourceVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}


export class PostRemoveTagsFromResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRemoveTagsFromResourceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRemoveTagsFromResourceVersionEnum;
}


export class PostRemoveTagsFromResourceHeaders extends SpeakeasyBase {
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


export class PostRemoveTagsFromResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostRemoveTagsFromResourceQueryParams;

  @SpeakeasyMetadata()
  headers: PostRemoveTagsFromResourceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRemoveTagsFromResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
