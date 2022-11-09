import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeContainerXAmzTargetEnum {
    MediaStore20170901DescribeContainer = "MediaStore_20170901.DescribeContainer"
}


export class DescribeContainerHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeContainerXAmzTargetEnum;
}


export class DescribeContainerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeContainerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeContainerInput;
}


export class DescribeContainerResponse extends SpeakeasyBase {
  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeContainerOutput?: shared.DescribeContainerOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
