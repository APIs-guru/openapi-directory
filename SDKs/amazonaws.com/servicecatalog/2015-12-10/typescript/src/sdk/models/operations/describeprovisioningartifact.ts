import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisioningArtifact = "AWS242ServiceCatalogService.DescribeProvisioningArtifact"
}


export class DescribeProvisioningArtifactHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeProvisioningArtifactXAmzTargetEnum;
}


export class DescribeProvisioningArtifactRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeProvisioningArtifactHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeProvisioningArtifactInput;
}


export class DescribeProvisioningArtifactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeProvisioningArtifactOutput?: shared.DescribeProvisioningArtifactOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
