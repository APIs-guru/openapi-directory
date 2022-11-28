import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GenerateDataSetXAmzTargetEnum {
    MarketplaceCommerceAnalytics20150701GenerateDataSet = "MarketplaceCommerceAnalytics20150701.GenerateDataSet"
}


export class GenerateDataSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: GenerateDataSetXAmzTargetEnum;
}


export class GenerateDataSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GenerateDataSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GenerateDataSetRequest;
}


export class GenerateDataSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  generateDataSetResult?: shared.GenerateDataSetResult;

  @SpeakeasyMetadata()
  marketplaceCommerceAnalyticsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
