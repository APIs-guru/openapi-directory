import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeSavingsPlansOfferingRatesHeaders extends SpeakeasyBase {
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


export class DescribeSavingsPlansOfferingRatesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.SavingsPlanOfferingRateFilterElement })
  filters?: shared.SavingsPlanOfferingRateFilterElement[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=operations" })
  operations?: string[];

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: shared.SavingsPlanProductTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=savingsPlanOfferingIds" })
  savingsPlanOfferingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=savingsPlanPaymentOptions" })
  savingsPlanPaymentOptions?: shared.SavingsPlanPaymentOptionEnum[];

  @SpeakeasyMetadata({ data: "json, name=savingsPlanTypes" })
  savingsPlanTypes?: shared.SavingsPlanTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=serviceCodes" })
  serviceCodes?: shared.SavingsPlanRateServiceCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=usageTypes" })
  usageTypes?: string[];
}


export class DescribeSavingsPlansOfferingRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeSavingsPlansOfferingRatesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DescribeSavingsPlansOfferingRatesRequestBody;
}


export class DescribeSavingsPlansOfferingRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeSavingsPlansOfferingRatesResponse?: shared.DescribeSavingsPlansOfferingRatesResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
