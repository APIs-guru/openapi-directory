import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateBudgetFromResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateBudgetFromResource = "AWS242ServiceCatalogService.DisassociateBudgetFromResource"
}


export class DisassociateBudgetFromResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateBudgetFromResourceXAmzTargetEnum;
}


export class DisassociateBudgetFromResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateBudgetFromResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateBudgetFromResourceInput;
}


export class DisassociateBudgetFromResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateBudgetFromResourceOutput?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
