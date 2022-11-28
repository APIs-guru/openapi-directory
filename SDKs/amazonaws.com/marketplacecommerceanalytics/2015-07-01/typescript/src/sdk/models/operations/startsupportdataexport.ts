import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartSupportDataExportXAmzTargetEnum {
    MarketplaceCommerceAnalytics20150701StartSupportDataExport = "MarketplaceCommerceAnalytics20150701.StartSupportDataExport"
}


export class StartSupportDataExportHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StartSupportDataExportXAmzTargetEnum;
}


export class StartSupportDataExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartSupportDataExportHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartSupportDataExportRequest;
}


export class StartSupportDataExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  marketplaceCommerceAnalyticsException?: any;

  @SpeakeasyMetadata()
  startSupportDataExportResult?: shared.StartSupportDataExportResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
