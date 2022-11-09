import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GenerateDataSetXAmzTargetEnum {
    MarketplaceCommerceAnalytics20150701GenerateDataSet = "MarketplaceCommerceAnalytics20150701.GenerateDataSet"
}


export class GenerateDataSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: GenerateDataSetXAmzTargetEnum;
}


export class GenerateDataSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: GenerateDataSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GenerateDataSetRequest;
}


export class GenerateDataSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  generateDataSetResult?: shared.GenerateDataSetResult;

  @Metadata()
  marketplaceCommerceAnalyticsException?: any;

  @Metadata()
  statusCode: number;
}
