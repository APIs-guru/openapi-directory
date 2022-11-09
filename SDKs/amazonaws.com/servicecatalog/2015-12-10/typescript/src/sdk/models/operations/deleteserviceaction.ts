import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteServiceAction = "AWS242ServiceCatalogService.DeleteServiceAction"
}


export class DeleteServiceActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteServiceActionXAmzTargetEnum;
}


export class DeleteServiceActionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteServiceActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteServiceActionInput;
}


export class DeleteServiceActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteServiceActionOutput?: Map<string, any>;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
