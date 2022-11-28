import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRemoveTagsFromResourceActionEnum {
    RemoveTagsFromResource = "RemoveTagsFromResource"
}

export enum GetRemoveTagsFromResourceVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetRemoveTagsFromResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemoveTagsFromResourceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceName" })
  resourceName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemoveTagsFromResourceVersionEnum;
}


export class GetRemoveTagsFromResourceHeaders extends SpeakeasyBase {
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


export class GetRemoveTagsFromResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRemoveTagsFromResourceQueryParams;

  @SpeakeasyMetadata()
  headers: GetRemoveTagsFromResourceHeaders;
}


export class GetRemoveTagsFromResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
