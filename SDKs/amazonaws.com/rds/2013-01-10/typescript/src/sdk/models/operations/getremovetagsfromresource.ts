import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRemoveTagsFromResourceActionEnum {
    RemoveTagsFromResource = "RemoveTagsFromResource"
}

export enum GetRemoveTagsFromResourceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetRemoveTagsFromResourceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemoveTagsFromResourceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResourceName" })
  resourceName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemoveTagsFromResourceVersionEnum;
}


export class GetRemoveTagsFromResourceHeaders extends SpeakeasyBase {
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


export class GetRemoveTagsFromResourceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoveTagsFromResourceQueryParams;

  @Metadata()
  headers: GetRemoveTagsFromResourceHeaders;
}


export class GetRemoveTagsFromResourceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
