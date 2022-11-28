import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePlaceIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IndexName" })
  indexName: string;
}


export class UpdatePlaceIndexHeaders extends SpeakeasyBase {
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
}


// UpdatePlaceIndexRequestBodyDataSourceConfiguration
/** 
 * <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>
**/
export class UpdatePlaceIndexRequestBodyDataSourceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IntendedUse" })
  intendedUse?: shared.IntendedUseEnum;
}

export enum UpdatePlaceIndexRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}


export class UpdatePlaceIndexRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSourceConfiguration" })
  dataSourceConfiguration?: UpdatePlaceIndexRequestBodyDataSourceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=PricingPlan" })
  pricingPlan?: UpdatePlaceIndexRequestBodyPricingPlanEnum;
}


export class UpdatePlaceIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePlaceIndexPathParams;

  @SpeakeasyMetadata()
  headers: UpdatePlaceIndexHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdatePlaceIndexRequestBody;
}


export class UpdatePlaceIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updatePlaceIndexResponse?: shared.UpdatePlaceIndexResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
