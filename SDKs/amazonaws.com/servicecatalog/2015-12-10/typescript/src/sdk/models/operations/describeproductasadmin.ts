import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeProductAsAdminXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProductAsAdmin = "AWS242ServiceCatalogService.DescribeProductAsAdmin"
}


export class DescribeProductAsAdminHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeProductAsAdminXAmzTargetEnum;
}


export class DescribeProductAsAdminRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeProductAsAdminHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeProductAsAdminInput;
}


export class DescribeProductAsAdminResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeProductAsAdminOutput?: shared.DescribeProductAsAdminOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
