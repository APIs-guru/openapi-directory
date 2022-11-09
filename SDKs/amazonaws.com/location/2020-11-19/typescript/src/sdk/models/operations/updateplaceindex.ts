import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePlaceIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IndexName" })
  indexName: string;
}


export class UpdatePlaceIndexHeaders extends SpeakeasyBase {
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
}


// UpdatePlaceIndexRequestBodyDataSourceConfiguration
/** 
 * <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>
**/
export class UpdatePlaceIndexRequestBodyDataSourceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=IntendedUse" })
  intendedUse?: shared.IntendedUseEnum;
}

export enum UpdatePlaceIndexRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage"
,    MobileAssetTracking = "MobileAssetTracking"
,    MobileAssetManagement = "MobileAssetManagement"
}


export class UpdatePlaceIndexRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSourceConfiguration" })
  dataSourceConfiguration?: UpdatePlaceIndexRequestBodyDataSourceConfiguration;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan?: UpdatePlaceIndexRequestBodyPricingPlanEnum;
}


export class UpdatePlaceIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePlaceIndexPathParams;

  @Metadata()
  headers: UpdatePlaceIndexHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdatePlaceIndexRequestBody;
}


export class UpdatePlaceIndexResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updatePlaceIndexResponse?: shared.UpdatePlaceIndexResponse;

  @Metadata()
  validationException?: any;
}
