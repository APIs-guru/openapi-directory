import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostModifyCurrentDbClusterCapacityActionEnum {
    ModifyCurrentDbClusterCapacity = "ModifyCurrentDBClusterCapacity"
}

export enum PostModifyCurrentDbClusterCapacityVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostModifyCurrentDbClusterCapacityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyCurrentDbClusterCapacityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyCurrentDbClusterCapacityVersionEnum;
}


export class PostModifyCurrentDbClusterCapacityHeaders extends SpeakeasyBase {
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


export class PostModifyCurrentDbClusterCapacityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostModifyCurrentDbClusterCapacityQueryParams;

  @Metadata()
  headers: PostModifyCurrentDbClusterCapacityHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyCurrentDbClusterCapacityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
