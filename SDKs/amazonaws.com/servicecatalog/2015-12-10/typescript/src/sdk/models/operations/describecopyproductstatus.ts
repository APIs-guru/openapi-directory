import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCopyProductStatusXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeCopyProductStatus = "AWS242ServiceCatalogService.DescribeCopyProductStatus"
}


export class DescribeCopyProductStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCopyProductStatusXAmzTargetEnum;
}


export class DescribeCopyProductStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCopyProductStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCopyProductStatusInput;
}


export class DescribeCopyProductStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeCopyProductStatusOutput?: shared.DescribeCopyProductStatusOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
