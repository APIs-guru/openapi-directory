import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateTagOptionWithResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateTagOptionWithResource = "AWS242ServiceCatalogService.AssociateTagOptionWithResource"
}


export class AssociateTagOptionWithResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateTagOptionWithResourceXAmzTargetEnum;
}


export class AssociateTagOptionWithResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateTagOptionWithResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateTagOptionWithResourceInput;
}


export class AssociateTagOptionWithResourceResponse extends SpeakeasyBase {
  @Metadata()
  associateTagOptionWithResourceOutput?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  duplicateResourceException?: any;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagOptionNotMigratedException?: any;
}
