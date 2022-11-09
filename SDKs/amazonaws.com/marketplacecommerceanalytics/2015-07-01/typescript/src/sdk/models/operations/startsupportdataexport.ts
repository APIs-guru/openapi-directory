import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartSupportDataExportXAmzTargetEnum {
    MarketplaceCommerceAnalytics20150701StartSupportDataExport = "MarketplaceCommerceAnalytics20150701.StartSupportDataExport"
}


export class StartSupportDataExportHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartSupportDataExportXAmzTargetEnum;
}


export class StartSupportDataExportRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartSupportDataExportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartSupportDataExportRequest;
}


export class StartSupportDataExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  marketplaceCommerceAnalyticsException?: any;

  @Metadata()
  startSupportDataExportResult?: shared.StartSupportDataExportResult;

  @Metadata()
  statusCode: number;
}
