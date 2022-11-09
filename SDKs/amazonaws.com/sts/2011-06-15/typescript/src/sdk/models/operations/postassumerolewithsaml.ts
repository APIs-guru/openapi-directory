import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAssumeRoleWithSamlActionEnum {
    AssumeRoleWithSaml = "AssumeRoleWithSAML"
}

export enum PostAssumeRoleWithSamlVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class PostAssumeRoleWithSamlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAssumeRoleWithSamlActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAssumeRoleWithSamlVersionEnum;
}


export class PostAssumeRoleWithSamlHeaders extends SpeakeasyBase {
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


export class PostAssumeRoleWithSamlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAssumeRoleWithSamlQueryParams;

  @Metadata()
  headers: PostAssumeRoleWithSamlHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAssumeRoleWithSamlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
